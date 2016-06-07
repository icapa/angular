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
                self.ingrediente = {
                    nombre: "",
                    cantidad: 1
                };
                // Coleccion de ingredientes
                //self.coleccion=[];
            };


            self.teclaPulsada= function(evento){
                // Obtengo la tecla pulsada
                var tecla = evento.which || evento.keyCode;
                // Si la tecla es el intro
                if (tecla===13 && self.ingrediente.nombre ){
                    //Notificamos el nuevo ingrediente
                    self.nuevoIngrediente({"ingrediente": self.ingrediente});

                    // SE reinicia el ingrediente
                    self.ingrediente= {
                        nombre: "",
                        cantidad: 1
                    };
                }
            };
            // Notificamos que se ha pulsado el boton eliminar sobre un ingrediente
            self.eliminar = function(indice){
                // Notificamos el indice del ingrediente
                self.ingredienteEliminado({"indice": indice});
            }
        }
    });