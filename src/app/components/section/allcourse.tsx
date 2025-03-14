'use client'

import React from 'react'

interface CourseCard {
  id: string
  title: string
  description: string
  currentPrice: number
  originalPrice: number
  imageUrl: string
  tags: string[]
  updatedAt: string
}

const AllCourses: React.FC = () => {
  // 模拟课程数据
  const courses: CourseCard[] = [
    {
      id: '1',
      title: 'React完全指南',
      description: '从零开始学习React框架',
      currentPrice: 199,
      originalPrice: 299,
      imageUrl: '/course-images/react.jpg',
      tags: ['促销', '最新'],
      updatedAt: '2024-01-20'
    },
    {
      id: '2',
      title: 'Vue.js实战教程',
      description: 'Vue.js框架开发实战',
      currentPrice: 159,
      originalPrice: 259,
      imageUrl: '/course-images/vue.jpg',
      tags: ['活动', '热门'],
      updatedAt: '2024-01-18'
    },
    {
      id: '3',
      title: 'TypeScript入门到精通',
      description: '系统学习TypeScript开发',
      currentPrice: 179,
      originalPrice: 279,
      imageUrl: '/course-images/typescript.jpg',
      tags: ['最新'],
      updatedAt: '2024-01-15'
    },
    {
      id: '4',
      title: 'Next.js全栈开发',
      description: '使用Next.js构建现代web应用',
      currentPrice: 229,
      originalPrice: 329,
      imageUrl: '/course-images/nextjs.jpg',
      tags: ['促销', '热门'],
      updatedAt: '2024-01-12'
    },
    {
      id: '5',
      title: 'Node.js后端开发',
      description: 'Node.js服务端开发实践',
      currentPrice: 189,
      originalPrice: 289,
      imageUrl: '/course-images/nodejs.jpg',
      tags: ['活动'],
      updatedAt: '2024-01-10'
    }
  ]
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">全部课程</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              {/* 使用浅色背景和几何图形装饰 */}
              <div className="absolute inset-0 bg-blue-50">
                <div className="absolute right-0 top-0 w-24 h-24 bg-blue-100 rounded-full -mr-12 -mt-12"></div>
                <div className="absolute left-4 bottom-4 w-16 h-16 bg-purple-100 rotate-45"></div>
                <div className="absolute right-8 bottom-8 w-12 h-12 bg-green-100 rounded-lg"></div>
              </div>

              {/* 课程标题装饰文字 */}
              <div className="absolute bottom-4 right-4 text-4xl font-bold text-blue-100/50">
                {course.title.charAt(0)}
              </div>

              <div className="absolute top-2 left-2 flex gap-2">
                {course.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-semibold text-white rounded-full"
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllCourses
