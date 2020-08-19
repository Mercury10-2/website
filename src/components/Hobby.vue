
<template>
    <v-container fluid app>
        <v-row>
            <v-col>
                <p class="font-weight-light grey--text mt-3">{{ few() }}Йога</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <p class="font-weight-light grey--text">{{ few() }}Философия:</p>
            </v-col>
        </v-row>

                <p class="font-weight-light grey--text">
                        {{ many() }}Теория познания,{{ few() }}теория когнитивных формаций
                </p>

    </v-container>
</template>

<script>
export default {
    name: 'Hobby',
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