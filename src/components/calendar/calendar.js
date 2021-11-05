import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import './calendar.scss'

let submitButton = {
    content: 'Применить',
    onClick: (dp) => {
        dp.hide()
    }
}

new AirDatepicker('.arrival', {
    range: true,
    dateFormat: 'dd.MM.yyyy',
    multipleDates: 2,
    showEvent: 'click',
    navTitles: {
        days: '<strong>MMMM</strong> <i>yyyy</i>',
    },    
    buttons: ['clear',submitButton],
    prevHtml: '<span class="material-icons">arrow_back</span>',
    nextHtml: '<span class="material-icons">arrow_forward</span>',
    onSelect({date, formattedDate, datepicker}) {
        $('.arrival').val(formattedDate[0])
        $('.departure').val(formattedDate[1])
    }
})

new AirDatepicker('.filter-date', {
    range: true,
    multipleDatesSeparator: ' - ',
    dateFormat: 'dd MMM',
    navTitles: {
        days: '<strong>MMMM</strong> <i>yyyy</i>',
    },    
    buttons: ['clear',submitButton],
    prevHtml: '<span class="material-icons">arrow_back</span>',
    nextHtml: '<span class="material-icons">arrow_forward</span>'
})

$(".field__input.departure").on('click', function() {
    $(this).parents(".date-picker").find(".field__input.arrival").trigger('click')
})