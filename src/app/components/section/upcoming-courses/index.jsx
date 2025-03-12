'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AlertCircle } from 'lucide-react'
import { variants } from '../variants'
import CourseCard from './CourseCard'
import { useCountdown } from './hooks'

export default function UpcomingCoursesBanner() {
  const upcomingCourses = [
    {
      id: 'nextjs-master',
      title: 'Next.js 全栈开发实战',
      releaseDate: '2023-06-15',
      progress: 75,
      articles: 42,
      originalPrice: 399,
      promoPrice: 299,
      promoEndsAt: '2023-05-30T23:59:59'
    },
    {
      id: 'typescript-pro',
      title: 'TypeScript 高级进阶',
      releaseDate: '2023-07-01',
      progress: 60,
      articles: 36,
      originalPrice: 349,
      promoPrice: 249,
      promoEndsAt: '2023-06-15T23:59:59'
    },
    {
      id: 'react-native-app',
      title: 'React Native 移动应用开发',
      releaseDate: '2023-07-20',
      progress: 40,
      articles: 28,
      originalPrice: 499,
      promoPrice: 349,
      promoEndsAt: '2023-06-30T23:59:59'
    }
  ];

  const { timeLeft, isUrgent } = useCountdown(upcomingCourses);
  
  // 添加 isHighlighted 函数
  const isHighlighted = (courseId) => {
    // 这里可以根据需要实现高亮逻辑，例如特定课程ID或其他条件
    return courseId === 'nextjs-master'; // 示例：只高亮 Next.js 课程
  };

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
                即将上线的课程
              </motion.h2>
            </div>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-8"
              {...variants(0.2)}
            >
              以下课程正在紧张开发中，敬请期待！预约即可获得上线优惠通知。
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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