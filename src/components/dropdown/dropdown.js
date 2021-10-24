import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.js'
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css'
import './dropdown.scss'

$(document).ready(function() {
    $(".rooms").iqDropdown();
    $(".guests").iqDropdown({
        selectionText: "гость",
        textPlural: "гостя",
    });
});

