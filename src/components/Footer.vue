<!-- Погоду? -->
<template>
    <v-footer absolute class="font-weight-medium" app>
        <v-col class="text-center grey--text" cols="12">
            {{ new Date().getFullYear() }} <strong>&copy;</strong>
        </v-col>
    </v-footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>

</style>