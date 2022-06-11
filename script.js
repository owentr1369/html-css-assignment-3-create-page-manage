const createBtn = document.getElementById('open-response')
const createResponseBox = document.getElementById('create-response-box')
const content = document.getElementById('content')

createBtn.addEventListener('click', () => {
    createResponseBox.classList.add('open')
    content.classList.add('hide')
})


