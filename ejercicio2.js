function redondearNota(notas) {
    let notasRedondeadas = []
    notas.forEach((element) => {
        if (element < 38) {
            //notasRedondeadas.push(element)
        } else if (element % 5 > 2) {
            let notaRedondeada = element + element % 5 - 1
            notasRedondeadas.push(notaRedondeada)
        } else if (element % 5 <= 2) {
            notasRedondeadas.push(element)
        }
    })
    return notasRedondeadas
}
