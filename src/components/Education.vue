
<template>
    <v-container fluid app>
        <p class="font-weight-light grey--text">IT:</p>
        <p class="font-weight-light grey--text">{{ many() }}Алгоритмы, структуры данных, спортивное программирование:</p>
        <p class="font-weight-light grey--text">{{ many() }}{{ many() }}Рейтинг на Тимусе
            <v-btn icon x-large v-bind:href="getLink(1)" target="_blank">
                <v-icon color="grey darken-1" large>desktop_windows</v-icon>
            </v-btn>
        </p>
    </v-container>
</template>

<script>
export default {
    name: 'Education',
    methods: {
        many() {
            return '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'
        },
        spaces() {
            return '\xa0\xa0\xa0\xa0\xa0\xa0'
        },
        few() {
            return '\xa0\xa0\xa0'
        }
    }
}
</script>

<style>

</style>
<!--
https://acm.timus.ru/author.aspx?id=277293
https://www.hackerrank.com/otisler?hr_r=1
-->