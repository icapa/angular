angular
    .module("cookbook")
    .service("ServicioRecetas",function($http){
        // Toda funcionalidad que quieras exponer hacia afuera, tiene
        // que estar publicada en this.
        this.obtenerRecetas = function(){

            return $http.get("http://localhost:8000/api/recetas");

        };
        // Guardamos la receta
        this.guardarReceta = function(receta){
            return $http.post("http://localhost:8000/api/recetas",receta);
        };
    });

