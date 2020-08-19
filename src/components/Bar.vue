
<template>
    <v-app-bar fixed app>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <h3 class="font-weight-light grey--text mt-16">Пётр Кузнецов</h3>
        <v-spacer></v-spacer>
        <template v-slot:extension>
            <v-tabs align-with-title>
                <v-tab class="font-weight-light" v-on:click="setQuery('me')">Обо мне</v-tab>
                <v-tab class="font-weight-light" v-on:click="setQuery('projects')">Проекты</v-tab>
                <v-tab class="font-weight-light" v-on:click="setQuery('education')">Образование</v-tab>
                <v-tab class="font-weight-light" v-on:click="setQuery('hobby')">Интересы</v-tab>
                <v-tab class="font-weight-light" v-on:click="setQuery('contacts')">Контакты</v-tab> 
                <v-spacer></v-spacer>
            </v-tabs>
        </template>
    </v-app-bar>
</template>

<script>
export default {
    name: 'Bar',
    props: [ 'setQuery' ]
}
</script>

<style>

</style>