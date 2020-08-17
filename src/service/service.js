
import axios from 'axios'

//  const API_URL = 'http://localhost:8080'
const API_URL = 'https://dailyplanner2020ru.herokuapp.com'
const EVENTS = 'events'
const CALENDAR = 'calendar'

class Service {

    getEvents(query) {
        return axios.get(`${API_URL}/${EVENTS}/${query}`)
    }

    markDone(id, query) {
        return axios.put(`${API_URL}/${EVENTS}/${id}/${query}`)
    }

    createEvent(header, comment, date, month, year, hour, minute, query) {
        return axios.post(`${API_URL}/${EVENTS}/${header}/${comment}/${date}/${month}/${year}/${hour}/${minute}/${query}`)
    }

    editEvent(id, header, comment, date, month, year, hour, minute, query) {
        return axios.put(`${API_URL}/${EVENTS}/${id}/${header}/${comment}/${date}/${month}/${year}/${hour}/${minute}/${query}`)
    }

    getCalendar() {
        return axios.get(`${API_URL}/${CALENDAR}`)
    }

    deleteEvent(id, query) {
        return axios.delete(`${API_URL}/${EVENTS}/${id}/${query}`)
    }

    delAll() {
        return axios.delete(`${API_URL}/${EVENTS}`)
    }
}

export default new Service()