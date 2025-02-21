import Button from 'components/ui/button'
import XPromise from './promise'

export default function Counter() {
  function __click() {
    new XPromise((resolve) => {
      setTimeout(() => {
        resolve('hello xpromise')
      }, 1000)
    }).then((value: any) => {
      console.log('5. Value: ', value)
    }).then(() => {
      console.log('6')
    })

    new XPromise(resolve => {
      resolve('')
    }).then(() => {
      console.log('1')
      new XPromise(resolve => {
        resolve('')
      }).then(() => {
        console.log('2')
      }).then(() => {
        console.log('4')
      })
    }).then(() => {
      console.log('3')
    })

    console.log('0')
  }
  return (
    <div className=''>
      <Button onClick={__click}>执行 XPromise 任务</Button>
    </div>
  )
}