
<template>
    <v-app-bar fixed app><!-- color="#6A76AB" dark v-bind:src="background" app>
        <template v-slot:img="{ props }">
            <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)" ></v-img>
        </template>-->
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
                <v-tab class="font-weight-light" v-on:click="setQuery('hobby')">Хобби</v-tab>
                <v-tab class="font-weight-light" v-on:click="setQuery('contacts')">Контакты</v-tab> 
                <v-spacer></v-spacer>
            </v-tabs>
        </template>
    </v-app-bar>
</template>

<script>
export default {
    name: 'Bar',
    props: [ 'setQuery' ],
    data: () => ({
        background: require('../assets/Water.jpeg'),
    })
}
</script>

<style>
</style>