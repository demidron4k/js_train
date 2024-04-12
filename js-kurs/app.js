'use strict'
/*const myCity = {
city: 'New York',
popular: true,
}
myCity['country'] = 'USA' // добавления нового свойства используеться если в названии переменной есть название похожее на значение переменной
 у обьектов в ЖС есть вложенные свойства

myCity.time = '21:23' // добавления нового свойства
delete myCity.time //с помощьб delete мы можем удалить свойство в обьекте
console.log(myCity) //dot notation или же точечная запись
const name = 'Vitaly'
const age = 21

const userProfile = {
name: name,
age: age,
hasSignedArgeement: true,
}
или же другой способ записи
const userProfile = {
name,
age,
hasSignedArgument: true,
}
console.log(userProfile)
cityGreefings() {
	console.log('SHUUUUUUUU')
},
одно и тоже что 
cityGreefings: function() {
		console.log('SHUUUUUUUU')
	},
const myCity = {
	city: 'New York',
	cityGreefings() {
		console.log('SHUUUUUUUU')
	},
}
myCity.cityGreefings()

JSON - javascript object notation
JSON.parse() метод конвертации json в js обьект
JSON.stringify() метод конвертации js обьект в JSON
const post = {
	title: 'My post',
	likeQty: 5,
}

console.log(JSON.stringify(post))
const postStringify = JSON.stringify(post)
console.log(JSON.parse(postStringify))

const a = 10
let b = a
b = 30
console.log(a)		
console.log(b)

const person = {
	age: 21,
	name: 'Bob',
}
person.age = 23
person.isAdult = true
console.log(person)

//ПЕРВЫЙ МЕТОД КАК ИЗБЕЖАТЬ МУТАЦИИ
const person = {
	name: 'Bob',
	age: 32,
}
const person2 = Object.assign({}, person) // если нету вложенных обектов монжно использовать такой метод
person2.age = 34
console.log(person)
console.log(person2)
//ВТОРОЙ МЕТОД КАК ИЗБЕЖАТЬ МУТАЦИИ

const person = {
	name: 'Bob',
	age: 32,
}
const person2 = { ...person }
person2.name = 'Alica' // если нету вложенных обектов монжно 
console.log(person)
console.log(person2)

// можно избежать мутацию при наличии вложенных обектов
const person = {
	name: 'Bob',
	age: 32,
}
const person2 = JSON.parse(JSON.stringify(person)) // ссылки на  вложенные обекты не сохраняется

person2.name = 'Alica'
console.log(person)
console.log(person2)

//в JS лучше избигать повторений строк кода поэтому стоит использовать функцию
let a = 5
let b = 6
function sum(a, b) {
	const c = a + b
	console.log(c)
}
sum(a, b)
a = 8
b = 12
sum(a, b)

// функция может быть именнованной , присвоенна переменной , анонимной ,аргументом при вызове другой функции ,значением свойства обьекта
function myFn(a, b) {
	let c
	a = a + 1
	c = a + b
	return c
}
console.dir(myFn)

//внутри функции не рекомендуется мутировать внешние обьекты
// создание копии объекта 

const personOne = {
	name: 'Bob',
	age: 21,
}

function increasPersonAge(person) {
	const updatedPerson = Object.assign({}, personOne)
	updatedPerson.age += 1
	return updatedPerson
}

const updatedPerson = increasPersonAge(personOne)
console.log(personOne.age)
console.log(updatedPerson.age)

// колбэк функции
function anotherFunction() {}
function functionWithCallback(callbackFunction) {
	callbackFunction()
}
functionWithCallback(anotherFunction)

function printMyName() {
	console.log('Bogdan')
}
setTimeout(printMyName, 1000)


function myFn() {
	a = true
	console.log(a)
}
myFn()
console.log(a)
*/
/*
операторы
оператор это встроенная в js функци
операторы бывают арифметические такие как 
+ - * и /
также операторы сравнения
===
.!==
<=
>=
логикческие операторы
не ! и && или ||
и оператор присваивания
=
а так же тектовые
typeof- проверить тип значения
instanceof- проверить принадлежность обьекта к тому или иному классу
new 
delete- с помощью его можно удалить свойства в обьекте

let a, b
a = 5
b = a
let c = a + b
console.log(c)
у оператора присваивания есть два операнда или аргумента
у унарных операторов есть только один операнд
a++ увеличивает значение на 1
+a может конвертирует сроку в число
delete obj.a
typeof a
new Object()
у бинарных операторов есть всегда два операнда
a=5
a+5
a+=5
a ===b сравнивает и значение и тип переменной
a && b называеться им
формат записи под названием инфиксная запись в ней операнды стоят между операторами 

a = true 
a + b
а так же есть прификсная запись в ней же оператор   стоит перед операндом
++a
gelete obj.a 
а так же есть постфиксная запись в ней же оператор  стоит после операндом
a++
function()

приоритетность операторов
a + b * c / d - e 
чтобы поменять последовательность используются скобки

function removeSmallest(numbers) { в фунции под названием   removeSmallest принмается массив чисел numbers
 const copy = numbers.slice(0) создаем копию оригинального массива чтобы не мутировать его это требуется по заданию .slice метод слайс нужен для того чтобы создать копию массива он принимает в себя 2 значения начала и конца
 let smallestValue = numbers.indexOf(Math.min(...numbers)) задаем переменную и присваиваем ей индекс в массиве с помошью Math.min мы ищем  наименьшее число в массиве numbers 
 copy.splice(smallestValue, 1); с помощью метода splice мы изменяем создержимое массива удаляя существуещие элементы или удаляя новые первым мы принмаем индекс элемента вторым мы принимаем количество эллементов 
 return copy

function find_average(array) {
  if (array.length === 0) { если длинна массива будет равна 0 то возвращает 0
  return 0; 
  }
  var result = 0; добавляем переменную result и присваиваем ей значение 0
  for (i=0; i<array.length; i++) { цикл фор добавляет к результату значение значение элемента массива и так пока не достигнет длинны массива аррай
    result +=array[i];
  }
  return result/array.length; возвращает результат деленный на длину массива аррай
}

группа лог операторов
o! оператор не всегда возвращает булеан (тру или фолс)
&& оператор и возвращают одно значение одного из операндов 
|| оператор или
ложные значение все при конвертации передают значение false 
false
0
''
undefind 
null

boolean(value) если возваращает значение тру значение не ложное ИСТЕННОЕ


console.log(typeof 10)
typeof нужен для определения типа выражения
console.log(typeof 10 === 'number')
let isUndefined

console.log(typeof isUndefined === 'undefined')
o! оператор не чаще всего применяется в условных инструкциях
по типу if
if else
два вокслецательных знака является отрицанием отрицания 
операторы и или или яв-ся операторами короткого замыкания
1 выражение && 2 выражение
если выражение 1 ложно то выражение 2 игнорируется
и возвращает результат 1 выражения
на 2 выражение в таком случае js не смотрит
если выражение 1 не ложное то ищется выражение 2 
если же выражение 2 ложное то возвращаеться результат 2 выражения 
если же оно верное возвращается результат обоих выражений
 оператор || или 
 1 выражение ||  2 выражение
если выражение 1 истенное  то возвращается результат 1 выражение
если выражение 1 ложное то мы переходим ко 2 выражению если оно истенное то оно возвращаем как результат всего выражение	
цепочка операторов && и ||
a && b && c && d && e
a || b || c || d|| e
 оператор разделение обьекта на свойства ...
const button = {
	width: 200,
	text: 'Buy',
}
const redButton = {
	...button, 
	color: 'red', если объекте button есть слово color его значение будет переписано
}
console.table(redButton)

const buttonInfo = {
	text: 'Buy',
}
const buttonStyle = {
	color: 'red',
	width: 200,
	height: 300,
}
const button = {
	...buttonInfo,
	...buttonStyle,
}
console.table(button)

конкатенация строк с помощью +	

шаблонная строка 
`${AVB} ${WORLD}`

функциональные выражение не имеют имени еще нельзя использовать функцию автономно

const myFunction = function (a, b) {
	let c
	a = a + 1
	b = a + b
	return c
}
myFunction(5, 3)
setTimeout(function () {
	console.log('отложенное сообщение ')
}, 1000)
стрелочная  фунции это выражение всегда онанимана
чтобы дать имя стрелочной функии нужно 

const myFunction = (a, b) => {
	let c
	a = a + 1
	c = a + b
	return c
}
setTimeout(() => {
	console.log('отложенное сообщение ')
}, 1000)
если у стрелочной функции только 1 параметр запись скобок можно не делать 
 a =>{
	тело функции
 }
если тело фунции состоит из 1 выражение можно отпустить фигурные скобки
(a, b) => a+ b 
в таком случае возврат будет неявным т.е без использования return

const newPost = (post, addetAt = Date()) => ({
	...post,
	addetAt,
})
const firstPost = {
	id: 1,
	author: 'Vitalbek',
}

console.log(newPost(firstPost))
js sasdassds
*/
