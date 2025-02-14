import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { variants } from './variants'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const ultraFeatures = [
  '1. 学习方法之如何理解体系化',
  '2. 架构思维总览',
  '3. BFF架构与运用',
  '4. 组件拆分原则',
  '5. 解耦与嵌套',
  '6. 瀑布流渲染',
  '7. 复杂接口请求处理方式',
  '8. 其他大量实践案例',
  '9. 项目亮点表达方式',
  '10. 群内直播讲解',
  '11. 群内大量高质量答疑视频'
]

const pricing = {
  frequencies: [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/终身制' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
  ],
  tiers: [
    {
      name: '基础版',
      id: 'tier-hobby',
      href: 'https://xinyuzone.cn/column/1876449089626005504',
      price: '￥40',
      description: '大量可演示实践案例，帮助学习者轻松掌握 React 19.',
      delay: 0.1,
      features: [
        '1. 基础理论',
        '2. use promise',
        '3. Suspense',
        '4. 低版本兼容方案',
        '5. use context',
        '6. 并发 api',
        '7. React Compiler',
        '8. Compiler 低版本引入',
        '9. Form Action',
        '10. 乐观更新',
        '11. 直播课录屏'
      ],
      mostPopular: true,
    },
    {
      name: '尊享版',
      id: 'tier-freelancer',
      href: 'https://xinyuzone.cn/column/1876560978079080448',
      price: '￥400',
      description: '严格践行一套架构思维扩展复杂场景的使用',
      features: ultraFeatures,
      mostPopular: false,
      delay: 0.15,
    },
    {
      name: 'KeepCoder',
      id: 'tier-enterprise',
      href: 'https://www.yuque.com/coreadvance/ar2my1/apk8cr',
      price: '￥2W',
      description: '1V1 顶级私人辅导，构建核心竞争力，全方面助你提高',
      features: [
        '1. 1V1服务',
        '2. 终身制服务',
        '3. 量身定制学习方式',
        '4. 顶级的前端技术能力',
        '5. 学霸级学习方法',
        '6. 全方位认知升级',
        '7. 构建完善的知识体系',
        '8. 全面的职场综合能力',
        '9. 顶尖的团队管理能力',
        '10. 完整的产品思维',
        '11. 完整的全栈思维',
      ],
      mostPopular: false,
      delay: 0.2,
    },
  ],
}

export default function Price() {
  const [frequency] = useState(pricing.frequencies[0])
  return (
    <main className='py-14 px-6 md:px-1'>
      <div className="mx-auto max-w-[1080px]">
        <motion.a {...variants()} className="font-bold text-2xl text-center block scroll-mt-52" href='#price' id='price'>价格</motion.a>

        <motion.p {...variants()} className="mt-2 mb-10 text-center leading-6 px-6 md:px-44">
          请根据自己的学习意愿和经济能力综合考虑，理性消费。我负责提供过硬的学习质量，确保每一位用户都能学有所得
        </motion.p>

        <div
          className="isolate mx-auto mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:max-w-none xl:grid-cols-3">
          {pricing.tiers.map((tier, index) => (
            <div key={tier.id}>
              <motion.div {...variants(tier.delay)} className={classNames(tier.mostPopular ? 'ring-1 ring-indigo-600' : 'ring-1 ring-gray-200', 'rounded p-8')}>
                <h2 id={tier.id} className={classNames(tier.mostPopular ? 'text-indigo-600' : 'text-gray-900', 'text-lg font-semibold leading-8',)}>
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">{frequency.priceSuffix}</span>
                </p>
                <Link
                  aria-describedby={tier.id}
                  target='_blank'
                  href={tier.href}
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                      : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                    'mt-6 block rounded px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                  )}
                >
                  {index < 2 ? '点击购买' : '了解详情'}
                </Link>
                <ul role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature, index) => (
                    <li key={feature} className="flex gap-x-3 items-center justify-between">
                      {index < 11 ? feature : <div className='text-red-500'>{feature}</div>}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={index < 11 ? "size-4" : 'size-4 text-red-500'}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
