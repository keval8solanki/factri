import f from 'factri'
const { extend, factory } = f
console.log(f)
const Human = factory((t, { name = 'Human' }) => {
	t.walk = () => console.log('walking')
	t.talk = () => console.log('talking')
	t.sayName = () => console.log('My name is', name)
})

const Man = extend((t) => {
	t.work = () => console.log('working')
}, Human)

const man = Man({ name: 'Keval' })
man.walk()
man.talk()
man.sayName()
man.work()
