const Userinfo = (props) => {
  const message = unescape(props.message.replace(/\\u/gi,'%u'));
  const username = unescape((props.username || '').replace(/\\u/gi,'%u'));
  const index = props.index || 0;

  let base = 'flex border border-blue-100 p-4 rounded-md my-4 items-start'

  return (
    <div className={base}>
      <img className='w-10' src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} alt='' />
      <div className='flex-1 ml-3'>
        <div>{username || 'no name'}</div>
        <div className='text-sm mt-1 text-gray-600'>{message}</div>
      </div>
    </div>
  )
}

export default Userinfo
