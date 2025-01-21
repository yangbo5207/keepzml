import './index.css'

export default function PageLoading() {
  return (
    <div className='w-full h-64 flex flex-col items-center justify-center'>
      <div className="loader"></div>
      <div className='text-sm text-blue-500 mt-3'>page loading...</div>
    </div>
  )
}
