class Horario{
    constructor(){

    }

    Hour() {
        return Date().getHours()
    }

    Min(){
        return new Date().getMinutes()
    }

    Sec(){
        return new Date().getSeconds()
    }
}

var horario = new Horario()

setInterval(() => {
    var imagem = window.document.querySelector('img#foto')
    var HoraAtual = new Date().getHours()
    var SecAtual = new Date().getSeconds()
    var MinAtual = new Date().getMinutes()

    HoraAtual = (HoraAtual<10) ? '0' + HoraAtual : HoraAtual
    MinAtual = (MinAtual<10) ? '0' + MinAtual : MinAtual
    SecAtual = (SecAtual<10) ? '0' + SecAtual : SecAtual

    window.document.querySelector('p#texto').innerHTML = `${HoraAtual}:${MinAtual}:${SecAtual}`
    
    if(HoraAtual >= 5 && HoraAtual <=12){
        window.document.querySelector('div#corpo').style.background = 'rgb(179, 116, 0)'
        imagem.src = 'imagens/pexels-alex-vargas-15264689.jpg'
        window.document.getElementById('Header').style.textShadow = '2px 2px 3px rgb(112, 72, 0)'
        window.document.getElementById('centro').style.boxShadow = '2px 2px 3px rgb(112, 72, 0)'
        window.document.getElementById('AvisoDohorario').innerHTML = 'Bom Dia!!'
    
    }   else if(HoraAtual >= 13 && HoraAtual <= 18){
            window.document.querySelector('div#corpo').style.background = 'rgb(0, 74, 158)'
            imagem.src = 'imagens/pexels-pixabay-161963.jpg'
            window.document.getElementById('Header').style.textShadow = '2px 2px 3px rgb(0, 52, 110)'
            window.document.getElementById('centro').style.boxShadow = '2px 2px 3px rgb(0, 52, 110)'
            window.document.getElementById('AvisoDohorario').innerHTML = 'Boa Tarde!!'

    
        }   else if(HoraAtual >= 19){
                window.document.querySelector('div#corpo').style.background = 'rgb(53, 53, 53)'
                imagem.src = 'imagens/pexels-anthony-macajone-1782407.jpg'
                window.document.getElementById('Header').style.textShadow = '2px 2px 3px rgb(26, 26, 26)'
                window.document.getElementById('centro').style.boxShadow = '2px 2px 3px rgb(26, 26, 26)'
                window.document.getElementById('AvisoDohorario').innerHTML = 'Boa Noite!!'
            }
}, 1000)