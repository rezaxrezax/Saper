function hello () {
  console.log('Hello test!', this)
}

const person = {
  name: 'Max',
  age: 20,
  sayHello: hello,
}
