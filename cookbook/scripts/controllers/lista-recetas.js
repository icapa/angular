angular
    .module("cookbook")
    .controller("ListaRecetas",function ($scope, ServicioRecetas) {
        $scope.recetas = ServicioRecetas.obtenerRecetas();
    });
