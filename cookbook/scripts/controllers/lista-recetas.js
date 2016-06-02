angular
    .module("cookbook")
    .controller("ListaRecetas",function ($scope, ServicioRecetas) {
        // Como 'obtenerRecetas()' retorna una promesa hay que pasar un manejador a su
        // funcion 'then()'.
        ServicioRecetas.obtenerRecetas()
            .then(function(respuesta) {
                // En la pripiedad 'dada' de la respuesta http tenemos el cuerpo de la misma
                $scope.recetas = respuesta.data;
            });
        // Guardamos la receta
        
        $scope.guardarReceta = function(){
            var receta = {nombre: $scope.nombreReceta};
            ServicioRecetas.guardarReceta(receta).then(function(respuesta){
                $scope.recetas.push(respuesta.data)
            });
        }
    });
