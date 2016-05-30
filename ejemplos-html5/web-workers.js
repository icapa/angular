function cuentaAtras(desde){

    // Notificamos al hilo principal
    postMessage(desde);

    // Comprobamos que la cuenta atrás no ha llegado a cero
    if (desde>0){
        // Decrementamos el valor de la cuenta atras
        setTimeout(function(){
            cuentaAtras(--desde);
        },1000);
    }
}

cuentaAtras(10);    // Se lanza