angular
    .module("cookbook")
    .directive("formularioAlta",function(){

        return{
            // Con 'restrict' indicamos cómo vamos a usar la directiva
            // Con 'A' la usamos como atributo de un elemento
            // Con 'E' la usamos como el propio elemento
            restrict: "EA",

            // Con 'template' o 'templateUrl' indicamos la jerarquia de componentes
            // que el navegador va a renderizar como vista de la directiva.
            templateUrl: "views/formulario-alta.html",

            // Con 'scope' definimos la interfaz de comunicación entre la directiva
            // y el scope padre (controlador / componentes).

            scope:{
                alHacerClick: "&"   // Con & notificamos eventos al controlador padre
            },

            // Con 'link' establecemos la lógica de la directiva y además
            // podemos hacer manipulación del DOM de la vista
            link: function (scope) {
                // Creo un nuevo objeto receta
                scope.receta = {
                    nombre: "",
                    ingredientes: []
                };
                // Manejador del botón 'Aceptar'
                scope.notificarTexto = function(){

                    // Notificamos al scope padre
                    scope.alHacerClick({ texto: scope.texto });
                };

                // Añadimos el ingrediente procedente del componente
                scope.agregarIngrediente = function(ingrediente){
                    scope.receta.ingredientes.push(ingrediente);
                };

                // Eliminamos el ingrediente que está en la posición indicada por indice
                scope.eliminarIngrediente = function(indice){
                    scope.receta.ingredientes.splice(indice,1);
                };
            },
        };
    });