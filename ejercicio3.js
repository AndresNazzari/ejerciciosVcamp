function viajarEnElTiempo(año, dias) {
    let diasxMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let diaDelMes = dias
    let mes = 0
    let index = 0

    if (año >= 1700 && año <= 1917) {
        if (año % 4 === 0) {
            diasxMes[1] = 29
        }
    } else if (año > 1917 && año < 1919) {
        if (año % 400 === 0 || (año % 4 === 0 && año % 100 != 0)) {
            diasxMes[1] = 29
        }
        if (diaDelMes > 31) {
            diaDelMes = diaDelMes + 13
        }
    } else if (año >= 1919 && año <= 2700) {
        if (año % 400 === 0 || (año % 4 === 0 && año % 100 != 0)) {
            diasxMes[1] = 29
        }
    }
    while (diaDelMes > 31) {
        diaDelMes = diaDelMes - diasxMes[index]
        index++
    }
    mes = index + 1
    return diaDelMes + "." + mes + "." + año
}


