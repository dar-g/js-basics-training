const triggerBtn = document.getElementById("triggerBtn");
const modal = document.getElementById("modal");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");

triggerBtn.onclick = function () {
    modal.classList.add("show");

    cancelBtn.onclick = function () {
        modal.classList.remove("show");
    }
}
