

const vaz ={'Country':'СССР','releaseYears':'1970—1988', 'Manufacturer':'ВАЗ','Bodytype':'седан','pic':'vaz2101.jpg'}   //объект

console.log(vaz);

let but = document.getElementById('but')
let vazCard = document.getElementById('vazCard')

let stroka = ''

but.onclick = function f1(){
    stroka += 'Страна: ' + vaz.Country + '<br>' + 'Годы производства: ' + vaz.releaseYears + '<br>' + 'Производитель: '+ vaz.Manufacturer + '<br>' + 'Тип корпуса: ' + vaz.Bodytype + '<br>' + '<img src=' + vaz.pic + ' alt="auto" width="300px">' + '<br>'
    vazCard.innerHTML = stroka
}

///////////////////////////////////////////////////////////////////////////////
const chek = [
    {name: 'Картошка', quantity: 2, price: 10,},
    {name: 'Капуста', quantity: 1, price: 50,},
    {name: 'Банан', quantity: 3, price: 3,},
    {name: 'Киви', quantity: 10, price: 10,},
]

let but1 = document.getElementById('but1')
let vivodchek = document.getElementById('vivodchek')
let summa = document.getElementById('summa')
let maximym = document.getElementById('maximym')


but1.onclick = f2

function f2() {
    let str = ''
    for (x in chek) {
        str += '<tr><td>'+chek[x].name+'</td><td>'+chek[x].quantity+'</td><td>'+chek[x].price+'</td></tr>'
    }
    
    vivodchek.innerHTML = '<tr><td>' + 'Название' + '</td><td>' + 'Количество' + '</td><td>' + 'Цена' + '</td></tr>' + str

    const total = chek.reduce((total, elem) => {
        total += elem.price * elem.quantity
        return total}, 0)

    console.log(total)
    summa.innerText = 'Cумма всех покупок: ' + total

    console.log(chek[0].price)

    let max = 0
    let namePrice = ''
    for (x in chek) {
        if (max > chek[x].price) {
            continue
        }
        else {
            max = chek[x].price
            namePrice = chek[x].name
        }
    }

    maximym.innerText = 'Самая дорогая покупка: ' + namePrice + ' за ' + max + 'руб.'
}





















