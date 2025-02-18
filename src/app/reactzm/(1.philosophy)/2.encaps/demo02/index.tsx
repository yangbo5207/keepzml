import { FileSpreadsheet, MonitorStop, FolderClosed, FolderLock } from 'lucide-react'
import Item from './item'

export default function Demo01() {
  return (
    <div className='w-80 m-auto p-4 space-y-4'>
      <Item className='border-blue-200' iconColor='text-blue-500' icon={FileSpreadsheet} title='Document Files' number={1328} size='1.3 G' />
      <Item className='border-sky-200' iconColor='text-sky-500' icon={MonitorStop} title='Media Files' number={1171} size='15.1 G' />
      <Item className='border-yellow-200' iconColor='text-yellow-500' icon={FolderClosed} title='Other Files' number={862} size='12.7 G' />
      <Item className='border-red-200' iconColor='text-red-500' icon={FolderLock} title='Git Files' number={1321} size='1.47 G' />
    </div >
  )
}
