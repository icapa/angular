angular
    .module("cookbook")
    .component("misRecetas",{
        // Con 'templateUrl' establecemos la vista del componentes
        templateUrl: "views/mis-recetas.html",
        // En controlador establecemos la logica
        controller: function(ServicioRecetas){
            // Como 'obtenerRecetas()' retorna una promesa hay que pasar un manejador a su
            // funcion 'then()'.
            // Cercada para que funcione el this
            var self = this;

            self.filtroRecetas = {
                nombre:""
            }

            self.$onInit = function(){
                
                ServicioRecetas.obtenerRecetas().then(function(respuesta) {
                    // En la pripiedad 'dada' de la respuesta http tenemos el cuerpo de la misma
                    self.recetas = respuesta.data;
                });
            };

        }

    });