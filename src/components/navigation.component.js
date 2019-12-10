import { Component } from '../core/component'

export class NavigationComponent extends Component {
    constructor(id) {
        super(id)

        this.tabs = [] // массив для записи полей табов
    }

    init() {
        this.$el.addEventListener('click', tabClickHandler.bind(this))
    }

    registerTabs(tabs) { // метод для занесения в массив каждого поля таба
        this.tabs = tabs
    }

}

function tabClickHandler(event) { // функция смены активного ТАБА при клике
    event.preventDefault()
    // проверим кликнули мы по ссылке с класом tab или нет
    if (event.target.classList.contains('tab')) {
        Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {
            tab.classList.remove('active')
        }) // убираем класс active у всех ссылок, закинув их в массив и вызвав метод foreach переберем все табы и удалим класс
        event.target.classList.add('active') // добавляем класс ссылке по которой кликаем
    
        // переменную положим активный таб, найдя элемент массива у которого name совпадает с атрибутом data-name кликнутого элемента
        const activeTab = this.tabs.find(t => t.name === event.target.dataset.name)
        // скрываем все элементы не относящиеся к текущему, перебираем массив и у каждого элемента вызываем метод компонета hide
        this.tabs.forEach(t => t.component.hide())
        // показываем activeTab, вызывая метод компонета show
        activeTab.component.show()
    }
}
