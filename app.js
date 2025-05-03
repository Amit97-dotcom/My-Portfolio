const dropdown = document.querySelector('.dropdown'); 
const radioBtn = document.querySelector('#radioicon');

radioBtn.onclick = function() {
    dropdown.classList.toggle('open');
    const isOpen = dropdown.classList.contains('open');
};