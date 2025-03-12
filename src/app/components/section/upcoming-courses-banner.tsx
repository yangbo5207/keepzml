'use client'

import { motion } from 'framer-motion'
import { variants } from './variants'
import Link from 'next/link'
import { Clock, AlertCircle, FileText } from 'lucide-react'
import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number; 
  seconds: number;
}

interface TimeLeftMap {
  [key: string]: TimeLeft;
}
 
interface Course {
  id: string;
  title: string;
  releaseDate: string;
  progress: number;
  articles: number;
  originalPrice: number;
  promoPrice: number;
  promoEndsAt: string;
}

// 自定义 hook 用于处理倒计时逻辑
function useCountdown(courses: Course[]) {
  const [timeLeft, setTimeLeft] = useState<TimeLeftMap>({});
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const newTimeLeft: TimeLeftMap = {};
      
      courses.forEach(course => {
        const difference = new Date(course.promoEndsAt).getTime() - now.getTime();
        
        if (difference > 0) {
          newTimeLeft[course.id] = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        } else {
          newTimeLeft[course.id] = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      });
      
      setTimeLeft(newTimeLeft);
    };
    
    calculateTimeLeft();
    // 将更新频率设置为1秒一次
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [courses]);
  
  const isUrgent = (courseId: string) => {
    const time = timeLeft[courseId];
    if (!time) return false;
    return time.days === 0 && time.hours < 24;
  };
  
  const isHighlighted = (courseId: string) => {
    const time = timeLeft[courseId];
    if (!time) return false;
    return time.days <= 3;
  };

  return { timeLeft, isUrgent, isHighlighted };
}

// 课程卡片组件
interface CourseCardProps {
  course: Course;
  timeLeft: TimeLeft | undefined;
  isUrgent: boolean;
  isHighlighted: boolean;
  index: number;
}

function CourseCard({ course, timeLeft, isUrgent, isHighlighted, index }: CourseCardProps) {
  return (
    <motion.div 
      key={course.id}
      className={`border ${isUrgent ? 'border-red-300 bg-red-50 dark:bg-red-900/10' : 
                          isHighlighted ? 'border-blue-300 bg-blue-50 dark:bg-blue-900/10 shadow-lg shadow-blue-100 dark:shadow-blue-900/5' : 
                          'border-gray-100 dark:border-gray-700'}
                  rounded-lg p-4 hover:shadow-md transition-all w-full`}
      {...variants(0.3 + index * 0.1)}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className={`font-semibold text-lg ${isHighlighted ? 'text-blue-700 dark:text-blue-400' : 'text-gray-800 dark:text-white'}`}>
          {course.title}
          {isHighlighted && (
            <span className="ml-2 inline-block px-2 py-1 text-xs bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-full animate-pulse">
              限时优惠
            </span>
          )}
        </h3>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Clock size={14} className="mr-1" />
          <span>预计上线: {course.releaseDate}</span>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4 relative overflow-hidden">
        <div 
          className={`h-2.5 rounded-full ${
            course.progress > 70 
              ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500' 
              : 'bg-gradient-to-r from-blue-400 to-blue-600'
          }`}
          style={{ width: `${course.progress}%` }}
        />
        
        {course.progress > 70 && (
          <div className="absolute top-0 left-0 h-full w-full">
            <div className="h-full w-full relative overflow-hidden">
              <div className="absolute inset-0 progress-shimmer"></div>
              <div className="absolute right-0 top-0 h-full">
                <div className="h-2.5 w-4 bg-white opacity-20 blur-sm rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        )}
        
        <style jsx>{`
          .progress-shimmer {
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.4) 50%,
              rgba(255, 255, 255, 0) 100%
            );
            width: 100%;
            height: 100%;
            animation: shimmer 2s infinite;
            transform: translateX(-100%);
          }
          
          @keyframes shimmer {
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </div>
      
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-4">
          <span className={`text-sm ${course.progress > 70 ? 'text-red-500 font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
            开发进度: {course.progress}%
            {course.progress > 70 && (
              <span className="ml-1">🔥</span>
            )}
          </span>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <FileText size={14} className="mr-1" />
            <span>已完成文章: {course.articles}篇</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-red-500">¥{course.promoPrice}</span>
          <span className="ml-2 text-gray-500 line-through">¥{course.originalPrice}</span>
          <span className="ml-2 text-xs px-2 py-1 bg-red-100 text-red-700 rounded-md">
            省 ¥{course.originalPrice - course.promoPrice}
          </span>
        </div>
        
        {timeLeft && (
          <div className={`text-sm ${isUrgent ? 'text-red-600 font-semibold' : 'text-gray-600 dark:text-gray-300'} font-mono`}>
            促销倒计时: 
            {timeLeft.days > 0 && <><span className="mx-1">{timeLeft.days}</span>天</>} 
            <span className="mx-1">{timeLeft.hours}</span>时
            <span className="mx-1">{timeLeft.minutes}</span>分
            <span className="mx-1">{timeLeft.seconds}</span>秒
          </div>
        )}
      </div>
      
      <div className="flex justify-end">
        <Link 
          href={`/upcoming/${course.id}`}
          className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md text-sm font-medium transition-colors"
        >
          预约通知
        </Link>
      </div>
    </motion.div>
  );
}


const upcomingCourses = [
  {
    id: 'nextjs-master',
    title: '爆锤面试官之 React 原理面试',
    releaseDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 5天后
    progress: 75,
    articles: 54,
    originalPrice: 2000,
    promoPrice: 400,
    promoEndsAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().replace('Z', ''),
  },
  {
    id: 'react-native-app',
    title: 'React 19 架构 . 尊享版',
    releaseDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 15天后
    progress: 99,
    articles: 32,
    originalPrice: 1000,
    promoPrice: 400,
    promoEndsAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().replace('Z', ''),
  },
  {
    id: 'typescript-pro',
    title: '超级 CSS',
    releaseDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 10天后
    progress: 60,
    articles: 8,
    originalPrice: 1000,
    promoPrice: 200,
    promoEndsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().replace('Z', ''),
  },
]

export default function UpcomingCoursesBanner() {

  // 使用自定义 hook
  const { timeLeft, isUrgent, isHighlighted } = useCountdown(upcomingCourses);

  return (
    <section className="py-10 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          {...variants()}
        >
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <AlertCircle className="text-blue-500 mr-2" size={24} />
              <motion.h2 
                className="text-2xl font-bold text-gray-800 dark:text-white"
                {...variants(0.1)}
              >
                正在开发中的课程
              </motion.h2>
            </div>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-8"
              {...variants(0.2)}
            >
              以下课程正在紧张开发中，开发阶段购买将会获得超值优惠！不要错过哦！
            </motion.p>
            
            <div className="space-y-6">
              {upcomingCourses.map((course, index) => (
                <CourseCard 
                  key={course.id}
                  course={course}
                  timeLeft={timeLeft[course.id]}
                  isUrgent={isUrgent(course.id)}
                  isHighlighted={isHighlighted(course.id)}
                  index={index}
                />
              ))}
            </div>
            
            <motion.div 
              className="mt-8 text-center"
              {...variants(0.6)}
            >
              <Link 
                href="/upcoming"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
              >
                查看全部开发中课程
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 