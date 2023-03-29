let $ = document

let titleElem = $.querySelector('.title')
let inp = $.querySelector('.inp')
let showElem = $.querySelector('.show')
let convertBtn = $.querySelector('.convert')
let resetBtn = $.querySelector('.reset')
let changeBtn = $.querySelector('.change')
let span1 = $.querySelector('.t1')
let span2 = $.querySelector('.t2')


let placeElem 

changeBtn.addEventListener('click',function(){
    placeElem = inp.getAttribute('placeholder')
    if(placeElem === '°C'){
        span1.innerHTML = '°F'
        span2.innerHTML = '°C'
        inp.setAttribute('placeholder','°F')
        showElem.innerHTML = 'Changed'
    }else{
        inp.setAttribute('placeholder','°C')
        span1.innerHTML = '°C'
        span2.innerHTML = '°F'
        showElem.innerHTML = 'Changed'
    }
})


convertBtn.addEventListener('click',function(){
    let valueUser = Number(inp.value)
    placeElem = inp.getAttribute('placeholder')

    if(valueUser === ""){
        showElem.innerHTML = 'Nothing To Convert'
    }else if(placeElem === '°C'){
        showElem.innerHTML = 1.8* valueUser +32
    }else{
        showElem.innerHTML =  (valueUser-32)/1.8
    }
})
resetBtn.addEventListener('click',function(){
    if(inp.value.length == 0){
        showElem.innerHTML = 'There is Nothig to Reset'
        showElem.style.color = 'red'
    }else{
        inp.value = ''
        showElem.innerHTML = 'Reset is Done'
        showElem.style.color = 'blue'
    }
})

