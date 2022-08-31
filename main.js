// Get modal
let modal = getElementById('id01');

// When someone click outside of the form, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}