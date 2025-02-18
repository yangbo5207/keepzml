import { FileSpreadsheet, MonitorStop, FolderClosed, FolderLock } from 'lucide-react'
import List from './list'

export default function Demo03() {
  const data = [
    {
      className: 'border-blue-200',
      iconColor: 'text-blue-500',
      icon: FileSpreadsheet,
      title: 'Document Files',
      number: 1328,
      size: '1.3 G'
    },
    {
      className: 'border-sky-200',
      iconColor: 'text-sky-500',
      icon: MonitorStop,
      title: 'Media Files',
      number: 1171,
      size: '15.1 G'
    },
    {
      className: 'border-yellow-200',
      iconColor: 'text-yellow-500',
      icon: FolderClosed,
      title: 'Other Files',
      number: 862,
      size: '12.7 G'
    },
    {
      className: 'border-red-200',
      iconColor: 'text-red-500',
      icon: FolderLock,
      title: 'Git Files',
      number: 1321,
      size: '1.47 G'
    }
  ]

  return (
    <div>
      <header className='border-b pb-4 border-gray-200'>这是我封装好的列表组件</header>
      <List data={data} />
    </div>
  )
}
