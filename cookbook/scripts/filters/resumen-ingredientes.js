angular
    .module("cookbook")
    .filter("ResumenIngredientes",function(){
        return function(ingredientes){
            ingredientes = ingredientes || []; // Aseguramos que ingredientes no sean nulos
            // Recorremos la colección de ingredientes para obtener de cada uno
            // de ellos una cadena de texto que indique "ingrediente (cantidad gr.)"
            var coleccion = ingredientes.reduce(function(acumulado,ingrediente){
                var texto = ingrediente.nombre + " ("+ ingrediente.cantidad +" gr)";

                acumulado.push(texto);

                return acumulado;

            },[]);

            return coleccion.join(", ");
        };
    });