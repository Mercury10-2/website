
<template>
    <v-container fluid app>
        <v-row class="text-left">
            <v-col>
                <p class="font-weight-light grey--text">Почта:</p>
                <p class="font-weight-light grey--text">{{ getSpaces() }}otisler@yandex.ru</p>
            </v-col>
        </v-row>
        <br>
        <v-row class="text-left">
            <v-col>
                <p class="font-weight-light grey--text">Телефон:</p>
                <p class="font-weight-light grey--text">{{ getSpaces() }}+7(911)139-11-07</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Contacts',
    methods: {
        getSpaces() {
            return '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'
        },
        getALittleBitOfSpaces() {
            return '\xa0\xa0\xa0\xa0\xa0\xa0'
        }
    }
}
</script>

<style>

</style>