<!-- https://dev.to/rolanddoda/deploy-to-github-pages-like-a-pro-with-github-actions-4hdg -->
<template>
	<v-app app>
		<v-app-bar app>
			<Bar v-bind:setQuery="setQuery"/>
		</v-app-bar>
		<v-main>
			<v-container app>
				<Main v-bind:query="query"/>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import Bar from './components/Bar'
import Main from './components/Main'

export default {
	name: 'App',
	components: { Bar, Main },
	data() {
		return {
			query: 'me',
		}
	},
	methods: {
		setQuery(arg) {
			this.query = arg
		}
	},
	created () {
		this.$vuetify.theme.dark = true
	}
}
</script>

<style>
* {
	text-transform: none !important;
}
p {
    font-size: 1em;
}
</style>

<!--
<v-icon large>fab fa-pagelines</v-icon>
<v-icon class="mdi-36px">mdi-leaf</v-icon>
eco
-->