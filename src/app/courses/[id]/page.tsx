import {
  ArrowLeft,
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  Heart,
  Play,
  Share2,
  Star,
  Users,
} from 'lucide-react'
import Link from 'next/link'
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

// 模拟课程详情数据
const course = {
  id: 1,
  title: '区块链基础入门',
  description:
    '从零开始学习区块链技术，了解分布式账本、共识机制等核心概念。这门课程将带你深入了解区块链的工作原理，掌握基础概念，为后续学习打下坚实基础。',
  instructor: {
    name: 'Dr. Alice Chen',
    title: '区块链专家',
    avatar: '/api/placeholder/100/100',
    bio: '拥有10年区块链研究经验，曾在多家知名公司担任技术顾问。',
  },
  duration: '8 周',
  students: 1250,
  rating: 4.8,
  price: '免费',
  level: '初级',
  category: '区块链',
  image: '/api/placeholder/800/400',
  whatYouWillLearn: [
    '理解区块链的基本概念和原理',
    '掌握分布式账本技术',
    '了解共识机制的工作原理',
    '学习加密货币的基础知识',
    '掌握区块链安全最佳实践',
  ],
  requirements: [
    '基本的计算机操作知识',
    '对新技术的好奇心',
    '每周3-5小时的学习时间',
  ],
  modules: [
    {
      id: 1,
      title: '区块链概述',
      duration: '2小时',
      lessons: 5,
      completed: true,
    },
    {
      id: 2,
      title: '分布式账本技术',
      duration: '3小时',
      lessons: 7,
      completed: true,
    },
    {
      id: 3,
      title: '共识机制',
      duration: '2.5小时',
      lessons: 6,
      completed: false,
    },
    {
      id: 4,
      title: '加密货币基础',
      duration: '2小时',
      lessons: 4,
      completed: false,
    },
    {
      id: 5,
      title: '区块链安全',
      duration: '1.5小时',
      lessons: 3,
      completed: false,
    },
  ],
}

export default function CourseDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      {/* Back Button */}
      <div className="container pt-8">
        <Link href="/courses">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回课程列表
          </Button>
        </Link>
      </div>

      {/* Course Hero */}
      <section className="container pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary">{course.category}</Badge>
              <h1 className="text-4xl font-bold tracking-tight">
                {course.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {course.description}
              </p>
            </div>

            {/* Course Stats */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>{course.students} 学生</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{course.rating} 评分</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span>{course.level}</span>
              </div>
            </div>

            {/* Course Image */}
            <div className="relative overflow-hidden rounded-lg">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <BookOpen className="h-24 w-24 text-primary/50" />
              </div>
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-white/20 hover:bg-white/30 text-white"
                >
                  <Play className="mr-2 h-5 w-5" />
                  预览课程
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enrollment Card */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">
                      {course.price}
                    </p>
                    <p className="text-sm text-muted-foreground">一次性付费</p>
                  </div>
                  <Button className="w-full" size="lg">
                    立即报名
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <Heart className="mr-2 h-4 w-4" />
                      收藏
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="mr-2 h-4 w-4" />
                      分享
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instructor Card */}
            <Card>
              <CardHeader>
                <CardTitle>讲师介绍</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{course.instructor.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {course.instructor.title}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {course.instructor.bio}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="container pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>你将学到什么</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {course.whatYouWillLearn.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>课程要求</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {course.requirements.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Course Modules */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>课程大纲</CardTitle>
                <CardDescription>
                  {course.modules.length} 个模块，共{' '}
                  {course.modules.reduce(
                    (acc, module) => acc + module.lessons,
                    0
                  )}{' '}
                  节课
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {course.modules.map((module, index) => (
                  <div
                    key={module.id}
                    className="flex items-center justify-between p-3 rounded-lg border"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        {module.completed ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <span className="text-sm font-medium">
                            {index + 1}
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{module.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {module.duration} • {module.lessons} 节课
                        </p>
                      </div>
                    </div>
                    {module.completed && (
                      <Badge variant="secondary">已完成</Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
