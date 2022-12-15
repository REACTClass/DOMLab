var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

let mainEl = document.querySelector("main"); //Selecting the main element and caching it in a variable named mainEl
mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");

let topMenuE1 = document.getElementById("top-menu");

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuE1.classList.add("flex-around"); //Add a class of flex-around

function menu(array, menu1) {
    array.forEach((element) => {

        let newAnchor = document.createElement('a');


        newAnchor.setAttribute('href', element.href);


        newAnchor.innerHTML = element.text;

        menu1.append(newAnchor);

    }
    )
}
menu(menuLinks, topMenuEl)