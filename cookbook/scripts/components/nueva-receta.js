angular
    .module("cookbook")
    .component("nuevaReceta",{
        templateUrl: "views/nueva-receta.html",
        controller: function(ServicioRecetas){
            var self = this;
            self.guardarReceta=function(texto){
                var receta = {nombre: texto};
                ServicioRecetas
                    .guardarReceta(receta)
                    .then(function(respuesta){

                    });
            }
        }
    });