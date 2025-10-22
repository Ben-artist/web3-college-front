import {
  Award,
  BookOpen,
  Calendar,
  Clock,
  Download,
  Edit,
  GraduationCap,
  LogOut,
  Settings,
  Share2,
  Star,
  Target,
  Trophy,
  User,
  ArrowLeftRight,
  Wallet,
  Plus,
  Heart,
} from 'lucide-react'
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

// 模拟用户数据
const user = {
  name: 'Alice Chen',
  email: 'alice@example.com',
  avatar: '/api/placeholder/100/100',
  level: '高级学习者',
  joinDate: '2024年1月',
  totalCourses: 12,
  completedCourses: 8,
  certificates: 5,
  totalStudyTime: '156小时',
  lightCoins: 2500,
  ethBalance: 0.5,
  isTeacher: true, // 新增：是否为讲师
  achievements: [
    {
      name: '区块链专家',
      icon: <Trophy className="h-5 w-5" />,
      earned: '2024-03-15',
    },
    {
      name: '智能合约大师',
      icon: <Award className="h-5 w-5" />,
      earned: '2024-02-28',
    },
    {
      name: 'DeFi先锋',
      icon: <Star className="h-5 w-5" />,
      earned: '2024-02-10',
    },
  ],
}

const enrolledCourses = [
  {
    id: 1,
    title: '区块链基础入门',
    progress: 100,
    status: '已完成',
    lastAccessed: '2024-03-20',
  },
  {
    id: 2,
    title: '智能合约开发实战',
    progress: 75,
    status: '进行中',
    lastAccessed: '2024-03-22',
  },
  {
    id: 3,
    title: 'DeFi协议深度解析',
    progress: 30,
    status: '进行中',
    lastAccessed: '2024-03-21',
  },
]

const recentActivity = [
  {
    type: 'course_completed',
    title: '完成课程：区块链基础入门',
    time: '2天前',
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    type: 'certificate_earned',
    title: '获得证书：区块链专家',
    time: '1周前',
    icon: <Award className="h-4 w-4" />,
  },
  {
    type: 'course_started',
    title: '开始学习：智能合约开发实战',
    time: '2周前',
    icon: <Target className="h-4 w-4" />,
  },
]

