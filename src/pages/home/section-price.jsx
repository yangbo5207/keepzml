import {useState} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'motion/react'
import {variants} from './index'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ultraFeatures = [
  '学习方法之如何理解体系化',
  '架构思维总览',
  'BFF架构与运用',
  '组件拆分原则',
  '解耦与嵌套',
  '瀑布流渲染',
  '复杂接口请求处理方式',
  '其他大量实践案例',
  '项目亮点表达方式',
  '群内直播讲解',
  '群内大量高质量答疑视频'
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
      price: { monthly: '￥40', annually: '$144' },
      description: '大量可演示实践案例，帮助学习者轻松掌握 React 19.',
      delay: 0.4,
      features: [
        '基础理论',
        'use promise',
        'Suspense',
        '低版本兼容方案',
        'use context',
        '并发 api',
        'React Compiler',
        'Compiler 低版本引入',
        'Form Action',
        '乐观更新',
        '直播课录屏'
      ],
      mostPopular: false,
    },
    {
      name: '尊享版',
      id: 'tier-freelancer',
      href: 'https://xinyuzone.cn/column/1876560978079080448',
      price: { monthly: '￥400', annually: '$288' },
      description: '严格践行一套架构思维扩展复杂场景的使用',
      features: ultraFeatures,
      mostPopular: true,
      delay: 0.5,
    },
    {
      name: 'KeepCoder',
      id: 'tier-enterprise',
      href: 'https://www.yuque.com/coreadvance/ar2my1/apk8cr',
      price: { monthly: '￥2W', annually: '$864' },
      description: '1V1 顶级私人辅导，构建核心竞争力，全方面助你提高',
      features: [
        '1V1服务',
        '终身制服务',
        '量身定制学习方式',
        '顶级的前端技术能力',
        '学霸级学习方法',
        '全方位认知升级',
        '构建完善的知识体系',
        '全面的职场综合能力',
        '顶尖的团队管理能力',
        '完整的产品思维',
        '完整的全栈思维',
      ],
      mostPopular: false,
      delay: 0.6,
    },
  ],
}

export default function Price() {
  const [frequency] = useState(pricing.frequencies[0])
  return (
    <main className='backdrop-blur-sm py-14 md:py-28 bg-gray-50 bg-opacity-70 px-6 md:px-8'>
      <div className="mx-auto max-w-[1080px]">
        <motion.a {...variants()} className="font-bold text-2xl md:text-4xl text-center block scroll-mt-52" href='#price' name='price' id='price'>价格</motion.a>
        
        <motion.p {...variants(0.1)} className="mt-8 md:mt-12 text-center leading-8 px-10">
          请根据自己的学习意愿和经济能力综合考虑，理性消费。我负责提供过硬的学习质量，确保每一位用户都能学有所得
        </motion.p>

        <div
          className="isolate mx-auto mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:max-w-none xl:grid-cols-3">
          {pricing.tiers.map((tier, index) => (
            <motion.div {...variants(tier.delay)} key={tier.id} className={classNames(tier.mostPopular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200', 'rounded-md p-8')}>
              <h2 id={tier.id} className={classNames(tier.mostPopular ? 'text-indigo-600' : 'text-gray-900', 'text-lg font-semibold leading-8',)}>
                {tier.name}
              </h2>
              <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price[frequency.value]}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">{frequency.priceSuffix}</span>
              </p>
              <Link
                aria-describedby={tier.id}
                target='_blank'
                to={tier.href}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                )}
              >
                {index < 2 ? '点击购买' : '了解详情'}
              </Link>
              <ul role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tier.features.map((feature, index) => (
                  <li key={feature} className="flex gap-x-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={index < 11 ? "size-4" : 'size-4 text-red-500'}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                    </svg>
                    {index < 11 ? feature : <div className='text-red-500'>{feature}</div>}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
