'use client'

import { motion } from 'framer-motion'
import { variants } from './variants'
import Link from 'next/link'
import { Clock, Tag, Sparkles, BookOpen, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface Course {
  id: string;
  title: string;
  description: string;
  releaseDate: string;
  originalPrice: number;
  promoPrice: number;
  promoEndsAt: string;
  isNew: boolean;
}

// 自定义 hook 用于处理倒计时逻辑
function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = new Date(targetDate).getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

// 示例课程数据
const latestCourse: Course = {
  id: 'react-19-mastery',
  title: '爆锤面试官之 React 原理面试',
  description: '本专栏专门聚焦于 React 原理面试题，可应对大厂资深前端面试场景',
  releaseDate: new Date().toISOString().split('T')[0], // 今天
  originalPrice: 2000,
  promoPrice: 400,
  promoEndsAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3天后
  isNew: true
};

export default function Banner() {

  const timeLeft = useCountdown(latestCourse.promoEndsAt);
  const discount = Math.round(100 - (latestCourse.promoPrice / latestCourse.originalPrice * 100));

  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl overflow-hidden border border-blue-100 dark:border-blue-800"
          {...variants()}
        >
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* 左侧内容区 */}
              <motion.div
                className="flex-1 space-y-4"
                {...variants(0.1)}
              >
                <div className="flex items-center space-x-2">
                  {latestCourse.isNew && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                      <Sparkles size={12} className="mr-1" />
                      最新上线
                    </span>
                  )}
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    <Clock size={14} className="inline mr-1" />
                    {latestCourse.releaseDate} 更新
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                  {latestCourse.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {latestCourse.description}
                </p>

                <div className="flex items-center space-x-2">
                  <BookOpen size={16} className="text-blue-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">包含完整文字版内容与直播讲解</span>
                </div>
              </motion.div>

              {/* 右侧价格和倒计时区 */}
              <motion.div
                className="md:w-72 bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-100 dark:border-gray-700 space-y-4"
                {...variants(0.2)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-red-500">¥{latestCourse.promoPrice}</span>
                  <div className="flex flex-col items-end">
                    <span className="text-gray-500 line-through text-sm">¥{latestCourse.originalPrice}</span>
                    <span className="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">
                      <Tag size={12} className="inline mr-1" />
                      省 {discount}%
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
                  <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">促销倒计时:</div>
                  <div className="flex justify-between">
                    <div className="text-center">
                      <div className="bg-gray-200 dark:bg-gray-600 rounded px-2 py-1 font-mono font-bold text-lg tabular-nums">{timeLeft.days}</div>
                      <div className="text-xs mt-1 text-gray-500">天</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-200 dark:bg-gray-600 rounded px-2 py-1 font-mono font-bold text-lg tabular-nums">{timeLeft.hours}</div>
                      <div className="text-xs mt-1 text-gray-500">时</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-200 dark:bg-gray-600 rounded px-2 py-1 font-mono font-bold text-lg tabular-nums">{timeLeft.minutes}</div>
                      <div className="text-xs mt-1 text-gray-500">分</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-200 dark:bg-gray-600 rounded px-2 py-1 font-mono font-bold text-lg tabular-nums">{timeLeft.seconds}</div>
                      <div className="text-xs mt-1 text-gray-500">秒</div>
                    </div>
                  </div>
                </div>

                <Link
                  href='https://xinyuzone.cn/column/1877242199536902144'
                  className="block w-full text-center py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
                >
                  立即购买
                </Link>

                <Link
                  href={`/reactprinciple`}
                  className="block w-full text-center py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md font-medium transition-colors text-sm"
                >
                  查看课程详情 <ArrowRight size={14} className="inline ml-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}