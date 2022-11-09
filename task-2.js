console.log(Number('10'), typeof Number('10')) // явное

//1 не явное
console.log(+'50')
console.log(Number('50'))

//2 явное
console.log(Number(100))

//3 не явное
console.log('' + 1)
console.log(String(1))

//4 явное
console.log(String(1))

//5 явное
console.log(Boolean(0))

//6 не явное
console.log(+'001')
console.log(Number('001'))
//7
console.log(1 + '')
console.log(String(1))

//8 явное
console.log(Boolean(1))

//9 явное
console.log(String(001))

//10 явное
console.log(Number('Hello World'))
