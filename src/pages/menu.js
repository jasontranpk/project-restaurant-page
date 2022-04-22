import seafoodSrc from '../assets/img/seafood.jpg'

function menu(){
    const main = document.getElementById('main')
    main.innerHTML = '';

    const dish1 = document.createElement('div');
    dish1.classList = ' textBox dish';
    dish1.innerHTML = `<img src="${seafoodSrc}" /> <p>Seafood Paella</p> <p>$30</p>`

    const dish2 = document.createElement('div');
    dish2.classList = ' textBox dish';
    dish2.innerHTML = `<img src="${seafoodSrc}" /> <p>Seafood Paella</p> <p>$30</p>`

    const dish3 = document.createElement('div');
    dish3.classList = ' textBox dish';
    dish3.innerHTML = `<img src="${seafoodSrc}" /> <p>Seafood Paella</p> <p>$30</p>`

    const dish4 = document.createElement('div');
    dish4.classList = ' textBox dish';
    dish4.innerHTML = `<img src="${seafoodSrc}" /> <p>Seafood Paella</p> <p>$30</p>`

    const dish5 = document.createElement('div');
    dish5.classList = ' textBox dish';
    dish5.innerHTML = `<img src="${seafoodSrc}" /> <p>Seafood Paella</p> <p>$30</p>`
    
    main.appendChild(dish1);
    main.appendChild(dish2);
    main.appendChild(dish3);
    main.appendChild(dish4);
    main.appendChild(dish5);

}
export default menu;