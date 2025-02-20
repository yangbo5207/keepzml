import Button from 'components/ui/button'

export default function Counter() {
  function __click() {
    setTimeout(() => {
      console.log('timeout-200')
    }, 200)

    setTimeout(() => {
      console.log('timeout-800')
    }, 800)

    setTimeout(() => {
      console.log('timeout-300')
    }, 300)
  }
  return (
    <div className=''>
      <Button onClick={__click}>执行三个 setTimeout task</Button>
    </div>
  )
}