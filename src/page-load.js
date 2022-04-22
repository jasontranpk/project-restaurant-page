import logoSrc from './logo_transparent.png';
import menu from './pages/menu';

const pageLoad = () =>{
    const content = document.getElementById('content');
    content.innerHTML = '';
    const header = document.createElement('div');
    header.className = 'header';
    
    const logo = document.createElement('div');
    logo.className = 'logo';

    const logoImg = document.createElement('img');
    logoImg.src = logoSrc;
    logoImg.className = 'logo-img';
    const para = document.createElement('p');
    para.textContent = 'logo'

    logo.appendChild(logoImg);
    //logo.appendChild(para);

    const nav = document.createElement('div');
    nav.className = 'nav';

    const navBar = document.createElement('ul');
    navBar.className = 'nav-bar';

    const homepage = document.createElement('li');
    homepage.innerHTML = '<a href="" id="homepageNav">Homepage</a>';
    const menu = document.createElement('li');
    menu.innerHTML = '<a href="" id="menuNav">Menu</a>';
    const contact = document.createElement('li');
    contact.innerHTML = '<a href="" id="contactNav">Contact Us</a>';

    navBar.appendChild(homepage);
    navBar.appendChild(menu);
    navBar.appendChild(contact);

    nav.appendChild(navBar);

    header.appendChild(logo);
    header.appendChild(nav);

    const main = document.createElement('div');
    main.id ='main';
    main.className = 'main';

    const paraBox1 =  document.createElement('div');
    paraBox1.classList = 'textBox upperBox';
    
    paraBox1.innerHTML = '<p>A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food.</p> <br><p>-Philip Rosenthal-</p>';

    const paraBox2 =  document.createElement('div');
    paraBox2.classList = 'textBox lowerBox';
    paraBox2.innerHTML = '<h3>OPENING TIME </h3><p>Mon-Thurs: 8am-8pm</p> <p>Fri-Sun: 8am-11pm</p>';

    main.appendChild(paraBox1);
    main.appendChild(paraBox2);

    const footer = document.createElement('div');
    footer.className = 'footer';
    footer.innerHTML = 'Copyrighted&copy; by Son Tran'
    
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);


};
export default pageLoad;