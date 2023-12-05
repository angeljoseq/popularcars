function total() {
    var monto = parseFloat(document.querySelector(".monto").value);
    var interes = parseFloat(document.querySelector(".interes").value);
    var tiempo = parseFloat(document.querySelector(".meses").value);
    interest = (interes / 12) / 100;

    var cuota = (monto * (Math.pow(1 + interest, tiempo) * interest) /
        (Math.pow(1 + interest, tiempo) - 1));

    var totali = (cuota * tiempo) - monto;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });

    if (monto && interes == interes && tiempo) {
        document.getElementById("alerta1").style.display = "block";
        document.getElementById("alerta1").innerHTML = "Cuota mensual estimada: DOP " + formatter.format(cuota) + "<br>" +
            "Total del interés pagado: DOP " + formatter.format(totali);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Completa la Vaina...',
            text: 'Todos los campos deben ser rellenados',
            showClass: {
                popup: 'animate__animated animate__shakeX'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut'
            },
            timer: 3000,
            timerProgressBar: true,
            toast: true,
            position: 'center',
            showConfirmButton: false,
            customClass: {
                popup: 'custom-popup-class'
            },
            appendTo: document.getElementById("alerta5") 
        });
    }
}



