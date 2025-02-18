import React, { useState } from 'react'
import Button from 'components/ui/button'

function Demo01() {
  const [fontSize, setFontSize] = useState(14);

  const __increase = () => {
    setFontSize(prevSize => {
      if (prevSize >= 32) return prevSize;
      return prevSize + 1;
    });
  };

  const __decrease = () => {
    setFontSize(prevSize => {
      if (prevSize <= 12) return prevSize;
      return prevSize - 1;
    });
  };

  return (
    <div className='flex flex-col items-center justify-center max-w-2xl mx-auto p-6'>
      <div className='flex gap-4 mb-6'>
        <Button primary onClick={__decrease}>缩小字体</Button>
        <Button primary onClick={__increase}>放大字体</Button>
      </div>
      <div
        className='border p-8 rounded-lg shadow-md hover:shadow-lg border-gray-200 w-full text-center bg-white'
        style={{
          fontSize: `${fontSize}px`,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          maxWidth: '100%',
          overflow: 'hidden'
        }}
      >
        <div className='text-base'>当前父元素字体大小：{fontSize}px</div>
        <div className='text-base'>连续点击按钮，并注意观察下面元素的高度与外边距的变化</div>
        <div className='m-[1em] h-[8em] bg-gray-100 rounded-md'></div>
      </div>
    </div>
  );
}

export default Demo01;