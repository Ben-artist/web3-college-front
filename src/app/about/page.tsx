import {
  ArrowRight,
  Award,
  BookOpen,
  Github,
  Globe,
  Heart,
  Lightbulb,
  Linkedin,
  Mail,
  Shield,
  Target,
  Twitter,
  Users,
  Zap,
} from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const team = [
  {
    name: 'Dr. Alice Chen',
    role: '创始人 & CEO',
    bio: '区块链技术专家，拥有15年技术经验',
    avatar: '/api/placeholder/150/150',
  },
  {
    name: 'Bob Smith',
    role: 'CTO',
    bio: '智能合约开发专家，前以太坊核心开发者',
    avatar: '/api/placeholder/150/150',
  },
  {
    name: 'Carol Johnson',
    role: '教育总监',
    bio: '在线教育专家，致力于Web3教育普及',
    avatar: '/api/placeholder/150/150',
  },
  {
    name: 'David Lee',
    role: '产品经理',
    bio: '用户体验专家，专注于产品创新',
    avatar: '/api/placeholder/150/150',
  },
]

const values = [
  {
    icon: <Target className="h-8 w-8" />,
    title: '使命驱动',
    description: '让每个人都能轻松学习Web3技术，推动区块链教育普及',
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: '创新精神',
    description: '持续探索新技术，为用户提供最前沿的学习体验',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: '社区优先',
    description: '构建开放的学习社区，促进知识共享和协作',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: '安全可靠',
    description: '确保学习环境安全，保护用户隐私和数据',
  },
]

const stats = [
  { label: '注册用户', value: '50,000+', icon: <Users className="h-6 w-6" /> },
  { label: '课程数量', value: '200+', icon: <BookOpen className="h-6 w-6" /> },
  { label: '完成证书', value: '15,000+', icon: <Award className="h-6 w-6" /> },
  { label: '覆盖国家', value: '80+', icon: <Globe className="h-6 w-6" /> },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      {/* Hero Section */}
      <section className="container py-12 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <Badge variant="secondary" className="px-4 py-2">
            <Heart className="mr-2 h-4 w-4" />
            关于 Web3 College
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            构建去中心化教育的
            <span className="text-primary">未来</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Web3 College 致力于为全球学习者提供高质量的区块链和Web3教育，
            通过创新的学习方式和强大的社区支持，帮助每个人掌握未来技术。
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">我们的使命</h2>
            <p className="text-lg text-muted-foreground">
              在Web3时代，教育不应该有门槛。我们相信每个人都有权利学习最前沿的技术，
              无论他们的背景、地理位置或经济状况如何。
            </p>
            <p className="text-lg text-muted-foreground">
              通过去中心化的学习平台，我们正在构建一个更加开放、公平和创新的教育生态系统，
              让知识真正属于每一个人。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                加入我们
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                了解更多
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <Zap className="h-24 w-24 text-primary/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container py-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">我们的价值观</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            这些核心价值观指导着我们的每一个决策和行动
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container py-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">我们的团队</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            由来自全球的顶尖专家组成的团队，致力于推动Web3教育发展
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="h-24 w-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-12">
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">联系我们</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              有任何问题或建议？我们很乐意听到你的声音
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="outline">
                <Mail className="mr-2 h-5 w-5" />
                hello@web3college.com
              </Button>
              <Button size="lg" variant="outline">
                <Twitter className="mr-2 h-5 w-5" />
                @Web3College
              </Button>
            </div>
            <div className="flex justify-center space-x-4">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
