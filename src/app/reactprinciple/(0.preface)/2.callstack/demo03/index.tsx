export default function Counter() {
  return (
    <div className='border-2 rounded my-4 border-gray-400 w-36 h-[200px] flex flex-col items-center justify-end py-2 space-y-2'>
      <div className='w-32 py-1 text-center bg-blue-600 text-white text-sm rounded'>swrapColor</div>
      <div className='w-32 py-1 text-center bg-gray-400 text-white text-sm rounded'>changeColor</div>
      <div className='w-32 py-1 text-center bg-gray-400 text-white text-sm rounded'>Global</div>
    </div>
  )
}