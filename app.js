const dropdown = document.querySelector('.dropdown'); 
const radioBtn = document.querySelector('#radioicon');

radioBtn.onclick = function(event) {
    dropdown.classList.toggle('open');
    const isOpen = dropdown.classList.contains('open');
};

document.addEventListener('click', function (event) {
    if (!dropdown.contains(event.target) && !radioBtn.contains(event.target)) {
        dropdown.classList.remove('open');
    }
});