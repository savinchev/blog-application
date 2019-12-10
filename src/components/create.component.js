import { Component } from '../core/component'
import { Form } from '../core/form'
import { Validators } from '../core/validators'
import { apiService } from '../services/api.service'

export class CreateComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.$el.addEventListener('submit', submitHandler.bind(this))
    
        this.form = new Form(this.$el, {
            title: [Validators.required], // в массиве передаются валидаторы(метод не вызывается, а передается статически) для поля пормы
            fulltext: [Validators.required, Validators.minLength(10)]
        })
    }
}

 async function submitHandler(event) {
    event.preventDefault()

    if (this.form.isValid()) {
        // при сабмите формы получим все её значения
        const formData = {
            type: this.$el.type.value,
            date: new Date().toLocaleDateString(),
            ...this.form.value()
        }

        await apiService.createPost(formData)

        this.form.clear()

        alert('Запись создана в базе данных')
    }
}