// 收藏的课程
const favoriteCourses = [
  {
    id: 1,
    title: 'DeFi协议深度解析',
    instructor: 'Carol Johnson',
    duration: '10 周',
    students: 650,
    rating: 4.7,
    price: '199 USDC',
    level: '高级',
    category: 'DeFi',
    image: '/api/placeholder/400/250',
    favoritedAt: '2024-03-15',
  },
  {
    id: 2,
    title: 'NFT市场与创作',
    instructor: 'David Lee',
    duration: '6 周',
    students: 1100,
    rating: 4.6,
    price: '149 USDC',
    level: '中级',
    category: 'NFT',
    image: '/api/placeholder/400/250',
    favoritedAt: '2024-03-10',
  },
  {
    id: 3,
    title: 'Web3安全最佳实践',
    instructor: 'Eva Wang',
    duration: '8 周',
    students: 420,
    rating: 4.9,
    price: '299 USDC',
    level: '高级',
    category: '安全',
    image: '/api/placeholder/400/250',
    favoritedAt: '2024-03-05',
  },
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      {/* Profile Header */}
      <section className="container py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Avatar */}
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <User className="h-12 w-12 text-primary" />
                </div>

                {/* User Info */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                  <p className="text-muted-foreground mb-4">{user.email}</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                    <Badge variant="secondary">{user.level}</Badge>
                    <Badge variant="outline">加入于 {user.joinDate}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground justify-center md:justify-start">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{user.totalCourses} 门课程</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4" />
                      <span>{user.certificates} 个证书</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{user.totalStudyTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>{user.lightCoins} 一灯币</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Wallet className="h-4 w-4" />
                      <span>{user.ethBalance} ETH</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col space-y-2">
                  <Button>
                    <Edit className="mr-2 h-4 w-4" />
                    编辑资料
                  </Button>
                  <Button variant="outline">
                    <Settings className="mr-2 h-4 w-4" />
                    设置
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="container pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Enrolled Courses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>我的课程</span>
                </CardTitle>
                <CardDescription>
                  继续学习，完成你的Web3学习之旅
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {enrolledCourses.map((course) => (
                  <div
                    key={course.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{course.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>进度: {course.progress}%</span>
                        <span>最后访问: {course.lastAccessed}</span>
                      </div>
                      <div className="mt-2 w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={
                          course.status === '已完成' ? 'default' : 'secondary'
                        }
                      >
                        {course.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        继续学习
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Favorite Courses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <span>我的收藏</span>
                </CardTitle>
                <CardDescription>
                  你收藏的课程，随时可以开始学习
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {favoriteCourses.map((course) => (
                    <div
                      key={course.id}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-16 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm mb-1 truncate">
                            {course.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mb-2">
                            {course.instructor}
                          </p>
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {course.level}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {course.category}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span>{course.rating}</span>
                              <span>•</span>
                              <span>{course.students}人</span>
                            </div>
                            <span className="text-xs font-medium text-primary">
                              {course.price}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          收藏于 {course.favoritedAt}
                        </span>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="text-xs">
                            开始学习
                          </Button>
                          <Button variant="ghost" size="sm" className="text-xs">
                            <Heart className="h-3 w-3 fill-red-500 text-red-500" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {favoriteCourses.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Heart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>还没有收藏任何课程</p>
                    <p className="text-sm">去课程页面发现感兴趣的课程吧</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>最近活动</span>
                </CardTitle>
                <CardDescription>你的学习动态和成就</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5" />
                  <span>成就徽章</span>
                </CardTitle>
                <CardDescription>你的学习成就</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {user.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {achievement.icon}
                    </div>
                    <div>
                      <p className="font-medium">{achievement.name}</p>
                      <p className="text-sm text-muted-foreground">
                        获得于 {achievement.earned}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Wallet Balance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wallet className="h-5 w-5" />
                  <span>钱包余额</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-yellow-400/10 to-orange-400/10">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-600" />
                    <span className="text-sm text-muted-foreground">一灯币</span>
                  </div>
                  <span className="font-semibold">{user.lightCoins}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-blue-400/10 to-purple-400/10">
                  <div className="flex items-center space-x-2">
                    <Wallet className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-muted-foreground">ETH</span>
                  </div>
                  <span className="font-semibold">{user.ethBalance}</span>
                </div>
                <Button className="w-full" variant="outline" size="sm">
                  <ArrowLeftRight className="mr-2 h-4 w-4" />
                  兑换代币
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>学习统计</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    完成课程
                  </span>
                  <span className="font-semibold">{user.completedCourses}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    学习时长
                  </span>
                  <span className="font-semibold">{user.totalStudyTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    获得证书
                  </span>
                  <span className="font-semibold">{user.certificates}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">完成率</span>
                  <span className="font-semibold">
                    {Math.round(
                      (user.completedCourses / user.totalCourses) * 100
                    )}
                    %
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>快速操作</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* 讲师专用功能 */}
                {user.isTeacher ? (
                  <Button className="w-full" variant="default" asChild>
                    <a href="/create-course">
                      <Plus className="mr-2 h-4 w-4" />
                      创建课程
                    </a>
                  </Button>
                ) : (
                  <Button className="w-full" variant="outline" asChild>
                    <a href="/teacher">
                      <GraduationCap className="mr-2 h-4 w-4" />
                      成为讲师
                    </a>
                  </Button>
                )}
                
                <Button className="w-full" variant="outline">
                  <ArrowLeftRight className="mr-2 h-4 w-4" />
                  代币兑换
                </Button>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  下载证书
                </Button>
                <Button className="w-full" variant="outline">
                  <Share2 className="mr-2 h-4 w-4" />
                  分享成就
                </Button>
                <Button className="w-full" variant="outline">
                  <BookOpen className="mr-2 h-4 w-4" />
                  浏览课程
                </Button>
                <Button className="w-full" variant="destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  退出登录
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
