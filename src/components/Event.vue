
<template>
    <v-row no-gutters>
        <v-col cols="12" sm="1" md="1">
            <div v-if="event.completed">
                <v-icon color="green darken-3">done</v-icon>
            </div>
        </v-col>
        <v-col cols="12" sm="3" md="3">
            <div v-if="event.completed">
                <v-btn text color="green darken-4" v-on:click="markDone(event.id)">
                    {{ event.header }}
                </v-btn>
            </div>
            <div v-else>
                <v-btn text v-on:click="markDone(event.id)">
                    {{ event.header }}
                </v-btn>
            </div>
        </v-col>
        <v-col cols="12" sm="2" md="2">
            <Form
                    v-bind:event="event"
                    v-bind:editEvent="editEvent"
                    v-bind:view="time"
                    v-bind:create="create"
                    v-bind:del="del"/>
        </v-col>
        <v-col cols="12" sm="4" md="4">
            <Form
                    v-bind:event="event"
                    v-bind:editEvent="editEvent"
                    v-bind:view="comment"
                    v-bind:create="create"
                    v-bind:del="del"/>
        </v-col>
    </v-row>
</template>

<script>
import Form from './Form'
export default {
    name: 'Event',
    components: { Form },
    props: [ 'event', 'markDone', 'editEvent', 'del' ],
    data() {
        return {
            comment: 'comment',
            time: 'time',
            create: false
        }
    }
}
</script>

<style>
.completed {
    color: green;
}
</style>