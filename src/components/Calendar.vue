
<template>
    <v-row class="fill-height">
        <v-col>
            <v-sheet height="64">
                <v-toolbar flat color="white">
                    <v-btn outlined class="mr-4" color="grey darken-2" v-on:click="setToday">Сегодня</v-btn>
                    <v-btn fab text small color="grey darken-2" v-on:click="prev">
                        <v-icon small>mdi-chevron-left</v-icon>
                    </v-btn>
                    <v-btn fab text small color="grey darken-2" v-on:click="next">
                        <v-icon small>mdi-chevron-right</v-icon>
                    </v-btn>
                    <v-toolbar-title v-if="$refs.calendar">{{ $refs.calendar.title }}</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-menu bottom right>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                                <span>{{ typeToLabel[type] }}</span>
                                <v-icon right>mdi-menu-down</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-on:click="type = 'day'">
                                <v-list-item-title>День</v-list-item-title>
                            </v-list-item>
                            <v-list-item v-on:click="type = 'week'">
                                <v-list-item-title>Неделя</v-list-item-title>
                            </v-list-item>
                            <v-list-item v-on:click="type = 'month'">
                                <v-list-item-title>Месяц</v-list-item-title>
                            </v-list-item>
                            <v-list-item v-on:click="type = '4day'">
                                <v-list-item-title>4 дня</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-toolbar>
            </v-sheet>
            <v-sheet height="600">
                <v-calendar ref="calendar" v-model="focus" color="primary" v-bind:events="events"
                        v-bind:event-color="getEventColor" :type="type" v-on:click:event="showEvent"
                        v-on:click:more="viewDay" v-on:click:date="viewDay" v-on:change="updateRange"
                        v-bind:weekday-format="dayFormat" v-bind:weekdays="weekdays">
                </v-calendar>
                <v-menu v-model="selectedOpen" :close-on-content-click="false" :activator="selectedElement" offset-x>
                    <v-card color="grey lighten-4" min-width="350px" flat>
                        <v-toolbar v-bind:color="selectedEvent.color" dark>
                            <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-card-text>
                            <span v-html="selectedEvent.details"></span>
                        </v-card-text>
                    </v-card>
                </v-menu>
            </v-sheet>
        </v-col>
    </v-row>
</template>

<script>
import Service from '../service/service.js'
export default {
    name: 'Calendar',
    data: () => ({
        focus: '',
        type: 'month',
        typeToLabel: {
            month: 'Месяц',
            week: 'Неделя',
            day: 'День',
            '4day': '4 дня',
        },
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
        events: [],
        colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'orange', 'grey darken-1'],
        weekdays: [1, 2, 3, 4, 5, 6, 0]
    }),
    mounted () {
        this.$refs.calendar.checkChange()
    },
    methods: {
        viewDay({ date }) {
            this.focus = date
            this.type = 'day'
        },
        getEventColor(event) {
            return event.color
        },
        setToday() {
            this.focus = ''
        },
        prev() {
            this.$refs.calendar.prev()
        },
        next() {
            this.$refs.calendar.next()
        },
        showEvent({ nativeEvent, event }) {
            const open = () => {
                this.selectedEvent = event
                this.selectedElement = nativeEvent.target
                setTimeout(() => this.selectedOpen = true, 10)
            }
            if (this.selectedOpen) {
                this.selectedOpen = false
                setTimeout(open, 10)
            } else
                open()
            nativeEvent.stopPropagation()
        },
        updateRange() {
            this.events = []
            let events = []
            //const colSize = this.colors.length
            Service.getCalendar()
                .then(response => {
                    events = response.data
                    for (let i = 0; i < events.length; i++) {
                        this.events.push({
                            name: events[i].name,
                            details: events[i].details,
                            completed: events[i].completed,
                            start: new Date(events[i].start),
                            end: new Date(events[i].end),
                            color: events[i].completed ? 'green' : 'blue-grey lighten-1',
                            timed: true,
                        })
                    }
                })
        },
        dayFormat(day) {
            if (day.weekday == 0)
                return 'Воскресение'
            if (day.weekday == 1)
                return 'Понедельник'
            if (day.weekday == 2)
                return 'Вторник'
            if (day.weekday == 3)
                return 'Среда'
            if (day.weekday == 4)
                return 'Четверг'
            if (day.weekday == 5)
                return 'Пятница'
            if (day.weekday == 6)
                return 'Суббота'
        }
    },
}
</script>

<style>

</style>