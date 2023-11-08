const startButton = document.getElementsByClassName('start-button')[0]
const popup = document.getElementsByClassName('popup')[0]
const form = document.getElementsByClassName('form')[0]
const formDataHTML = document.getElementsByClassName('form-data')[0]

let formData = {
    
}

function logformData() {
    formDataHTML.innerHTML = ""
    Object.keys(formData).forEach(name => {
        const formDataContainer = document.createElement('div')
        const formDataValue = document.createElement('p')
        formDataValue.innerHTML = `${name} => ${formData[name]}`
        formDataContainer.append(formDataValue)
        formDataHTML.append(formDataContainer)
    });
    formDataHTML.classList.add('form-data_visible')
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = new FormData(form)
    for (let [name, value] of data) {
        formData[name] = value
    }
    popup.classList.remove('popup_visible')
    logformData()
})






startButton.addEventListener('click', ()=> {
    popup.classList.add('popup_visible')
})

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.remove('popup_visible')
    }
})