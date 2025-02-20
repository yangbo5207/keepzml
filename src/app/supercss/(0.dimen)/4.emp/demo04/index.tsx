import { useState } from 'react';
import './index.css'

function Demo4() {
  const [fontSize, setFontSize] = useState(10);
  const [tempSize, setTempSize] = useState(10);

  const __handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempSize(Number(e.target.value));
  }

  const __handleChangeComplete = () => {
    setFontSize(tempSize);
  }

  return (
    <div className='supercss_4emp_01'>
      <div className='control flex items-center gap-4 justify-center'>
        <input
          type='range'
          name='size'
          min='12'
          max='30'
          step='1'
          value={tempSize}
          onChange={__handleSizeChange}
          onMouseUp={__handleChangeComplete}
          onTouchEnd={__handleChangeComplete}
        />
        <p>当前父级元素字体为: <span>{tempSize}px</span></p>
      </div>

      <div className='container clearfix' style={{
        fontSize: `${fontSize}px`,
      }}>
        <h1>Lorem ipsum</h1>
        <img src='https://loremflickr.com/170/170' alt='' className='float-img' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam magni cumque, neque et, consequuntur dolorem impedit, itaque modi voluptatibus nisi quam minus dolore facilis assumenda debitis dolor! Delectus, nihil.
        </p>
      </div>
    </div>
  )
}

export default Demo4;