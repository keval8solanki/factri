import f from 'factri'
const { extend, factory } = f
console.log(f)
const Human = factory((t, { name = 'Human' }) => {
	t.walk = () => console.log('walking')
	t.talk = () => console.log('talking')
	t.sayName = () => console.log('My name is', name)
})

const h1 = Human()
const h2 = Human()

// console.table(h1)

console.log(h1 === h2)

const Man = extend((t) => {
	console.table(t)
	t.work = () => console.log('working')

	console.log(t)
}, Human)

const man = Man({ name: 'Keval' })
man.walk()
man.talk()
man.sayName()
man.work()
