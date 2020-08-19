
<template>
    <v-container fluid app>
        <p class="font-weight-light grey--text">Ежедневник с календарём и прогнозом погоды:</p>
        <p class="font-weight-light grey--text">{{ many() }}Front:</p>
        <p class="font-weight-light grey--text">{{ many() }}{{ many() }}
                {{ spaces() }}JavaScript,
                {{ few() }}VueJs,
                {{ few() }}Vuetify,
                {{ few() }}Axios
        </p>
        <p class="font-weight-light grey--text">{{ many() }}Back:</p>
        <p class="font-weight-light grey--text">{{ many() }}{{ many() }}
                {{ spaces() }}Java,
                {{ few() }}Spring Boot REST,
                {{ few() }}Maven,
                {{ few() }}PostgreSQL
        </p>
        <p class="font-weight-light grey--text">{{ many() }}Deploy:</p>
        <p class="font-weight-light grey--text">{{ many() }}{{ many() }}
        {{ spaces() }}GitHub Pages,{{ few() }}Heroku</p>
        <v-row>
            <v-col cols="12" sm="2" md="2" lg="2" xl="2"></v-col>
            <v-col cols="12" sm="3" md="3">
                <v-btn icon x-large v-bind:href="getLink(1)" target="_blank">
                    <v-icon color="grey darken-1" large>desktop_windows</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="12" sm="3" md="3">
                <v-btn icon x-large v-bind:href="getLink(2)" target="_blank">
                    <v-icon color="grey darken-1" large>share</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="12" sm="3" md="3">
                <v-btn icon x-large v-bind:href="getLink(3)" target="_blank">
                    <v-icon color="grey darken-1" large>share</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <br>
        <v-divider></v-divider>
        <br>
        <br>
        <p class="font-weight-light grey--text">CRUD-функционал на примере симулятора склада:</p>
        <p class="font-weight-light grey--text">{{ many() }}Front:</p>
        <p class="font-weight-light grey--text">{{ many() }}{{ many() }}
                {{ spaces() }}JavaScript,
                {{ few() }}HTML,
                {{ few() }}CSS
        </p>
        <p class="font-weight-light grey--text">{{ many() }}Back:</p>
        <p class="font-weight-light grey--text">{{ many() }}{{ many() }}
                {{ spaces() }}Java,
                {{ few() }}Spring Boot MVC,
                {{ few() }}Maven,
                {{ few() }}PostgreSQL
        </p>
        <p class="font-weight-light grey--text">{{ many() }}Deploy:</p>
        <p class="font-weight-light grey--text">{{ many() }}{{ many() }}
        {{ spaces() }}Heroku</p>
        <v-row>
            <v-col cols="12" sm="2" md="2" lg="2" xl="2"></v-col>
            <v-col cols="12" sm="3" md="3">
                <v-btn icon x-large v-bind:href="getLink(4)" target="_blank">
                    <v-icon color="grey darken-1" large>desktop_windows</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="12" sm="3" md="3">
                <v-btn icon x-large v-bind:href="getLink(5)" target="_blank">
                    <v-icon color="grey darken-1" large>share</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <br>
        <v-divider></v-divider>
        <br>
        <br>
        <p class="font-weight-light grey--text">Динамическая заставка на экран:</p>
        <p class="font-weight-light grey--text">{{ many() }}Front:</p>
        <p class="font-weight-light grey--text">{{ many() }}{{ many() }}
                {{ spaces() }}JavaScript,
                {{ few() }}P5
        </p>
        <p class="font-weight-light grey--text">{{ many() }}Deploy:</p>
        <p class="font-weight-light grey--text">{{ many() }}{{ many() }}
        {{ spaces() }}GitHub Pages</p>
        <v-row>
            <v-col cols="12" sm="2" md="2" lg="2" xl="2"></v-col>
            <v-col cols="12" sm="3" md="3">
                <v-btn icon x-large v-bind:href="getLink(6)" target="_blank">
                    <v-icon color="grey darken-1" large>desktop_windows</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="12" sm="3" md="3">
                <v-btn icon x-large v-bind:href="getLink(7)" target="_blank">
                    <v-icon color="grey darken-1" large>share</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <br>
        <v-divider></v-divider>
        <br>
        <br>
        <p class="font-weight-light grey--text">Личная страница:</p>
        <p class="font-weight-light grey--text">{{ many() }}Front:</p>
        <p class="font-weight-light grey--text">{{ many() }}{{ many() }}
                {{ spaces() }}JavaScript,
                {{ few() }}VueJs,
                {{ few() }}Vuetify
        </p>
        <p class="font-weight-light grey--text">{{ many() }}Deploy:</p>
        <p class="font-weight-light grey--text">{{ many() }}{{ many() }}
        {{ spaces() }}GitHub Pages</p>
        <v-row>
            <v-col cols="12" sm="2" md="2" lg="2" xl="2"></v-col>
            <v-col cols="12" sm="3" md="3">
                <v-btn icon x-large v-bind:href="getLink(8)" target="_blank">
                    <v-icon color="grey darken-1" large>desktop_windows</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="12" sm="3" md="3">
                <v-btn icon x-large v-bind:href="getLink(9)" target="_blank">
                    <v-icon color="grey darken-1" large>share</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Projects',
    data() {
        return {
            dailyPlanner: 'https://mercury10-2.github.io/DailyPlannerClient',
            dpClient: 'https://github.com/Mercury10-2/DailyPlannerClient/tree/master/src',
            dpServer: 'https://github.com/Mercury10-2/DailyPlannerServer/tree/master/src/main/java/dplanner/dplanner',
            store: 'https://store-project-2020.herokuapp.com',
            storeGit: 'https://github.com/Mercury10-2/Store/tree/master/src/main',
            screensaver: 'https://mercury10-2.github.io/Particles',
            screensaverGit: 'https://github.com/Mercury10-2/Particles',
            website: 'https://mercury10-2.github.io/website',
            websiteGit: 'https://github.com/Mercury10-2/website/tree/master/src'
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
                return this.dailyPlanner
            else if (val == 2)
                return this.dpClient
            else if (val == 3)
                return this.dpServer
            else if (val == 4)
                return this.store
            else if (val == 5)
                return this.storeGit
            else if (val == 6)
                return this.screensaver
            else if (val == 7)
                return this.screensaverGit
            else if (val == 8)
                return this.website
            else
                return this.websiteGit
        }
    }
}
</script>

<style>

</style>