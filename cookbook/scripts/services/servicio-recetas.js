angular
    .module("cookbook")
    .service("ServicioRecetas",function(){
        // Toda funcionalidad que quieras exponer hacia afuera, tiene
        // que estar publicada en this.
        this.obtenerRecetas = function(){
            return [{
                nombre: "Solomillo al Pedro Ximénez"
            },{
                nombre: "Tortilla de patata"
            },{
                nombre: "Crepes con Nutella"
            }];
        }
    });

