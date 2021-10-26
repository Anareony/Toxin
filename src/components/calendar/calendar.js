import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import './calendar.scss'

new AirDatepicker('.datepicker__dropdown',{
    range: true,
    multipleDatesSeparator: ' - ',
})

new AirDatepicker('.filter-date', {
    range: true,
    multipleDatesSeparator: ' - ',
    dateFormat: 'dd MMM',
    navTitles: {
        days: '<strong>MMMM</strong> <i>yyyy</i>',
    },    
    buttons: ['clear']
})
