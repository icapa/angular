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
            self.guardarReceta=function(receta){
                ServicioRecetas
                    .guardarReceta(receta)
                    .then(function(respuesta){
                        //
                        // $router tiene los datos relacionados con la ruta
                        // que se está navegando. Puedo ejecutar su función navigate()
                        // para hacer una redirección
                        self.$router.navigate(["MisRecetas"]);
                    });
            }
        }
    });