import Intro from './intro.mdx'
import { Code, InlineCode } from 'components/codehike/code'

export default function SuitableFor() {
  return (
    <div className='p-4 md:p-8 border-gray-200 border rounded'>
      <header className='font-bold'>专栏简介</header>

      <div className="keep">
        <Intro components={{ Code, InlineCode }} />
      </div>

    </div>
  )
}
