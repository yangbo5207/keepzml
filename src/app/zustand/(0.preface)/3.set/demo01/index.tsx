import Count1 from './count1'
import Count2 from './count2'

export default function Counter() {
  return (
    <div className='flex items-center justify-center space-x-4'>
      <Count1 />
      <Count2 />
    </div>
  )
}