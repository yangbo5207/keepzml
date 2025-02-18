// import code30 from './30.jpg'
import code200 from './200.jpg'
// import code400 from './400.jpg'
import Flex from 'components/ui/flex'
import Image from 'next/image'

const version = {
  30: '基础版',
  200: '尊享版提前投资',
  400: '尊享版'
}

const paymentcode = {
  // 30: code30,
  200: code200,
  // 400: code400,
}

export default function Payment() {
  const price = 200

  return (
    <div className='mt-24 md:mx-auto mx-4 max-w-[640px] px-4 md:px-16 py-8 border rounded-lg mb-4'>
      <div className='flex items-center space-x-2 mb-8'>
        <svg className="icon" viewBox="0 0 1228 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24">
          <path d="M530.8928 703.1296a41.472 41.472 0 0 1-35.7376-19.8144l-2.7136-5.5808L278.272 394.752a18.7392 18.7392 0 0 1-2.048-8.1408 19.968 19.968 0 0 1 20.48-19.3536c4.608 0 8.8576 1.4336 12.288 3.84l234.3936 139.9296a64.4096 64.4096 0 0 0 54.528 5.9392L1116.2624 204.8C1004.9536 80.896 821.76 0 614.4 0 275.0464 0 0 216.576 0 483.6352c0 145.7152 82.7392 276.8896 212.2752 365.5168a38.1952 38.1952 0 0 1 17.2032 31.488 44.4928 44.4928 0 0 1-2.1504 12.3904l-27.6992 97.4848c-1.3312 4.608-3.328 9.3696-3.328 14.1312 0 10.752 9.216 19.3536 20.48 19.3536 4.4032 0 8.0384-1.536 11.776-3.584l134.5536-73.3184c10.1376-5.5296 20.7872-8.96 32.6144-8.96 6.2976 0 12.288 0.9216 18.0736 2.5088 62.72 17.0496 130.4576 26.5728 200.5504 26.5728C953.7024 967.168 1228.8 750.592 1228.8 483.6352c0-80.9472-25.4464-157.1328-70.0416-224.1024l-604.9792 436.992-4.4544 2.4064a42.1376 42.1376 0 0 1-18.432 4.1984z" fill="#15BA11"></path>
        </svg>
        <div>微信支付</div>
        <div>|</div>
        <div>转账支付</div>
      </div>

      <Flex className="items-center justify-between flex-col md:flex-row">
        <div>
          <Image src={code200} alt="" width='250' height='250' />
          <div></div>
        </div>

        <div className='w-48 md:w-0 border-t my-16 md:border-l border-gray-300 md:h-48 border-dashed'></div>

        <div className='pl-10'>
          <div>您正在购买 《超级 CSS》付费专栏</div>
          <Flex className="items-center">
            ￥
            <div className='' style={{ fontSize: 64 }}>{price}</div>
          </Flex>
          <div className='mt-4'><span className='text-gray-400'>收款方：</span>这波能反杀
          </div>
          <div className='mt-2'><span className='text-gray-400'>微信号：</span>
            icanmeetu
          </div>
          <div className='mt-2'><span className='text-gray-400'>激活码：</span>
            私信我获得激活码
          </div>
        </div>
      </Flex>
    </div>
  )
}