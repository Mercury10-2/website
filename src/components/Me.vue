
<template>
    <v-container fluid app>
        <v-row class="text-left">
            <v-col>
                <p class="font-weight-light grey--text spaces">Привет, я начинающий Java разработчик.</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <p class="font-weight-light grey--text spaces">Изучаю программирование более двух лет, из них полгода занимался спортивным
                    программированием, сейчас пишу проекты на Java и JavaScript.</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <p class="font-weight-light grey--text spaces">Основной стэк: </p>
                <p class="font-weight-light grey--text">{{ getSpaces() }}Java:{{ getSpaces() }}
                        Spring Boot,{{ veryLittleSpace() }}
                        Maven,{{ veryLittleSpace() }}
                        PostgreSQL</p>
                <p class="font-weight-light grey--text">{{ getSpaces() }}JavaScript:{{ littleSpace() }}
                        Vue,{{ veryLittleSpace() }}Vuetify,{{ veryLittleSpace() }}Axios</p>
                <br>
                <p class="font-weight-light grey--text spaces">Кроме того, знаком с:</p>
                <p class="font-weight-light grey--text">{{ getSpaces() }}
                        Git,{{ veryLittleSpace() }}
                        SQL,{{ veryLittleSpace() }}
                        JUnit,{{ veryLittleSpace() }}
                        Freemarker,{{ veryLittleSpace() }}
                        Postman,{{ veryLittleSpace() }}
                        HTML,{{ veryLittleSpace() }}
                        CSS,{{ veryLittleSpace() }}
                        regex,{{ veryLittleSpace() }}
                        CI/CD,{{ veryLittleSpace() }}
                        Heroku
                </p>
                <br>
                <p class="font-weight-light grey--text spaces">Среды разработки:{{ littleSpace() }} </p>
                <p class="font-weight-light grey--text">{{ getSpaces() }}
                    Intellij IDEA,{{ veryLittleSpace() }}
                    Visual Studio Code</p>
                <br>
                <p class="font-weight-light grey--text">Дополнительно:</p>
                <p class="font-weight-light grey--text spaces">{{ getSpaces() }}Свободный английский</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Me',
    methods: {
        getSpaces() {
            return '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'
        },
        littleSpace() {
            return '\xa0\xa0\xa0\xa0\xa0\xa0'
        },
        veryLittleSpace() {
            return '\xa0\xa0\xa0'
        }
    }
}
</script>

<style>/*
.spaces {
    word-spacing: 2px;
}*/
</style>