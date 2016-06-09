angular.module("cookbook")
    .value("Propiedades",{
        urlServidor: "http://localhost:8000",
        endpointRecetas: "/api/recetas",
        endpointImagenes: "/upload"
    });
