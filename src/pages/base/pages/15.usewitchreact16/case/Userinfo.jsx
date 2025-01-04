import use from './use'

const Userinfo = (props) => {
  const {id, value} = use(props.promise)
  const index = props.index || 0;

  return (
    <div className='flex border border-blue-100 p-4 rounded my-4 items-start'>
      <img className='w-10' src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} alt='' />
      <div className='flex-1 ml-3'>
        <div>{id || 'no name'}</div>
        <div className='text-sm mt-1 text-gray-600'>{value}</div>
      </div>
    </div>
  )
}

export default Userinfo