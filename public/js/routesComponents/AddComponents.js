// import {active_animation_open} from '../scripts/active_animation_open.js';

const loadHtml = (url, app) => {
    fetch(url)
        .then((response) => {
            return response.text();
        })
        .then((body) => {
            app.innerHTML = body;
            const arr = app.getElementsByTagName("script");
            for (var n = 0; n < arr.length; n++) eval(arr[n].innerHTML); 
            //permet d'évaluer du code JavaScript représenté sous forme d'une chaîne de caractères.
        });
};

const AddComponents = document.querySelector('main .container');

// ROUTES, changement de page
var routes = [
    {path: "#/notfound", name: "notfound", component: "page404.html"},
    {path: "#/Allprojects", name: "Allprojects", component: "projects.html"},
    {path: "#/about", name: "about", component: "about.html"},
];

let viewsFolder = "./views/";

const HashChange = async () => {
    let hash = window.location.hash;
    let hashRoutes;
    let hashComponent;

    if (hash.startsWith("#/") && hash.length>2){
        for (let ind = 0; ind < routes.length; ind++) {
            const route = routes[ind];
            if (window.location.hash == route["path"]) {
                hashRoutes = route["name"];
                hashComponent = route["component"];
            }
        }
        if (hashRoutes) {
            // active_animation_open();
            loadHtml( viewsFolder+hashComponent, AddComponents );
        }else{
            window.location = "#/notfound";
        }
    }
    else{}
}
    
window.onhashchange = HashChange
HashChange();
