const greenBtn = document.querySelector("#green-btn"),
yellowBtn = document.querySelector("#yellow-btn"), 
redBtn = document.querySelector("#red-btn"),
autoBtn = document.querySelector("#auto-btn")

const yellowLight = document.querySelector("#yellow"),
greenLight = document.querySelector("#green"),
redLight = document.querySelector("#red")

// Variáveis reponsáveis por controlar a ordem das luzes
let key = 0, next = false

function greenLightOn() {
    greenLight.style.backgroundColor = 'green'
    greenLight.style.boxShadow = '1px -7px 24px 5px #02b907, 1px 7px 24px 5px #02b907'
    key = 2
    next = true
}

function greenLightOff() {
    greenLight.style.backgroundColor = 'rgb(54, 92, 54)'
    greenLight.style.boxShadow = '1px -7px 10px gray, 1px 7px 10px gray'
}

function yellowLightOn() {
    yellowLight.style.backgroundColor = 'yellow'
    yellowLight.style.boxShadow = '1px -7px 24px 5px #ffec13, 1px 7px 24px 5px #ffec13'
    if (next) {
        key = 1
    } else {
        key = 3
    }
}

function yellowLightOff() {
    yellowLight.style.backgroundColor = 'rgb(77, 77, 50)'
    yellowLight.style.boxShadow = '1px -7px 10px gray, 1px 7px 10px gray'
}

function redLightOn() {
    redLight.style.backgroundColor = 'red'
    redLight.style.boxShadow = '1px -7px 24px 5px #ff1313, 1px 7px 24px 5px #ff1313'
    key = 2
    next = false
}

function redLightOff() {
    redLight.style.backgroundColor = 'rgb(90, 57, 57)'
    redLight.style.boxShadow = '1px -7px 10px gray, 1px 7px 10px gray'
}

// Variáveis responsáveis por ligar e desligar o semáforo
let onOf = false, trafficLightKey;

function startTrafficLight() {
    redLightOn()
    trafficLightKey = setInterval(() => {
        switch (key) {
            case 0: 
                redLightOn()
                break
            case 1:
                yellowLightOff()
                redLightOn()
                break;
            case 2:
                redLightOff()
                greenLightOff()
                yellowLightOn()
                break;
            case 3:
                yellowLightOff()
                greenLightOn()
                break;
        }
    }, 5000);
}

function stopTrafficLight() {
    clearInterval(trafficLightKey)
    greenLightOff()
    yellowLightOff()
    redLightOff()
}

autoBtn.addEventListener("click", () => {
    if (onOf) {
        onOf = false
        startTrafficLight()
    } else {
        stopTrafficLight()
        onOf = true
    }
})

yellowBtn.addEventListener("click", function(){
    stopTrafficLight()
    yellowLight.style.backgroundColor = 'yellow'
    yellowLight.style.boxShadow = '1px -7px 24px 5px #ffec13, 1px 7px 24px 5px #ffec13'
})

greenBtn.addEventListener("click", function(){
    stopTrafficLight()
    greenLight.style.backgroundColor = 'green'
    greenLight.style.boxShadow = '1px -7px 24px 5px #02b907, 1px 7px 24px 5px #02b907'
})

redBtn.addEventListener("click", function(){
    stopTrafficLight()
    redLight.style.backgroundColor = 'red'
    redLight.style.boxShadow = '1px -7px 24px 5px #ff1313, 1px 7px 24px 5px #ff1313'
})

yellowBtn.addEventListener("mouseleave", function(){
    yellowLight.style.boxShadow = '1px -7px 10px gray, 1px 7px 10px gray'
    yellowLight.style.backgroundColor = '#4d4d32'
})

greenBtn.addEventListener("mouseleave", function(){
    greenLight.style.boxShadow = '1px -7px 10px gray, 1px 7px 10px gray'
    greenLight.style.backgroundColor = 'rgb(54, 92, 54)'
})

redBtn.addEventListener("mouseleave", function(){
    redLight.style.boxShadow = '1px -7px 10px gray, 1px 7px 10px gray'
    redLight.style.backgroundColor = '#5a3939'
})

