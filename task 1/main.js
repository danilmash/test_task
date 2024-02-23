const startButton = document.querySelector('.start-button')
const popup = document.querySelector('.popup')
const form = document.querySelector('.form')
const formDataHTML = document.querySelector('.form-data')

let formData = {}

function logformData() { 
    formDataHTML.innerHTML = ""
    Object.keys(formData).forEach(name => { // для каждой пары в объекте создает li c p внутри
        const formDataContainer = document.createElement('li') 
        const formDataValue = document.createElement('p')
        formDataValue.innerHTML = `${name} => ${formData[name]}`
        formDataContainer.append(formDataValue)
        formDataHTML.append(formDataContainer)
    });
    formDataHTML.classList.add('form-data_visible') // добавление класса visible чтобы появилась информация
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