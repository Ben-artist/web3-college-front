'use client'

import {
  ArrowRight,
  BookOpen,
  Clock,
  Filter,
  Search,
  Star,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

// 模拟课程数据
const courses = [
  {
    id: 1,
    title: '区块链基础入门',
    description: '从零开始学习区块链技术，了解分布式账本、共识机制等核心概念。',
    instructor: 'Dr. Alice Chen',
    duration: '8 周',
    students: 1250,
    rating: 4.8,
    price: '免费',
    level: '初级',
    category: '区块链',
    image: '/api/placeholder/400/250',
  },
  {
    id: 2,
    title: '智能合约开发实战',
    description: '学习Solidity语言，掌握智能合约的编写、部署和测试。',
    instructor: 'Bob Smith',
    duration: '12 周',
    students: 890,
    rating: 4.9,
    price: '299 USDC',
    level: '中级',
    category: '开发',
    image: '/api/placeholder/400/250',
  },
  {
    id: 3,
    title: 'DeFi协议深度解析',
    description: '深入理解去中心化金融协议，包括AMM、借贷、衍生品等。',
    instructor: 'Carol Johnson',
    duration: '10 周',
    students: 650,
    rating: 4.7,
    price: '199 USDC',
    level: '高级',
    category: 'DeFi',
    image: '/api/placeholder/400/250',
  },
  {
    id: 4,
    title: 'NFT市场与创作',
    description: '了解NFT生态系统，学习NFT的创作、营销和交易策略。',
    instructor: 'David Lee',
    duration: '6 周',
    students: 1100,
    rating: 4.6,
    price: '149 USDC',
    level: '中级',
    category: 'NFT',
    image: '/api/placeholder/400/250',
  },
  {
    id: 5,
    title: 'Web3安全最佳实践',
    description: '学习Web3安全防护，避免常见的安全漏洞和攻击。',
    instructor: 'Eve Wilson',
    duration: '8 周',
    students: 750,
    rating: 4.9,
    price: '249 USDC',
    level: '高级',
    category: '安全',
    image: '/api/placeholder/400/250',
  },
  {
    id: 6,
    title: 'DAO治理与参与',
    description: '了解去中心化自治组织，学习参与和建设DAO的方法。',
    instructor: 'Frank Brown',
    duration: '5 周',
    students: 420,
    rating: 4.5,
    price: '99 USDC',
    level: '中级',
    category: '治理',
    image: '/api/placeholder/400/250',
  },
]

const categories = ['全部', '区块链', '开发', 'DeFi', 'NFT', '安全', '治理']
const difficultyLevels = ['全部', '初级', '中级', '高级']
const sortOptions = [
  { value: 'popular', label: '最多人购买' },
  { value: 'rating', label: '评分最高' },
  { value: 'newest', label: '最新发布' },
  { value: 'price-low', label: '价格从低到高' },
  { value: 'price-high', label: '价格从高到低' },
]

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [selectedDifficulty, setSelectedDifficulty] = useState('全部')
  const [sortBy, setSortBy] = useState('popular')
  const [filteredCourses, setFilteredCourses] = useState(courses)

  const applyFilters = () => {
    let filtered = [...courses]

    // 按分类筛选
    if (selectedCategory !== '全部') {
      filtered = filtered.filter(course => course.category === selectedCategory)
    }

    // 按难度筛选
    if (selectedDifficulty !== '全部') {
      filtered = filtered.filter(course => course.level === selectedDifficulty)
    }

    // 按排序选项排序
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => b.students - a.students)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        // 假设按ID排序，ID越大越新
        filtered.sort((a, b) => b.id - a.id)
        break
      case 'price-low':
        filtered.sort((a, b) => {
          const priceA = a.price === '免费' ? 0 : parseInt(a.price)
          const priceB = b.price === '免费' ? 0 : parseInt(b.price)
          return priceA - priceB
        })
        break
      case 'price-high':
        filtered.sort((a, b) => {
          const priceA = a.price === '免费' ? 0 : parseInt(a.price)
          const priceB = b.price === '免费' ? 0 : parseInt(b.price)
          return priceB - priceA
        })
        break
    }

    setFilteredCourses(filtered)
  }

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    setTimeout(applyFilters, 0)
  }

  const handleDifficultyFilter = (difficulty: string) => {
    setSelectedDifficulty(difficulty)
    setTimeout(applyFilters, 0)
  }

  const handleSortChange = (sort: string) => {
    setSortBy(sort)
    setTimeout(applyFilters, 0)
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      {/* Hero Section */}
      <section className="container py-12">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            探索 Web3 课程
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            从基础到高级，从理论到实践，开启你的区块链学习之旅
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container pb-8">
        <div className="space-y-6">
          {/* 分类筛选 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">课程分类</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category 
                      ? 'bg-primary text-primary-foreground shadow-md' 
                      : 'hover:bg-primary/10 hover:border-primary/50'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* 难度筛选 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">难度等级</h3>
            <div className="flex flex-wrap gap-3">
              {difficultyLevels.map((difficulty) => (
                <Button
                  key={difficulty}
                  variant={selectedDifficulty === difficulty ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleDifficultyFilter(difficulty)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    selectedDifficulty === difficulty 
                      ? 'bg-primary text-primary-foreground shadow-md' 
                      : 'hover:bg-primary/10 hover:border-primary/50'
                  }`}
                >
                  {difficulty}
                </Button>
              ))}
            </div>
          </div>

          {/* 排序选项 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">排序方式</h3>
            <div className="flex flex-wrap gap-3">
              {sortOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={sortBy === option.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleSortChange(option.value)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    sortBy === option.value 
                      ? 'bg-primary text-primary-foreground shadow-md' 
                      : 'hover:bg-primary/10 hover:border-primary/50'
                  }`}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              className="group hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-primary/50" />
                  </div>
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {course.category}
                  </Badge>
                  <Badge className="absolute top-4 right-4" variant="outline">
                    {course.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <CardTitle className="text-lg line-clamp-2">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="mt-2 line-clamp-2">
                      {course.description}
                    </CardDescription>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        讲师: {course.instructor}
                      </p>
                      <p className="text-lg font-semibold text-primary">
                        {course.price}
                      </p>
                    </div>
                    <Link href={`/courses/${course.id}`}>
                      <Button size="sm">
                        查看详情
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            加载更多课程
          </Button>
        </div>
      </section>
    </div>
  )
}
