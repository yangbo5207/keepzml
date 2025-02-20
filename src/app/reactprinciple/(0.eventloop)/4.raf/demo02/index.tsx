import Button from 'components/ui/button'

export default function Counter() {
  function __click() {
    requestAnimationFrame(() => {
      console.log('raf_1')

      requestAnimationFrame(() => {
        console.log('raf_1_3')
      })
    })

    requestAnimationFrame(() => {
      console.log('raf_2')
      let currnet = Date.now()
      while (Date.now() - currnet < 1000) {
        // 卡住 1000ms
      }
    })
  }
  return (
    <div className=''>
      <Button onClick={__click}>执行两个 requestAnimationFrame task</Button>
    </div>
  )
}