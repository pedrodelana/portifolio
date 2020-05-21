const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

const teste = document.querySelectorAll('hidden')

for (let card of cards) {
    const videoId = card.getAttribute('id')
    card.addEventListener('click', function () {
        window.location.href = `/video?id=${videoId}`;
    })

}

document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove("active")
})

