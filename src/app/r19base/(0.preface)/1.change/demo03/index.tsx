import { useEffect, useRef } from 'react'
import './index.css'

export default function FlexTypeV() {
  const world = ['A', 'B', 'C', 'D']
  const types = ['block', 'flex']
  const typeRef = useRef<string>('block')

  //flip思想 f 先获取元素 以及记录元素初始位置
  const containerRef = useRef<HTMLDivElement>(null)
  const shadowRef = useRef<HTMLDivElement>(null)
  const ref = useRef<any>({})

  useEffect(() => {
    if (shadowRef.current && containerRef.current) {
      const box = Array.from(containerRef.current.children) as HTMLDivElement[]
      const shadowbox = Array.from(shadowRef.current.children) as HTMLDivElement[]

      const shadow_rect = shadowRef.current.getBoundingClientRect()

      shadowbox.forEach((item, i) => {
        const rect = item.getBoundingClientRect()
        box[i].style.width = rect.width + 'px'
        box[i].style.height = rect.height + 'px'
        box[i].style.left = `${rect.x - shadow_rect.x}px`
        box[i].style.top = `${rect.y - shadow_rect.y}px`
      })
    }

    ref.current.record = (shadow: HTMLDivElement) => {
      const box = Array.from(shadow.children)
      box.forEach((item) => {
        const rect = item.getBoundingClientRect()
        item.firstX = rect.x
        item.firstY = rect.y
        item.firstW = rect.width
        item.firstH = rect.height
      })
    }

    ref.current.change = (shadow: HTMLDivElement) => {
      if (typeRef.current === 'block') {
        shadow.style.display = 'flex'
        typeRef.current = 'flex'
      } else if (typeRef.current === 'flex') {
        shadow.style.display = 'block'
        typeRef.current = 'block'
      }
    }

    ref.current.play = (shadow: HTMLDivElement, container: HTMLDivElement) => {
      const shadowbox = Array.from(shadow.children)
      const arr = []
      shadowbox.forEach((item) => {
        const rect = item.getBoundingClientRect()
        const lastX = rect.x
        const lastY = rect.y
        const lastW = rect.width
        const lastH = rect.height

        const dx = lastX - item.firstX
        const dy = lastY - item.firstY

        arr.push({
          dx: dx,
          dy: dy,
          firstW: item.firstW,
          lastW: lastW,
          firstH: item.firstH,
          lastH: lastH,
        })
      })

      const box = Array.from(container.children)
      box.forEach((item, i) => {
        const cur_info = arr[i]
        let targetX = arr[i].dx
        let targetY = arr[i].dy
        //  typeRef 初始值为 `block`
        if (typeRef.current === 'block') {
          targetX = 0
          targetY = 0
        }
        //  typeRef 初始值为 `flex`
        // if (typeRef.current === 'flex') {
        //   targetX = 0
        //   targetY = 0
        // }

        item.animate([
          {
            transform: window.getComputedStyle(item, null).getPropertyValue('transform'),
            width: window.getComputedStyle(item, null).getPropertyValue('width'),
            height: window.getComputedStyle(item, null).getPropertyValue('height'),
          },
          {
            transform: `translate(${targetX}px, ${targetY}px)`,
            width: `${cur_info.lastW}px`,
            height: `${cur_info.lastH}px`,
          }],
          { duration: 800, fill: 'forwards' }
        )
      })
    }
  }, [])

  return (
    <div className="fv-container">
      <div className="fv-box" ref={containerRef}>
        {world.map((item, i) => (
          <div className="fv-box-item" key={i}>
            <div className='fv-box-inner'>
              <span>{item}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="fv-box fv-box-shadow" ref={shadowRef}>
        {world.map((item, i) => (
          <div className="fv-box-item" key={i}>
            <div className='fv-box-inner'>
              <span>{item}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="fv-display">
        <div>display:</div>
        {
          types.map((item, i) => (
            <div className="fv-btn" key={i} >
              <button onClick={() => {
                ref.current.record(shadowRef.current)
                ref.current.change(shadowRef.current)
                ref.current.play(shadowRef.current, containerRef.current)

              }}>{item}</button>
              <div className="fv-bottom-line"></div>
            </div>
          ))
        }
      </div>
    </div>
  )
}


