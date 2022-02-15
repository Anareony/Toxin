import './room-details.scss'

import '../../components/booking/booking';
import '../../components/header/header'
import { Like } from '../../components/like/like'

const like = new Like({
    anchor: document.querySelector('.like__first')
})

const like2 = new Like({
    anchor: document.querySelector('.like__second')
})
