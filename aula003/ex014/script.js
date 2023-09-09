function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora_minuto = data.toLocaleTimeString()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são <strong>${hora_minuto.substring(0,5)}</strong> horas.`

    if (hora >=0 && hora < 12) {
        //bom dia
        img.src = 'images/fotomanha.jpg'
        document.body.style.background = '#fff5cf'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'images/fototarde.jpg'
        document.body.style.background = '#caa98a'
    } else {
        //boa noite
        img.src = 'images/fotonoite.jpg'
        document.body.style.background = '#16263f'
    }
}