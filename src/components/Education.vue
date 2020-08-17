
<template>
    <v-container fluid app>
        <p class="font-weight-light grey--text">IT:</p>
        <p class="font-weight-light grey--text">{{ many() }}Алгоритмы, структуры данных, спортивное программирование:</p>
        <v-row>
            <v-col cols="12" sm="9" md="9" lg="9" xl="9">
                <p class="font-weight-light grey--text mt-3">{{ many() }}{{ many() }}Профиль на Тимусе:</p>
            </v-col>
            <v-col cols="12" sm="3" md="3" lg="3" xl="3">
                <v-btn icon x-large v-bind:href="getLink(1)" target="_blank">
                    <v-icon color="grey darken-1" large>list_alt</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col  cols="12" sm="9" md="9" lg="9" xl="9">
                <p class="font-weight-light grey--text mt-3">{{ many() }}{{ many() }}Профиль на HackerRank:</p>
            </v-col>
            <v-col cols="12" sm="3" md="3" lg="3" xl="3">
                <v-btn icon x-large v-bind:href="getLink(2)" target="_blank">
                    <v-icon color="grey darken-1" large>list_alt</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>              <!-- Примеры задач -->
</template>

<script>
export default {
    name: 'Education',
    data() {
        return {
            timus: 'https://acm.timus.ru/author.aspx?id=277293',
            hackerrank: 'https://www.hackerrank.com/otisler?hr_r=1'
        }
    },
    methods: {
        many() {
            return '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'
        },
        spaces() {
            return '\xa0\xa0\xa0\xa0\xa0\xa0'
        },
        few() {
            return '\xa0\xa0\xa0'
        },
        getLink(val) {
            if (val == 1)
                return this.timus
            else if (val == 2)
                return this.hackerrank
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