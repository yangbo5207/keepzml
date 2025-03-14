'use client'

import Link from 'next/link'
import React from 'react'

interface CourseCard {
  id: string
  title: string
  description: string
  currentPrice: number
  originalPrice: number
  tags: string[]
  updatedAt: string
}

const AllCourses: React.FC = () => {
  // 模拟课程数据
  const courses: CourseCard[] = [
    {
      id: 'r19base',
      title: 'React19 . 基础版',
      description: '新的 React 开发思维',
      currentPrice: 99,
      originalPrice: 40,
      tags: ['热门', '最新'],
      updatedAt: '2025-01-20'
    },
    {
      id: 'r19plus',
      title: 'React19 . 尊享版',
      description: '掌握一套成熟的代码架构',
      currentPrice: 1000,
      originalPrice: 400,
      tags: ['热门'],
      updatedAt: '2025-02-18'
    },
    {
      id: 'zustand',
      title: 'Zustand',
      description: 'React状态管理库',
      currentPrice: 200,
      originalPrice: 9.9,
      tags: ['普通'],
      updatedAt: '2025-01-15'
    },
    {
      id: 'reactzm',
      title: 'React 知命境',
      description: '最好的 React 入门方式',
      currentPrice: 299,
      originalPrice: 90,
      tags: ['促销', '热门'],
      updatedAt: '2025-01-12'
    },
    {
      id: 'supercss',
      title: '超级 CSS',
      description: 'CSS 在实践中的运用',
      currentPrice: 1000,
      originalPrice: 200,
      tags: ['活动'],
      updatedAt: '2025-01-10'
    },
    {
      id: 'r19lightning',
      title: 'React 19 速成法',
      description: '短期内快速学会 React 19',
      currentPrice: 1000,
      originalPrice: 200,
      tags: ['活动'],
      updatedAt: '2025-01-10'
    }
  ]
  return (
    <div className='bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20'>
      <div className="container mx-auto px-4 py-10 md:py-20">
        <h2 className="text-2xl font-bold mb-6">全部课程</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <Link href={`/${course.id}`} key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 flex items-center justify-center">
                {/* 课程标题装饰文字 */}
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 z-10">
                  {course.title}
                </div>

                {/* 使用浅色背景和几何图形装饰 */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50">
                  <div className="absolute right-0 top-0 w-24 h-24 bg-gray-200/50 dark:bg-gray-700/50 rounded-full -mr-12 -mt-12 backdrop-blur-sm"></div>
                  <div className="absolute left-4 bottom-4 w-16 h-16 bg-gray-200/50 dark:bg-gray-700/50 rotate-45 backdrop-blur-sm"></div>
                  <div className="absolute right-8 bottom-8 w-12 h-12 bg-gray-200/50 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm"></div>
                </div>


                <div className="absolute top-3 left-3 flex gap-2">
                  {course.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-semibold text-white rounded-sm"
                      style={{
                        backgroundColor:
                          tag === '促销' ? '#ff4d4f' :
                            tag === '最新' ? '#52c41a' :
                              tag === '活动' ? '#1890ff' :
                                tag === '热门' ? '#fa8c16' : '#666'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-red-500">
                      ¥{course.currentPrice}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ¥{course.originalPrice}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">
                    更新于 {course.updatedAt}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllCourses
