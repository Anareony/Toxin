import './search-room.scss'

import '../../components/dropdown/dropdown'
import '../../components/range-slider/range-slider'
// import '../../components/calendar/calendar'
import '../../components/header/header'

const filter = document.querySelector('.search-room__filter-btn')

function openFilter() {
    const searchRoomNav = document.querySelector('.search-room__nav')

    filter.classList.toggle('search-room__filter-btn_open');

    searchRoomNav.style.display = "block";

    if(!filter.classList.contains('search-room__filter-btn_open')){
        searchRoomNav.style.display = "";
    }
}

filter.addEventListener('click', openFilter)