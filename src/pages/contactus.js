function contact(){
    const main = document.getElementById('main')
    main.innerHTML = '';

    const contact = document.createElement('div');
    contact.classList = ' textBox contactBox';
    contact.innerHTML = `<h1>PHONE:</h1> <p>000-0000-0000</p><hr><h1>ADDRESS:</h1> <p>Planet Earth, Solar System, Milky Way Galaxy, Virgo Cluster, Universe </p>`

    main.appendChild(contact);

}
export default contact;