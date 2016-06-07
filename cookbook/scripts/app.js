// Setter del modulo
angular.module("cookbook",[
   "ngComponentRouter","dahr.ng-image-picker"
]);

// Configuramos el proveedor "$locationProvider". Establecemos
// el modo de navegación HTML5 para que funcione el Single Page Application

angular.module("cookbook").config(function($locationProvider){
   $locationProvider.html5Mode(true);
});

// En el value $routerRootComponent indicamos el componente raíz
angular.module("cookbook").value("$routerRootComponent","raiz");