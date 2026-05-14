// below are the Real-time calculation logic
document.addEventListener('DOMContentLoaded', () => {
const roomSelect = document.getElementById('roomSelect');
const nightsInput = document.getElementById('nights');
    
// here we added; Automatically recalculate if user changes room dropdown, option
    if(roomSelect) {
    roomSelect.addEventListener('change', calculateTotal);
    }
});

function calculateTotal() {
// to Get the selected room price from dropdown
const roomSelect = document.getElementById('roomSelect');
const pricePerNight = parseFloat(roomSelect.value);
    
// here is Get the number of nights inputs
 const nightsInput = document.getElementById('nights');
let nights = parseInt(nightsInput.value);
    
 // here is the Validation
 if (isNaN(nights) || nights < 1) {
nights = 1;
nightsInput.value = 1;
}
    
// here is the Calculate total
const total = pricePerNight * nights;
    
// here is to Update the UI with OMR (riyals) currency
const totalPriceSpan = document.getElementById('totalPrice');
totalPriceSpan.innerText = total.toFixed(2) + ' OMR';
    
// Below is the; Update the displayed nightly price up top to match the selection inputs
const roomPriceDisplay = document.getElementById('roomPrice');
if(roomPriceDisplay) {
roomPriceDisplay.innerText = pricePerNight.toFixed(2);
}
}
