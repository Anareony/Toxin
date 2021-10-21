import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import './calendar.scss'

new AirDatepicker('#start', {
    navTitles: {
        days: '<strong>MMMM</strong> <i>yyyy</i>',
    },    
    buttons: ['clear']
})