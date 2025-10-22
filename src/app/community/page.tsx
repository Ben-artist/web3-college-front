import {
  Award,
  BookOpen,
  Heart,
  MessageCircle,
  Share2,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// 模拟社区数据
const posts = [
  {
    id: 1,
    title: '智能合约安全审计最佳实践分享',
    content:
      '最近在学习智能合约安全审计，总结了一些最佳实践，希望对大家有帮助...',
    author: {
      name: 'Alice Chen',
      avatar: '/api/placeholder/40/40',
      level: '专家',
    },
    category: '技术分享',
    likes: 42,
    comments: 8,
    time: '2小时前',
    tags: ['智能合约', '安全', '审计'],
  },
  {
    id: 2,
    title: 'DeFi协议深度解析：Uniswap V3的数学原理',
    content:
      'Uniswap V3引入了集中流动性概念，今天来详细解析其数学原理和实现机制...',
    author: {
      name: 'Bob Smith',
      avatar: '/api/placeholder/40/40',
      level: '高级',
    },
    category: '技术教程',
    likes: 38,
    comments: 12,
    time: '4小时前',
    tags: ['DeFi', 'Uniswap', '数学'],
  },
  {
    id: 3,
    title: 'Web3学习路径推荐 - 从零到精通',
    content: '很多朋友问我如何开始学习Web3，我整理了一份完整的学习路径...',
    author: {
      name: 'Carol Johnson',
      avatar: '/api/placeholder/40/40',
      level: '导师',
    },
    category: '学习指南',
    likes: 56,
    comments: 15,
    time: '6小时前',
    tags: ['学习路径', 'Web3', '入门'],
  },
  {
    id: 4,
    title: 'NFT项目分析：如何识别优质项目',
    content: 'NFT市场鱼龙混杂，如何识别有潜力的项目？分享一些分析方法...',
    author: {
      name: 'David Lee',
      avatar: '/api/placeholder/40/40',
      level: '中级',
    },
    category: '投资分析',
    likes: 29,
    comments: 6,
    time: '8小时前',
    tags: ['NFT', '投资', '分析'],
  },
]

const categories = [
  { name: '全部', count: 156 },
  { name: '技术分享', count: 45 },
  { name: '技术教程', count: 32 },
  { name: '学习指南', count: 28 },
  { name: '投资分析', count: 23 },
  { name: '项目讨论', count: 18 },
  { name: '问答求助', count: 10 },
]

const trendingTopics = [
  { name: '智能合约安全', posts: 23 },
  { name: 'DeFi协议', posts: 18 },
  { name: 'NFT市场', posts: 15 },
  { name: 'DAO治理', posts: 12 },
  { name: 'Layer2扩容', posts: 9 },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      {/* Hero Section */}
      <section className="container py-12">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Web3 学习社区
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            与全球Web3学习者交流，分享知识，共同成长
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              发布讨论
            </Button>
            <Button size="lg" variant="outline">
              <Users className="mr-2 h-5 w-5" />
              加入群组
            </Button>
          </div>
        </div>
      </section>

      <div className="container pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category.name}
                  variant={category.name === '全部' ? 'default' : 'secondary'}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                >
                  {category.name} ({category.count})
                </Badge>
              ))}
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Post Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <BookOpen className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold">{post.author.name}</p>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className="text-xs">
                                {post.author.level}
                              </Badge>
                              <span className="text-sm text-muted-foreground">
                                {post.time}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>

                      {/* Post Content */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-2">
                          {post.content}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Post Actions */}
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center space-x-6">
                          <Button variant="ghost" size="sm">
                            <Heart className="mr-2 h-4 w-4" />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            {post.comments}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="mr-2 h-4 w-4" />
                            分享
                          </Button>
                        </div>
                        <Button variant="outline" size="sm">
                          查看详情
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg">
                加载更多讨论
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>社区统计</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    活跃用户
                  </span>
                  <span className="font-semibold">12,456</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    今日讨论
                  </span>
                  <span className="font-semibold">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    本周新用户
                  </span>
                  <span className="font-semibold">1,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    解决问题
                  </span>
                  <span className="font-semibold">892</span>
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>热门话题</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div
                    key={topic.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium text-muted-foreground">
                        {index + 1}
                      </span>
                      <span className="text-sm">{topic.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {topic.posts}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>快速操作</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  发布问题
                </Button>
                <Button className="w-full" variant="outline">
                  <BookOpen className="mr-2 h-4 w-4" />
                  分享教程
                </Button>
                <Button className="w-full" variant="outline">
                  <Award className="mr-2 h-4 w-4" />
                  展示项目
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
