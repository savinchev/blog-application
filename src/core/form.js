export class Form {
    // конструктор первым параметром принимет - форму
    // вторым - объект контролс
    constructor (form, controls) {
        this.form = form
        this.controls = controls
    }

    // метод отдающий объект содержащий все необходимые нам значения(инпут, селект)
    value() {
        const value = {}
        // заберем массив ключей всей нашей формы(сколько бы там полей не было - мы получим все)
        // с помощью цикла на каждой итерации будем получать строку контрол
        Object.keys(this.controls).forEach(control => {
            value[control] = this.form[control].value
        }) 
        return value
    }

    // метод очищающий форму после отправки
    clear() {
        Object.keys(this.controls).forEach(control => {
            this.form[control].value = ''
        })
    }

    // метод проверяет форму на валидность
    isValid() {
        let isFormValid = true
        // соотвествие наших полей требованиям валидаторов
        Object.keys(this.controls).forEach(control => {
            const validators = this.controls[control]

            let isValid = true // это переменная уже для конкретного валидатора
            validators.forEach(validator => {
                isValid = validator(this.form[control].value) && isValid // возвращает булевое значение, проверяя(с помощью &&) с предыдущим значением(то есть если хотя бы одно поле у нас false, значит в переменной будет false за счет оператора &&)
            })

            if (!isValid) {
                setError(this.form[control]) // передаем в функцию контрол(поле) которое не прошло валидацию
            } else {
                clearError(this.form[control])
            }

            isFormValid = isFormValid && isValid // проверяем валидность всей формы, учитывая валидность всех контролов(полей)
        })

        return isFormValid
    }
}
// функция выведения ошибки под невалидным инпутом и его подсвечивание
function setError($control) {
    clearError($control)
    const error = '<p class"validation-error">Введите корректное значение</p>'
    $control.classList.add('invalid')
    $control.insertAdjacentHTML('afterend', error)
}
// функция очищающая действие setError
function clearError($control) {
    $control.classList.remove('invalid')

    if ($control.nextSibling) {
        $control.closest('.form-control').removeChild($control.nextSibling)  
    }  
}


