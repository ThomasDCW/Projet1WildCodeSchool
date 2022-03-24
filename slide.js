const hamburgerBtn = document.getElementById('hamburgerBtn');
const navBar = document.getElementById('navBar');

hamburgerBtn.addEventListener('click',() => {
    console.log('Button clicked');
    navBar.classList.toggle('open');
});
