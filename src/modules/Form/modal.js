const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("close-modal-button");

export function showModal() {
    modal.style.display = 'flex';
}

function hideModal() {
    modal.style.display = 'none';
}

closeModalButton.addEventListener('click', () => {
    hideModal();
})