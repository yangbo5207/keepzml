import Button from '@/components/ui/button'
import { Rabbit, Rocket, Ship } from 'lucide-react'

export default function Demo01() {
  return (
    <div className='w-60 border border-gray-300 rounded'>
      <header className='p-2 font-bold text-sm border-b border-gray-300'>按钮组件</header>
      <div className='flex flex-col items-center justify-center py-4 space-y-4'>
        <div>
          <Button primary>
            <Rabbit size={16} />
            <span>|||||||||||||||</span>
          </Button>
        </div>

        <div>
          <Button>
            <Rocket size={16} />
            <span>|||||||||||||||</span>
          </Button>
        </div>

        <div>
          <Button danger>
            <Ship size={16} />
            <span>|||||||||||||||</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
