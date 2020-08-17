
<template>
    <v-row>
        <v-dialog v-model="dialog" max-width="300px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn text color="blue darken-1" v-bind="attrs" v-on="on">
                    Удалить
                </v-btn>
            </template>
            <v-card>
                <v-card-text>
                    <v-container>
                        <v-row class="mt-4">
                            <v-spacer></v-spacer>
                            <p class="font-weight-black">Удалить событие?</p>
                            <v-spacer></v-spacer>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text v-on:click="del(event.id), dialog = false">Удалить</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text v-on:click="dialog = false">Отмена</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import Service from '../service/service.js'
export default {
    name: 'Delete',
    props: [ 'event', 'del' ],
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