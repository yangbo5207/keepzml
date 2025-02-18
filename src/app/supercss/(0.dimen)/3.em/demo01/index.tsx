import './index.css'

function Demo01() {
  return (
    <div className='supercss_em_01_parent'>
      I'm parent div set font-size to 20px
      <div className='child'>
        I'm child div set font-size to 2em, so my font-size is 40px
      </div>
    </div>
  );
}

export default Demo01;