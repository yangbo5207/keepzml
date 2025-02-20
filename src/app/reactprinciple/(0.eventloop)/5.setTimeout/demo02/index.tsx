import Button from 'components/ui/button'

export default function Counter() {
  function __click() {
    setTimeout(() => {
      console.log('timeout 0.')
      setTimeout(() => {
        console.log('timeout 0_2')
      }, 2)
    }, 0)

    setTimeout(() => {
      console.log('timeout 3.')
    }, 3)

    setTimeout(() => {
      console.log('timeout 2.')
    }, 2)

    setTimeout(() => {
      console.log('timeout 1.')
    }, 1)
  }
  return (
    <div className=''>
      <Button onClick={__click}>执行两个 requestAnimationFrame task</Button>
    </div>
  )
}