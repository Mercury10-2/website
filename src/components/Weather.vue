<!-- Город по выбору      GIT -->
<template>
    <v-card class="mx-auto" max-width="400">
        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title class="headline blue-grey--text">{{ weather.name }}</v-list-item-title>
                <v-list-item-subtitle class="blue-grey--text">{{ dateBuilder() }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-card-text>
            <v-divider></v-divider>
            <v-row align="center">
                <v-col class="display-2 blue-grey--text" cols="5">
                    {{ Math.round(weather.main.temp) }}&deg;C
                </v-col>
                <v-col cols="7">
                    <v-spacer></v-spacer>
                    <v-img v-bind:src="getIcon(weather.weather[0].icon)" width="92"></v-img>
                    <v-spacer></v-spacer>
                    <v-list-item-subtitle>
                        <p class="blue-grey--text">{{ weather.weather[0].description }}</p>
                    </v-list-item-subtitle>
                </v-col>
            </v-row>
            <v-divider></v-divider>
        </v-card-text>
        <v-list-item>
            <v-list-item-subtitle>
                <p class="blue-grey--text">Ощущается как: {{ Math.round(weather.main.feels_like) }}&deg;C </p>
            </v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
            <v-list-item-subtitle>
                <p class="blue-grey--text">Ветер: {{ Math.round(weather.wind.speed) }} м/с</p>
            </v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
            <v-list-item-subtitle>
                <p class="blue-grey--text">Влажность: {{ weather.main.humidity }}%</p>
            </v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
            <v-list-item-subtitle>
                <p class="blue-grey--text">
                    Восход: {{ getTime(weather.sys.sunrise) }} {{ getSpaces() }} Заход: {{ getTime(weather.sys.sunset) }}
                </p>
            </v-list-item-subtitle>
        </v-list-item>
        <v-divider></v-divider>
        <v-container fluid>
            <v-row>
                <v-col>
                    <v-list-item-subtitle align="center">
                        <p class="blue-grey--text">{{ getHour(forecast.list[0].dt) }}</p>
                        <v-img width="40" v-bind:src="getIcon(forecast.list[0].weather[0].icon)"></v-img>
                        <p class="blue-grey--text">{{ Math.round(forecast.list[0].main.temp) }}&deg;C</p>
                        <p class="blue-grey--text">{{ Math.round(forecast.list[0].wind.speed) }} м/с</p>
                    </v-list-item-subtitle>
                </v-col>
                <v-col>
                    <v-list-item-subtitle align="center">
                        <p class="blue-grey--text">{{ getHour(forecast.list[1].dt) }}</p>
                        <v-img width="40" v-bind:src="getIcon(forecast.list[1].weather[0].icon)"></v-img>
                        <p class="blue-grey--text">{{ Math.round(forecast.list[1].main.temp) }}&deg;C</p>
                        <p class="blue-grey--text">{{ Math.round(forecast.list[1].wind.speed) }} м/с</p>
                    </v-list-item-subtitle>
                </v-col>
                <v-col>
                    <v-list-item-subtitle align="center">
                        <p class="blue-grey--text">{{ getHour(forecast.list[2].dt) }}</p>
                        <v-img width="40" v-bind:src="getIcon(forecast.list[2].weather[0].icon)"></v-img>
                        <p class="blue-grey--text">{{ Math.round(forecast.list[2].main.temp) }}&deg;C</p>
                        <p class="blue-grey--text">{{ Math.round(forecast.list[2].wind.speed) }} м/с</p>
                    </v-list-item-subtitle>
                </v-col>
                <v-col>
                    <v-list-item-subtitle align="center">
                        <p class="blue-grey--text">{{ getHour(forecast.list[3].dt) }}</p>
                        <v-img width="40" v-bind:src="getIcon(forecast.list[3].weather[0].icon)"></v-img>
                        <p class="blue-grey--text">{{ Math.round(forecast.list[3].main.temp) }}&deg;C</p>
                        <p class="blue-grey--text">{{ Math.round(forecast.list[3].wind.speed) }} м/с</p>
                    </v-list-item-subtitle>
                </v-col>
                <v-col>
                    <v-list-item-subtitle align="center">
                        <p class="blue-grey--text">{{ getHour(forecast.list[4].dt) }}</p>
                        <v-img width="40" v-bind:src="getIcon(forecast.list[4].weather[0].icon)"></v-img>
                        <p class="blue-grey--text">{{ Math.round(forecast.list[4].main.temp) }}&deg;C</p>
                        <p class="blue-grey--text">{{ Math.round(forecast.list[4].wind.speed) }} м/с</p>
                    </v-list-item-subtitle>
                </v-col>
            </v-row>
            
        </v-container>
        <v-divider></v-divider>
        <v-container fluid>
            <v-row>
                <v-col>
                    <p class="blue-grey--text">{{ getNextDay(forecast.list[0].dt, 1) }}</p>
                    <p class="blue-grey--text">{{ getNextDay(forecast.list[0].dt, 2) }}</p>
                    <p class="blue-grey--text">{{ getNextDay(forecast.list[0].dt, 3) }}</p>
                    <p class="blue-grey--text">{{ getNextDay(forecast.list[0].dt, 4) }}</p>
                    <p class="blue-grey--text">{{ getNextDay(forecast.list[0].dt, 5) }}</p>
                </v-col>
                <v-col>
                    <v-img width="40" v-bind:src="getIcon(dailyForecast.daily[1].weather[0].icon)"></v-img>
                    <v-img width="40" v-bind:src="getIcon(dailyForecast.daily[2].weather[0].icon)"></v-img>
                    <v-img width="40" v-bind:src="getIcon(dailyForecast.daily[3].weather[0].icon)"></v-img>
                    <v-img width="40" v-bind:src="getIcon(dailyForecast.daily[4].weather[0].icon)"></v-img>
                    <v-img width="40" v-bind:src="getIcon(dailyForecast.daily[5].weather[0].icon)"></v-img>
                </v-col>
                <v-col>
                    <p class="blue-grey--text">
                        {{ Math.round(dailyForecast.daily[1].temp.day) }}&deg;
                        {{ getSpaces() }}
                        {{ Math.round(dailyForecast.daily[1].temp.night) }}&deg;
                    </p>
                    <p class="blue-grey--text">
                        {{ Math.round(dailyForecast.daily[2].temp.day) }}&deg;
                        {{ getSpaces() }}
                        {{ Math.round(dailyForecast.daily[2].temp.night) }}&deg;
                    </p>
                    <p class="blue-grey--text">
                        {{ Math.round(dailyForecast.daily[3].temp.day) }}&deg;
                        {{ getSpaces() }}
                        {{ Math.round(dailyForecast.daily[3].temp.night) }}&deg;
                    </p>
                    <p class="blue-grey--text">
                        {{ Math.round(dailyForecast.daily[4].temp.day) }}&deg;
                        {{ getSpaces() }}
                        {{ Math.round(dailyForecast.daily[4].temp.night) }}&deg;
                    </p>
                    <p class="blue-grey--text">
                        {{ Math.round(dailyForecast.daily[5].temp.day) }}&deg;
                        {{ getSpaces() }}
                        {{ Math.round(dailyForecast.daily[5].temp.night) }}&deg;
                    </p>
                </v-col>
            </v-row>
        </v-container>
        <v-divider></v-divider>
    </v-card>
</template>

<script>
export default {
    name: 'Weather',
    data () {
        return {
            api_key: 'ccd7504f20711290c40ebf4be56cca3c',
            url_base: 'https://api.openweathermap.org/data/2.5/',
            coords: 'lat=59.938630&lon=30.314130',
            query: 'Saint Petersburg, RU',
            weather: {},
            forecast: {},
            dailyForecast: {},
            days: ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        }
    },
    methods: {
        fetchWeather() {
            fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}&lang=ru`)
                    .then(res => {
                        return res.json()
                    }).then(this.setResults)
		},
		setResults(results) {
            this.weather = results;
        },
        fetchForecast() {
            fetch(`${this.url_base}forecast?q=${this.query}&units=metric&appid=${this.api_key}&lang=ru`)
                    .then(response => {
                        return response.json()
                    }).then(this.setForecast)
        },
        setForecast(fcst) {
            this.forecast = fcst
        },
        fetchDailyForecast() {
            fetch(`${this.url_base}onecall?${this.coords}&units=metric&exclude=hourly,minutely,current&appid=${this.api_key}&lang=ru`)
                    .then(response => {
                        return response.json()
                    }).then(this.setDailyForecast)
        },
        setDailyForecast(fcst) {
            this.dailyForecast = fcst
        },
        dateBuilder() {
			let d = new Date();
			let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
			let day = this.days[d.getDay()];
			let date = d.getDate();
			let month = months[d.getMonth()];
            let year = d.getFullYear();
			return `${day}, ${date} ${month} ${year}`;
        },
        getNextDay(date, i) {
            const index = (new Date(date * 1000).getDay())
            return this.days[index + i > 6 ? index + i - 7 : index + i]
        },
        getIcon(icon) {
            return "http://openweathermap.org/img/w/" + icon + ".png"
        },
        getTime(time) {
            const date = new Date(time * 1000)
            let hour = date.getHours()
            let minute = date.getMinutes()
            if (hour < 10) hour = '0' + hour
            if (minute < 10) minute = '0' + minute
            return `${hour}:${minute}`
        },
        getHour(time) {
            return new Date(time * 1000).getHours() + 'ч'
        },
        getSpaces() {
            return '\xa0\xa0\xa0\xa0\xa0\xa0'
        }
    },
	created() {
        this.fetchWeather()
        this.fetchForecast()
        this.fetchDailyForecast()
	}
}
</script>

<style>

</style>