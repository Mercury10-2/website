
<template>
    <v-row>
        <v-dialog v-model="dialog" max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <div v-if='create == false'>
                    <div v-if="view == 'time'">
                        <div v-if="event.completed">
                            <v-btn text small color="green darken-4" v-bind="attrs" v-on="on">
                                {{ event.completionTime }}
                            </v-btn>
                        </div>
                        <div v-else>
                            <v-btn text small v-bind="attrs" v-on="on">
                                {{ event.plannedTime }}
                            </v-btn>
                        </div>
                    </div>
                    <div v-else>
                        <div v-if="event.completed">
                            <v-btn text small color="green darken-4" v-bind="attrs" v-on="on">
                                {{ event.comments }}
                            </v-btn>
                        </div>
                        <div v-else>
                            <v-btn text small v-bind="attrs" v-on="on">
                                {{ event.comments }}
                            </v-btn>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <v-tab>
                        <v-btn text v-bind="attrs" v-on="on">
                            Создать событие
                        </v-btn>
                    </v-tab>
                </div>
            </template>
            <v-card>
                <v-card-text>
                    <v-container>
                        <v-card-subtitle class="deep-orange--text">{{ incorrectData }}</v-card-subtitle>
                        <v-row>
                            <v-col cols="12" sm="10" md="8">
                                <v-text-field label="Заголовок" v-model="header" v-bind:rules="headerRules"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Комментарий" v-model="comment" v-bind:rules="commentRules"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="2" md="2">
                                <v-text-field label="Число" v-model="date" v-bind:rules="dateRules"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="2" md="2">
                                <v-text-field label="Месяц" v-model="month" v-bind:rules="monthRules"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="2" md="2">
                                <v-text-field label="Год" v-model="year" v-bind:rules="yearRules"></v-text-field>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="12" sm="2" md="2">
                                <v-text-field label="Часы" v-model="hour" v-bind:rules="hourRules"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="2" md="2">
                                <v-text-field label="Минуты" v-model="minute" v-bind:rules="minuteRules"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <div v-if="create == true">
                    <v-btn color="blue darken-1" text v-on:click="createEvent()">Создать</v-btn>
                    <v-btn color="blue darken-1" text v-on:click="dialog = false">Отмена</v-btn>
                </div>
                <div v-else>
                    <v-btn color="blue darken-1" text v-on:click="edit()">Изменить</v-btn>
                    <v-btn text v-on:click="dialog = false">
                        <Delete v-bind:del="del" v-bind:event="event"/>
                    </v-btn>
                </div>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import Service from '../service/service.js'
import Delete from './Delete'
export default {
    name: 'Form',
    props: [ 'event', 'editEvent', 'view', 'create', 'createEvent', 'del' ],
    components: { Delete },
    data() {
        return {
            dialog: false,
            header: '',
            comment: '',
            date: '',
            month: '',
            year: '',
            hour: '',
            minute: '',
            headerRules: [
                v => !!v || 'Заголовок не может быть пустым',
                v => (v && v.length <= 25) || 'Максимум 25 символов (у вас ' + v.length + ')'
            ],
            commentRules: [ v => (v && v.length <= 50) || 'Максимум 50 символов (у вас ' + v.length + ')'],
            dateRules: [ v => (v > 0 && v < 32) || 'От 1 до 31' ],
            monthRules: [ v => (v > 0 && v < 13) || 'От 1 до 12'],
            yearRules: [ v => (v > 2019 && v < 2031) || 'От 2020 до 2030'],
            hourRules: [ v=> (v > -1 && v < 24) || 'От 0 до 23'],
            minuteRules: [ v => (v > -1 && v < 60) || 'От 0 до 59'],
            incorrectData: ''
        }
    },
    watch: {
        create: {
            immediate: true,
            handler() {
                if (this.create == true)
                    this.this.dialog = true
            }
        }
    },
    methods: {
        setData() {
            if (this.create) {
                this.header = ''
                this.comment = ''
            } else {
                this.header = this.event.header
                this.comment = this.event.comments
            }
            const d = new Date()
            this.date = d.getDate()
            this.month = d.getMonth() + 1
            this.year = d.getFullYear()
            this.hour = d.getHours()
            this.minute = d.getMinutes()
            this.incorrectData = ''
        },
        eventCreation() {
            Service.createEvent(this.header, this.comment, this.date, this.month, this.year, this.hour, this.minute)
        },
        edit() {
            if (this.date <= this.checkDaysInMonth(this.month, this.year)) {
                this.editEvent(this.event.id, this.header, this.comment, this.date, this.month, this.year, this.hour, this.minute)
                this.dialog = false
            } else
                this.incorrectData = 'Нет такой даты в выбранном месяце.'
        },
        checkDaysInMonth (month, year) {
            return new Date(year, month, 0).getDate();
        }
    },
    created() {
        this.setData()
    }
}
</script>

<style>

</style>