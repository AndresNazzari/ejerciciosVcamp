function pajarosMigratorios(cantidadPajaros, tipoPajaros) {
    let resultadoAnterior = []
    tipoPajaros.forEach((element) => {
        let resultado = tipoPajaros.filter(tipo => tipo === element)
        if (resultado.length > resultadoAnterior.length) {
            resultadoAnterior = resultado
        } else if (resultado.length === resultadoAnterior.length) {
            if (resultado[0] < resultadoAnterior[0]) {
                resultadoAnterior = resultado
            }
        }
    })
    return resultadoAnterior[0]
}