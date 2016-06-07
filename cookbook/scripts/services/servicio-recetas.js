angular
    .module("cookbook")
    .service("ServicioRecetas",function($http){
        // Toda funcionalidad que quieras exponer hacia afuera, tiene
        // que estar publicada en this.
        this.obtenerRecetas = function(){

            return $http.get("http://localhost:8000/api/recetas");

        };
        // Guardamos la receta
        this.guardarReceta = function(receta, imagen){
            var promesa;

            // Si la imagen viene dada
            if (imagen){
                // Montamos un 'FormData' con la imagen
                var datos = new FormData();
                datos.append("img",imagen);

                // Configuramos el content-type de la petición
                // Tenemos que indicarlo con 'undefined' para que  AngularJS infiera el tipo
                // de la petición
                var configuracion = {
                    "headers": {
                        "Content-Type": undefined
                    }
                };
                // Hacer el post con la imagen, subimos al servidor

                promesa = $http
                    .post("http://localhost:8000/upload",
                        datos,
                        configuracion
                    )
                    .then(function(respuesta){
                        // En la propiedad 'path' me viene dada la ruta relativa de la imagen subida
                        var ruta = respuesta.data.path;

                        // Establecemos la ruta de la imagen en el objeto receta antes de guardarla
                        receta.rutaImagen = ruta;

                        return $http.post("http://localhost:8000/api/recetas",receta);
                    });

            }
            // En caso de no haber indicado una imagen
            else{
                promesa = $http.post("http://localhost:8000/api/recetas",receta);
            }
            return promesa;
        };

        // Montamos la ruta absoluta a la imagen indicada
        this.obtenerRutaImagenAbsoluta = function(rutaRelativa){
            return rutaRelativa
                ? ("http://localhost:8000/"+rutaRelativa)
                : undefined;

        };
    });

