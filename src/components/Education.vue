
<template>
    <v-container fluid app>
        <p class="font-weight-light grey--text mt-3">I.{{ few() }}Программирование:</p>
        <v-row>
            <v-col>
                <p class="font-weight-light grey--text mt-3">{{ many() }}
                        Курсы программирования на Java{{ spaces() }}javarush.ru:
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="9" md="9" lg="9" xl="9">
                <p class="font-weight-light grey--text mt-3">{{ many() }}{{ many() }}Профиль студента:</p>
            </v-col>
            <v-col cols="12" sm="3" md="3" lg="3" xl="3">
                <v-btn icon x-large v-bind:href="getLink(1)" target="_blank">
                    <v-icon color="grey darken-1" large>person</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
            <v-col>
                <p class="font-weight-light grey--text mt-3">{{ many() }}Алгоритмы, структуры данных, спортивное программирование:</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="9" md="9" lg="9" xl="9">
                <p class="font-weight-light grey--text mt-3">{{ many() }}{{ many() }}Профиль на Тимусе:</p>
            </v-col>
            <v-col cols="12" sm="3" md="3" lg="3" xl="3">
                <v-btn icon x-large v-bind:href="getLink(2)" target="_blank">
                    <v-icon color="grey darken-1" large>person</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col  cols="12" sm="9" md="9" lg="9" xl="9">
                <p class="font-weight-light grey--text mt-3">{{ many() }}{{ many() }}Профиль на HackerRank:</p>
            </v-col>
            <v-col cols="12" sm="3" md="3" lg="3" xl="3">
                <v-btn icon x-large v-bind:href="getLink(3)" target="_blank">
                    <v-icon color="grey darken-1" large>person</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col  cols="12" sm="9" md="9" lg="9" xl="9">
                <p class="font-weight-light grey--text mt-3">{{ many() }}{{ many() }}Профиль на LeetCode:</p>
            </v-col>
            <v-col cols="12" sm="3" md="3" lg="3" xl="3">
                <v-btn icon x-large v-bind:href="getLink(6)" target="_blank">
                    <v-icon color="grey darken-1" large>person</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
            <v-col>
                <p class="font-weight-light grey--text mt-3">{{ many() }}Примеры задач на графы:</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col  cols="12" sm="9" md="9" lg="9" xl="9">
                <p class="font-weight-light grey--text mt-3">{{ many() }}{{ many() }}
                        DFS{{ few() }}&{{ few() }}BFS:</p>
            </v-col>
            <v-col cols="12" sm="3" md="3" lg="3" xl="3">
                <v-btn icon x-large v-bind:href="getLink(4)" target="_blank">
                    <v-icon color="grey darken-1" large>share</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col  cols="12" sm="9" md="9" lg="9" xl="9">
                <p class="font-weight-light grey--text mt-3">{{ many() }}{{ many() }}
                        Prim's{{ few() }}algorithm{{ few() }}(MST):</p>
            </v-col>
            <v-col cols="12" sm="3" md="3" lg="3" xl="3">
                <v-btn icon x-large v-bind:href="getLink(5)" target="_blank">
                    <v-icon color="grey darken-1" large>share</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
            <v-col>
                <p class="font-weight-light grey--text mt-3">II.{{ few() }}Другое:</p>
                <p class="font-weight-light grey--text mt-3">{{ many() }}
                        СПБГУ{{ few() }}Экономический факультет</p>
                <p class="font-weight-light grey--text mt-3">{{ many() }}
                        СПБГУ{{ few() }}Восточный факультет</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Education',
    data() {
        return {
            timus: 'https://acm.timus.ru/author.aspx?id=277293',
            hackerrank: 'https://www.hackerrank.com/otisler?hr_r=1',
            javarush: 'https://javarush.ru/users/1395357',
            caravans: 'https://github.com/Mercury10-2/Algorithms_and_Data_Structures/blob/master/src/Graph_problems/Caravans.java',
            network: 'https://github.com/Mercury10-2/Algorithms_and_Data_Structures/blob/master/src/Graph_problems/Network.java',
            leetcode: 'https://leetcode.com/otisler'
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
            if (val == 2)
                return this.timus
            else if (val == 3)
                return this.hackerrank
            else if (val == 1)
                return this.javarush
            else if (val == 4)
                return this.caravans
            else if (val == 5)
                return this.network
            else if (val == 6)
                return this.leetcode
        }
    }
}
</script>

<style>

</style>