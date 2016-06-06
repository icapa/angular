angular
    .module("cookbook")
    .component("raiz",{
        $routeConfig: [{
            name: "MisRecetas",
            path: "/mis-recetas",
            component:"misRecetas"
        },{
            name: "NuevaReceta",
            path: "/nueva-receta",
            component: "nuevaReceta"
        }],
        templateUrl:"views/raiz.html"
    });
