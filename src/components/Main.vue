
<template>
    <v-container class="fill-height" fluid app>
        <div v-if="query == 'me'">
            <Me/>
        </div>
        <div v-else-if="query == 'projects'">
            <Projects/>
        </div>
        <div v-else-if="query == 'education'">
            <Education/>
        </div>
        <div v-else-if="query == 'hobby'">
            <Hobby/>
        </div>
        <div v-else>
            <Contacts/>
        </div>
    </v-container>
</template>

<script>
import Me from './Me'
import Projects from './Projects'
import Education from './Education'
import Hobby from './Hobby'
import Contacts from './Contacts'

export default {
    name: 'Main',
    components: { Me, Projects, Education, Hobby, Contacts },
    props: [ 'query' ],
}
</script>

<style>

</style>