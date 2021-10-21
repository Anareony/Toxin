import 'ion-rangeslider'
import 'ion-rangeslider/css/ion.rangeSlider.min.css'
import './range-slider.scss'

$(".range-slider__input").ionRangeSlider({
    type: 'double',
    min: 0,
    max: 15000,
    from: 5000,
    to: 10000,
    hide_min_max: true,
    postfix: '₽',
    values_separator: ' - ',
  });