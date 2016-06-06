angular
    .module("cookbook")
    .component("ingredientes",{
        bindings: {
            coleccion: "<",
            nuevoIngrediente: "&",
            ingredienteEliminado: "&"
        },
       templateUrl: "views/ingredientes.html",
        controller: function(){
            var self = this;
            var nuevoIngrediente;

            // Inicializamos los valores por defecto del componente
            self.$onInit = function(){
                self.nuevoIngrediente = {
                    nombre: "",
                    cantidad: 1
                };
                // Coleccion de ingredientes
                self.coleccion=[];
            };


            self.teclaPulsada= function(evento){
                // Obtengo la tecla pulsada
                var tecla = evento.which || evento.keyCode;
                // Si la tecla es el intro
                if (tecla===13 && self.nuevoIngrediente.nombre ){
                    //Añado el ingrediente a la colección
                    self.coleccion.push(self.nuevoIngrediente);

                    // SE reinicia el ingrediente
                    self.nuevoIngrediente= {
                        nombre: "",
                        cantidad: 1
                    };
                }
            };
        }
    });