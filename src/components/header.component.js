import { Component } from '../core/component'

export class HeaderComponent extends Component {
    constructor(id) {
        super(id) // вызываем конструктор родителя
    }

    init() {
        if (localStorage.getItem('visited')) { // если при инициализации компонента в локал висит visited
            this.hide()
        }
        const btn = this.$el.querySelector('.js-header-start')
        btn.addEventListener('click', buttonHandler.bind(this))
    }
}
// функция скрывает хедер
function buttonHandler() {
    localStorage.setItem('visited', JSON.stringify(true)) // при обновлении страницы хежер вновь появляется, исправим это используя LocalStorage
    this.hide()
}




