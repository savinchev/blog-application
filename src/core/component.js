export class Component { // создадим класс от которого будет идти наследование
    constructor(id) { // конструктор принимает id корневого элемента отвечающего за компонент
        this.$el = document.getElementById(id) // переменная принимает в себя элемент DOM с указанным id
        this.init()
    }
    // добавим набор стандартных методов, которые унаследуют все компоненты
    init() {}

    onShow() {

    }

    onHide() {

    }

    hide() {
        this.$el.classList.add('hide')
        this.onHide()
    }
    show() {
        this.$el.classList.remove('hide')
        this.onShow()
    }

}