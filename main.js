const modalTicket = document.querySelector('.js-modal');
const clickbuyTicket = document.querySelectorAll('.jsButton');
const clickTicketclose = document.querySelectorAll('.js-modal-close');
const clickwrapTicket = document.querySelector('.js-modal-wrap');

function ShowTicket() {
    modalTicket.classList.add('open');
}

function CloseTicket() {
    modalTicket.classList.remove('open');
}

for (const buyBtn of clickbuyTicket) {
    buyBtn.addEventListener('click', ShowTicket);
}

for (const closebtn of clickTicketclose) {
    closebtn.addEventListener('click', CloseTicket);
}

modalTicket.addEventListener('click', CloseTicket);

function StopPropagation(event) {
    event.stopPropagation();
}

clickwrapTicket.addEventListener('click', StopPropagation);