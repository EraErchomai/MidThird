let his = document.querySelector('.history')
let btnSend = document.querySelector('.btn-send')
let btnShow = document.querySelector('.btn-show')

btnSend.addEventListener('click', () => {
    let messenger = new Messenger
    messenger.send()
    messenger.toHtml()
})

btnShow.addEventListener('click', () => {
    let messenger = new Messenger
    messenger.show_history()
})

class Message {
    constructor(name, date, text) {
        this.name = name
        this.date = date
        this.text = text
    }
    toHtml() {
        let p = `<p>[${this.arr[0][1]}] [${this.arr[0][0]}]: [${this.arr[0][2]}]</p>`
        return p
    }
}

class Messenger extends Message{
    constructor(name, date, text) {
        super(name, date, text)
        this.arr = []
    }
    show_history() {
        let a =this.toHtml()
        console.log(a)
        his.insertAdjacentElement('beforeend', a)
    }
    send(author, text) {
        author = document.querySelector('.name')
        this.name = author.value
        console.log(this.name)
        text = document.querySelector('.message')
        this.text = text.value
        let time = gettime()
        this.data = time
        let str = [this.name, this.text, this.data]
        console.log(str)
        this.arr.push(str)
        console.log(this.arr)
    }
}

function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}