yesnum = 0
nopressed = false

yestxt = ['De pana?', 'No te creo...', 'de pana de pana de pana?', 'Hablando claro... Yo?', 'Segura que yo?', 'Qué arrecho!!!', 'Creo que soy un afortunado :)', 'Te quiero ♡']

function yes(){

    if(yesnum < yestxt.length){
        btn = document.getElementById('1')
        btn.innerText = yestxt[yesnum]
        yesnum++
    }else{
        console.log('monke')
        window.open('https://www.youtube.com/watch?v=71NAThAf5yw')
    }
}

function no(){

    if (!nopressed){
        btn = document.getElementById('2')
        btn.style.display = 'none'
        nopressed = true
    }
    
    btn = document.getElementById('no')
    btn.style.display = 'flex'
    btn.style.position = 'fixed'
    btn.style.left = `${ran(-15,72)}%`
    btn.style.bottom = `${ran(0,90)}%`
    
}

function ran(x,y){
    num = Math.round(Math.random() * (y-x) + x)
    return num
}

//left -15% to 72%
//bottom 0% to 90%