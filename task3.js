let his = document.querySelector('.history')
let btnSend = document.querySelector('.btn-send')
let btnShow = document.querySelector('.btn-show')

btnSend.addEventListener('click', () => {
    let messenger = new Messenger
    messenger.send()
    author = document.querySelector('.name')
    author.value=''
    text = document.querySelector('.message')
    text.value = ''
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
        let a = new Array
        his.style.display = 'none'
        for(let i=0; i<this.arr.length; i++) {
            let p = document.createElement('p')
            p.innerHTML = `${this.arr[i][2]}  ${this.arr[i][0]}: ${this.arr[i][1]}`
            a.push(p)
            his.appendChild(p)

        } 
    }
}

class Messenger extends Message{
    constructor(name, date, text) {
        super(name, date, text)
        this.arr = []
    }
    show_history() {
        his.style.display = 'block'
    }
    send(author, text) {
        author = document.querySelector('.name')
        this.name = author.value
        text = document.querySelector('.message')
        this.text = text.value
        let time = gettime()
        this.date = time
        let str = [this.name, this.text, this.date]
        this.arr.push(str)
        this.toHtml()
    }
}

function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}