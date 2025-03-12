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
  imageUrl: string
  badge?: string
  id: string
}

const CourseCard = ({ title, description, originalPrice, discountPrice, imageUrl, badge, id }: CourseCardProps) => {
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
    <Link href={`/courses/${id}`}>
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

export default function HotestCurse() {
  const hotCourses = [
    {
      id: "react-fullstack",
      title: "React 全栈开发",
      description: "从零开始学习 React 并构建现代化 Web 应用",
      originalPrice: 399,
      discountPrice: 199,
      imageUrl: "/images/courses/react.jpg",
      badge: "热门"
    },
    {
      id: "python-data",
      title: "Python 数据分析",
      description: "掌握 Python 数据分析与可视化技能",
      originalPrice: 499,
      discountPrice: 299,
      imageUrl: "/images/courses/python.jpg",
      badge: "促销"
    },
    {
      id: "uiux-design",
      title: "UI/UX 设计基础",
      description: "学习用户界面与用户体验设计原则",
      originalPrice: 349,
      discountPrice: 249,
      imageUrl: "/images/courses/design.jpg"
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
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
              title={course.title}
              description={course.description}
              originalPrice={course.originalPrice}
              discountPrice={course.discountPrice}
              imageUrl={course.imageUrl}
              badge={course.badge}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
