const blankNumber = document.getElementById('blankNumber')
const blankNumberError = document.querySelector('.blank-error')
const blankField = document.getElementById('blankField')
const lastName = document.getElementById('lastName')
const lastNameError = document.querySelector('.name-error')
const lastNameField = document.getElementById('lastNameField')
const firstName = document.getElementById('firstName')
const firstNameError = document.querySelector('.firstName-error')
const firstNameField = document.getElementById('firstNameField')
const dateIcon = document.querySelector('.data-icon')
const btnSubmit = document.getElementById('btn-submit')
const description = document.querySelector('.description')
const loader = document.querySelector('.loader')

function deleteNonLatin(str){
    return str.replace(/[^A-Za-z0-9]/ig, '').toUpperCase();
}

function deleteNumAndSpace(str){
    return str.replace(/[0-9\s]/ig, '')
}

function isNum(str) {
    return /[0-9]/g.test(str)
}

function isSpace(str) {
    return /\s/g.test(str)
}

function isKyr (str) {
    return /^\s*(\w+)\s*$/.test(str);
};

function isLat (str) {
    return /^[a-zA-Z]*$/i.test(str)
}

function checkButton(){
    if (blankNumber.getAttribute('valid') == 'true' && lastName.getAttribute('valid') == 'true' && firstName.getAttribute('valid') == 'true') {
        btnSubmit.disabled = false
    } else btnSubmit.setAttribute('disabled', true)
}

btnSubmit.addEventListener('click', () => {
    description.style.display = 'none'
    loader.style.display = 'block'
})

blankNumber.addEventListener('input', e => {
    if (!isKyr(e.target.value)) {
        const cleanValue = deleteNonLatin(e.target.value)
        e.target.value = cleanValue
        blankNumberError.classList.add('show-error')
        blankField.classList.add('error-red-border')
        blankNumber.setAttribute('valid', false)
        checkButton()
    } else {
        blankNumberError.classList.remove('show-error')
        blankField.classList.remove('error-red-border')
        e.target.value = e.target.value.toUpperCase()}
        blankNumber.setAttribute('valid', true)
        checkButton()
        if (!e.target.value) {
            blankNumberError.classList.add('show-error')
            blankField.classList.add('error-red-border')
            blankNumber.setAttribute('valid', false)
            checkButton()
        }
})

lastName.addEventListener('input', e => {
        if(isNum(e.target.value) || isSpace(e.target.value)){
            cleanValue = deleteNumAndSpace(e.target.value)
            e.target.value = cleanValue
            lastNameError.classList.add('show-error')
            lastNameField.classList.add('error-red-border')
            lastName.setAttribute('valid', false)
            checkButton()
        } else {
            lastNameError.classList.remove('show-error')
            lastNameField.classList.remove('error-red-border')
            lastName.setAttribute('valid', true)
            checkButton()
            if (!e.target.value) {
                lastNameError.classList.add('show-error')
                lastNameField.classList.add('error-red-border')
                lastName.setAttribute('valid', false)
                checkButton()
            }
        }
})

firstName.addEventListener('input', e => {
    if(isNum(e.target.value) || isSpace(e.target.value)){
        cleanValue = deleteNumAndSpace(e.target.value)
        e.target.value = cleanValue
        firstNameError.classList.add('show-error')
        firstNameField.classList.add('error-red-border')
        firstName.setAttribute('valid', false)
        checkButton()
    } else {
        firstNameError.classList.remove('show-error')
        firstNameField.classList.remove('error-red-border')
        firstName.setAttribute('valid', true)
        checkButton()
        if (!e.target.value) {
            firstNameError.classList.add('show-error')
            firstNameField.classList.add('error-red-border')
            firstName.setAttribute('valid', false)
            checkButton()
        }
    }
})