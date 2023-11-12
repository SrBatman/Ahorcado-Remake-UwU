let gword = null
let state = 0
let cant = 0
let correct = 0

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clear(){

    const words = document.querySelectorAll(".letter")
    words.forEach(word => {
        word.remove()
    })
    
}

function word(){
    const words = ["jabón", "shampoo", "cloro"]
    //

    clear()

    len = words.length

    word = words[random(0, len-1)]
    gword = word
    cant = word.length
    
    for (var i = 0; i < cant; i++) {
        const span = document.createElement("span")
        span.textContent = "_"
        span.classList.add("letter")
        span.classList.add(gword[i].normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/'/g, '').replace(/,/g, ''))
        document.querySelector("#word").appendChild(span)
    }

}

function letter(letter){
    if (state !== 7){
        const botton = document.querySelector(`#${letter.toLowerCase()}`)
        botton.disabled = true
        botton.classList.remove("enable")
       
        if (gword.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/'/g, '').replace(/,/g, '').includes(letter)){
            const sletter = document.querySelectorAll(`.${letter}`)
            let indexs = getIndicesOfChar(gword.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/'/g, '').replace(/,/g, ''), letter)
            
            for (var i = 0; i < sletter.length; i++) {
                correct+=1
                sletter[i].textContent = gword[indexs[i]] 
          
            }
           
            sletter.textContent = letter
            botton.classList.add("correct")
         
            if(correct===cant){
                const win_menu = document.getElementById('win')
                win_menu.classList.remove('hidde')
                const buttons = document.querySelectorAll('.enable')
                for(var j = 0; j < buttons.length; j++){
                    buttons[j].disabled = true
                    buttons[j].classList.add('block')
                }
            }

        }else{
            let img = document.querySelector("#img")
            switch (state) {
                case 0:
                    img.src = "img/ahorcado-1.png"
                    state = 1
                    botton.classList.add("incorrect")
                    break;
                case 1:
                    img.src = "img/ahorcado-2.png"
                    state = 2
                    botton.classList.add("incorrect")
                    break;
                case 2:
                    img.src = "img/ahorcado-3.png"
                    state = 3
                    botton.classList.add("incorrect")
                    break;
                case 3:
                    img.src = "img/ahorcado-4.png"
                    state = 4
                    botton.classList.add("incorrect")
                    break;
                case 4:
                    img.src = "img/ahorcado-5.png"
                    state = 5
                    botton.classList.add("incorrect")
                    break;
                case 5:
                    img.src = "img/ahorcado-6.png"
                    state = 6
                    botton.classList.add("incorrect")
                    break;
                case 6:
                    img.src = "img/Ahorcado-7.png"
                    state = 7
                    botton.classList.add("incorrect")
                    break;
            }
        }
    }

    if (state === 7){
        const defeat_menu = document.getElementById('defeat')
        defeat_menu.classList.remove('hidde')
        const buttons = document.querySelectorAll('.enable')
        for(var i = 0; i < buttons.length; i++){
            buttons[i].disabled = true
            buttons[i].classList.add('block')
        }

        const lletters = document.querySelectorAll('.letter')
        for(var i = 0; i < gword.length; i++){
            lletters[i].textContent = gword[i]
        }
    }
}

function getIndicesOfChar(string, char) {
    let indices = [];
    for(let i = 0; i < string.length; i++) {
        if (string[i] === char) indices.push(i);
    }
    return indices;
}

function defeat_hidde(){
    const menu = document.getElementById('defeat')
    menu.classList.add('hidde')
}

function win_hidde(){
    const menu = document.getElementById('win')
    menu.classList.add('hidde')
}

function reload(){
    window.location.reload()
}
