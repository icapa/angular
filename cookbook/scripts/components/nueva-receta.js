angular
    .module("cookbook")
    .component("nuevaReceta",{
        // Con 'bindings" establecemos la interfaz de comunicación
        // del componente. Solicitamos el enlace $router que lo hace automáticamente
        // AngularJS en el ng-outlet.
        bindings:{
          $router: "<"
        },
        templateUrl: "views/nueva-receta.html",
        controller: function(ServicioRecetas){
            var self = this;
            // Definimos una variable para el documento de la imagen
            // de la receta que se ha seleccionado

            var imagenReceta;

            self.guardarReceta=function(receta){
                ServicioRecetas
                    .guardarReceta(receta,imagenReceta)
                    .then(function(){
                        //
                        // $router tiene los datos relacionados con la ruta
                        // que se está navegando. Puedo ejecutar su función navigate()
                        // para hacer una redirección
                        self.$router.navigate(["MisRecetas"]);
                    });
            };

            // Guardamos el documento de imagen indicado para guardarlo en el servidor
            // junto con la receta.
            self.seleccionarImagen = function(imagen){
                imagenReceta=imagen;
            };

            // Eliminamos el documento de imagen que hubiese seleccionado previamente
            self.deseleccionarImagen = function(){
                imagenReceta=undefined;
            };
        }
    });