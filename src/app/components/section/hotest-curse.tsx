'use client'

import { motion } from 'framer-motion'
import { variants } from './variants'
import Link from 'next/link'
import ParticleBackground from './ParticleBackground'

interface CourseCardProps {
  title: string
  description: string
  originalPrice: number
  discountPrice: number
  badge?: string
  id: string
  url?: string
}

const CourseCard = ({ title, description, originalPrice, discountPrice, url = '', badge, id }: CourseCardProps) => {
  // 生成随机颜色
  const getRandomColor = () => {
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-yellow-500',
      'bg-purple-500', 'bg-pink-500', 'bg-indigo-500',
      'bg-red-400', 'bg-teal-500', 'bg-orange-500'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const bgColor = getRandomColor();

  return (
    <Link href={url || `/${id}`}>
      <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        {...variants(0.2)}
      >
        <div className="relative">
          <ParticleBackground color={bgColor}>
            <span className="text-white font-bold text-xl">{title}</span>
          </ParticleBackground>
          {badge && (
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
              {badge}
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex items-center">
            <span className="text-red-500 font-bold text-xl">¥{discountPrice}</span>
            <span className="text-gray-400 line-through ml-2 text-sm">¥{originalPrice}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}


const hotCourses = [
  {
    id: "",
    url: 'https://xinyuzone.cn/column/1818097927437131776',
    title: "JavaScript 核心进阶",
    description: "只给你地道的前端进阶思维",
    originalPrice: 149,
    discountPrice: 89,
    badge: "Hot"
  },
  {
    id: "r19base",
    title: "React 19 . 基础",
    description: "React19 为开发者带来了新的开发理念",
    originalPrice: 100,
    discountPrice: 40,
    badge: "Hot"
  },
  {
    id: "r19plus",
    title: "React 19 架构 . 尊享",
    description: "掌握一套高阶代码架构",
    originalPrice: 1000,
    discountPrice: 648,
    badge: "Hot"
  }
]

export default function HotestCurse() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          {...variants(0)}
        >
          热门课程
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotCourses.map((course, index) => (
            <CourseCard
              key={index}
              id={course.id}
              url={course.url}
              title={course.title}
              description={course.description}
              originalPrice={course.originalPrice}
              discountPrice={course.discountPrice}
              badge={course.badge}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
