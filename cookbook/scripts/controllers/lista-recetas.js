angular
    .module("cookbook")
    .controller("ListaRecetas",function ($scope, ServicioRecetas) {
        
        // Guardamos la receta
        
        $scope.guardarReceta = function(texto){
            var receta = {nombre: texto};
            ServicioRecetas.guardarReceta(receta).then(function(respuesta){
                $scope.recetas.push(respuesta.data)
            });
        }
    });
