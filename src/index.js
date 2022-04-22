import './style.css';
import pageLoad from './page-load';
import background from './background.jpg';
import menu from './pages/menu';
import contact from './pages/contactus';




pageLoad();
const homeNav = document.getElementById('homepageNav');
homeNav.addEventListener('click', (e) => {
    e.preventDefault();
    pageLoad();
});
const menuNav = document.getElementById('menuNav');
menuNav.addEventListener('click', (e) => {
    e.preventDefault();
    menu();
});
const contactNav = document.getElementById('contactNav');
contactNav.addEventListener('click', (e) => {
    console.log(contactNav);
    e.preventDefault();
    contact();
});
