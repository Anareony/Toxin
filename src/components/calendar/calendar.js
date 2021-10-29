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
    buttons: ['apply','clear']
})

new AirDatepicker('.calendar',{
    inline: true,
    range: true,
    multipleDatesSeparator: ' - ',
    dateFormat: 'dd MMM',
    navTitles: {
        days: '<strong>MMMM</strong> <i>yyyy</i>',
    },    
    buttons: ['clear','today'],
    prevHtml: '<span class="material-icons">arrow_back</span>',
    nextHtml: '<span class="material-icons">arrow_forward</span>'
})