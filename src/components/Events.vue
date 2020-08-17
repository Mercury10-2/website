
<template>
    <div>
        <Event
                v-for="event in events"
                v-bind:key="event.id"
                v-bind:event="event"
                v-bind:markDone="markDone"
                v-bind:editEvent="editEvent"
                v-bind:del="del"/>
    </div>
</template>

<script>
import Service from '../service/service.js'
import Event from './Event'
export default {
    name: 'Events',
    props: [ 'query', 'create', 'deleteAll' ],
    components: { Event },
    data() {
        return {
            events: []
        }
    },
    watch: {
        query: {
            immediate: true,
            handler() {
                this.getEvents()
            }
        },
        create: {
            immediate: true,
            handler() {
                if (this.create == true)
                    this.getEvents()
            }
        },
        deleteAll: {
            immediate: true,
            handler() {
                if (this.deleteAll == true) {
                    Service.delAll()
                    this.getEvents()
                }
            }
        }
    },
    methods: {
        getEvents() {
            Service.getEvents(this.query)
                .then(response => {
                    this.events = response.data
                })
        },
        markDone(id) {
            Service.markDone(id, this.query)
                .then(response => {
                    this.events = response.data
                })
        },
        createEvent(eventData) {
            console.log(eventData)
        },
        editEvent(id, header, comment, date, month, year, hour, minute) {
            Service.editEvent(id, header, comment, date, month, year, hour, minute, this.query)
                .then(response => {
                    this.events = response.data
                })
        },
        del(id) {
            Service.deleteEvent(id, this.query)
                .then(response => {
                    this.events = response.data
                })
        }
    },
    created() {
        this.getEvents()
    }
}
</script>

<style>

</style>