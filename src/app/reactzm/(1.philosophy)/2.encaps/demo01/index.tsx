import { FileSpreadsheet, MonitorStop, FolderClosed, FolderLock } from 'lucide-react'

export default function Demo01() {
  return (
    <div className='w-80 m-auto p-4 space-y-4'>
      <div className='flex items-center border border-blue-200 rounded-2xl p-4 space-x-4'>
        <FileSpreadsheet className='text-blue-500' />
        <div className='flex-1'>
          <div className='font-bold'>Document Files</div>
          <div className='text-sm text-gray-600'>1328 Files</div>
        </div>
        <div className='text-sm font-bold'>1.3 G</div>
      </div>

      <div className='flex items-center border border-sky-200 rounded-2xl p-4 space-x-4'>
        <MonitorStop className='text-sky-500' />
        <div className='flex-1'>
          <div className='font-bold'>Media Files</div>
          <div className='text-sm text-gray-600'>1171 Files</div>
        </div>
        <div className='text-sm font-bold'>15.1 G</div>
      </div>

      <div className='flex items-center border border-yellow-200 rounded-2xl p-4 space-x-4'>
        <FolderClosed className='text-yellow-500' />
        <div className='flex-1'>
          <div className='font-bold'>Other Files</div>
          <div className='text-sm text-gray-600'>862 Files</div>
        </div>
        <div className='text-sm font-bold'>12.7 G</div>
      </div>

      <div className='flex items-center border border-red-200 rounded-2xl p-4 space-x-4'>
        <FolderLock className='text-red-500' />
        <div className='flex-1'>
          <div className='font-bold'>Git Files</div>
          <div className='text-sm text-gray-600'>1321 Files</div>
        </div>
        <div className='text-sm font-bold'>1.41 G</div>
      </div>
    </div >
  )
}
