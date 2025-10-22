'use client'

import {
  Award,
  BookOpen,
  CheckCircle,
  CheckCircle2,
  Clock,
  DollarSign,
  GraduationCap,
  Heart,
  Mail,
  MessageCircle,
  Send,
  Star,
  Target,
  TrendingUp,
  User,
  Users,
  Zap,
} from 'lucide-react'
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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MultiSelect } from '@/components/ui/multi-select'
import { AvatarUpload } from '@/components/ui/avatar-upload'
import { EmailVerification } from '@/components/ui/email-verification'

// 专业领域选项
const expertiseAreas = [
  { value: 'blockchain-basics', label: '区块链基础' },
  { value: 'smart-contracts', label: '智能合约开发' },
  { value: 'defi-protocols', label: 'DeFi协议' },
  { value: 'nft-development', label: 'NFT开发' },
  { value: 'web3-frontend', label: 'Web3前端开发' },
  { value: 'solidity', label: 'Solidity编程' },
  { value: 'ethereum', label: '以太坊生态' },
  { value: 'polygon', label: 'Polygon网络' },
  { value: 'layer2', label: 'Layer 2解决方案' },
  { value: 'dao-governance', label: 'DAO治理' },
  { value: 'cryptocurrency', label: '加密货币' },
  { value: 'trading-analysis', label: '交易分析' },
  { value: 'security-auditing', label: '安全审计' },
  { value: 'consensus-mechanisms', label: '共识机制' },
  { value: 'cross-chain', label: '跨链技术' },
]

// 表单数据类型
interface TeacherApplicationForm {
  avatar: string
  nickname: string
  email: string
  emailVerified: boolean
  selfIntroduction: string
  expertiseAreas: string[]
  teachingStyle: string
  experience: string
  motivation: string
  portfolio: string
  availability: string
  additionalInfo: string
}

// 老师申请要求
const requirements = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: '专业背景',
    description: '具备区块链、Web3或相关技术领域的专业知识',
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: '教学经验',
    description: '拥有在线教学或技术培训经验',
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: '沟通能力',
    description: '具备良好的沟通和表达能力',
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: '教学热情',
    description: '对Web3教育充满热情和责任感',
  },
]

// 老师权益
const benefits = [
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: '丰厚报酬',
    description: '根据课程质量和学生反馈获得相应报酬',
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: '个人品牌',
    description: '在Web3教育领域建立个人影响力和品牌',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: '社区认可',
    description: '成为Web3教育社区的重要贡献者',
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: '专业发展',
    description: '获得持续的专业发展和学习机会',
  },
]

// 申请流程
const applicationProcess = [
  {
    step: 1,
    title: '提交申请',
    description: '填写详细的申请表格和个人资料',
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    step: 2,
    title: '资格审核',
    description: '我们的团队将审核您的专业背景和经验',
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    step: 3,
    title: '正式加入',
    description: '通过评估后，正式成为Web3 College讲师',
    icon: <Star className="h-6 w-6" />,
  },
]

// 成功案例
const successStories = [
  {
    name: 'Dr. Alice Chen',
    role: '区块链专家讲师',
    courses: 15,
    students: 2500,
    rating: 4.9,
    quote: '在Web3 College教学让我能够将专业知识分享给更多学习者，同时也提升了自己的影响力。',
  },
  {
    name: 'Bob Smith',
    role: '智能合约开发讲师',
    courses: 12,
    students: 1800,
    rating: 4.8,
    quote: '这里的教学环境非常专业，学生们的学习热情也让我深受感染。',
  },
]

export default function TeacherPage() {
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<TeacherApplicationForm>({
    avatar: '',
    nickname: '',
    email: '',
    emailVerified: false,
    selfIntroduction: '',
    expertiseAreas: [],
    teachingStyle: '',
    experience: '',
    motivation: '',
    portfolio: '',
    availability: '',
    additionalInfo: '',
  })

  const handleInputChange = (field: keyof TeacherApplicationForm, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // 如果邮箱改变，重置验证状态
    if (field === 'email') {
      setFormData(prev => ({
        ...prev,
        emailVerified: false
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟提交过程
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setShowForm(false)
    // 这里可以添加成功提示
    alert('申请提交成功！我们会在3-5个工作日内联系您。')
  }

  const isFormValid = formData.nickname && 
    formData.email && 
    formData.emailVerified &&
    formData.selfIntroduction &&
    formData.expertiseAreas.length > 0 && 
    formData.teachingStyle && 
    formData.experience && 
    formData.motivation

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      {/* Hero Section */}
      <section className="container py-12 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <Badge variant="secondary" className="px-4 py-2">
            <Heart className="mr-2 h-4 w-4" />
            成为讲师
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            加入Web3教育的
            <span className="text-primary">精英团队</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            与我们一起构建去中心化教育的未来，分享您的专业知识，
            帮助全球学习者掌握Web3技术，同时获得丰厚的回报。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setShowForm(true)}>
              立即申请
              <GraduationCap className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => setShowForm(false)}>
              了解更多
              <BookOpen className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      {showForm && (
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-6 w-6" />
                  <span>讲师申请入口</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 头像上传 */}
                  <div className="space-y-2">
                    <Label>头像</Label>
                    <AvatarUpload
                      value={formData.avatar}
                      onChange={(value) => handleInputChange('avatar', value)}
                    />
                    <p className="text-sm text-muted-foreground">
                      上传您的个人头像，有助于学生认识您
                    </p>
                  </div>

                  {/* 昵称 */}
                  <div className="space-y-2">
                    <Label htmlFor="nickname">昵称 *</Label>
                    <Input
                      id="nickname"
                      placeholder="请输入您的昵称"
                      value={formData.nickname}
                      onChange={(e) => handleInputChange('nickname', e.target.value)}
                      required
                    />
                  </div>

                  {/* 邮箱地址 */}
                  <div className="space-y-2">
                    <Label htmlFor="email">邮箱地址 *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="请输入您的邮箱地址"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                    <p className="text-sm text-muted-foreground">
                      邮箱仅用于平台通知，不会公开显示
                    </p>
                  </div>

                  {/* 邮箱验证码组件 */}
                  {formData.email && (
                    <div className="space-y-2">
                      <div className="p-4 border rounded-lg bg-muted/50">
                        <EmailVerification
                          email={formData.email}
                          onVerified={(isVerified) => {
                            if (isVerified) {
                              setFormData(prev => ({
                                ...prev,
                                emailVerified: true
                              }))
                            }
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* 自我介绍 */}
                  <div className="space-y-2">
                    <Label htmlFor="selfIntroduction">自我介绍 *</Label>
                    <Textarea
                      id="selfIntroduction"
                      placeholder="请简单介绍一下自己，包括您的专业背景、教学理念和个人特色..."
                      value={formData.selfIntroduction}
                      onChange={(e) => handleInputChange('selfIntroduction', e.target.value)}
                      rows={4}
                      required
                    />
                    <p className="text-sm text-muted-foreground">
                      这是学生了解您的第一印象，请认真填写
                    </p>
                  </div>

                  {/* 专业领域 */}
                  <div className="space-y-2">
                    <Label>专业领域 *</Label>
                    <MultiSelect
                      options={expertiseAreas}
                      value={formData.expertiseAreas}
                      onChange={(value) => handleInputChange('expertiseAreas', value)}
                      placeholder="请选择您的专业领域（可多选）"
                    />
                    <p className="text-sm text-muted-foreground">
                      请选择您最擅长的Web3技术领域
                    </p>
                  </div>
                  {/* 提交按钮 */}
                  <div className="flex gap-4 pt-6">
                    <Button 
                      type="submit" 
                      disabled={!isFormValid || isSubmitting}
                      className="flex-1"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="mr-2 h-4 w-4 animate-spin" />
                          提交中...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          提交申请
                        </>
                      )}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setShowForm(false)}
                    >
                      取消
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Requirements Section */}
      <section className="container py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">申请要求</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我们寻找具有专业知识和教学热情的Web3专家
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {requirements.map((requirement, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4 text-primary">
                  {requirement.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{requirement.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {requirement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">讲师权益</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            成为Web3 College讲师，享受多重权益和成长机会
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4 text-primary">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Application Process Section */}
      <section className="container py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">申请流程</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            简单透明的申请流程，让您快速加入我们的讲师团队
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applicationProcess.map((process) => (
            <Card
              key={process.step}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                    {process.step}
                  </div>
                </div>
                <div className="flex justify-center mb-4 text-primary">
                  {process.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {process.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="container py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">成功案例</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            听听我们的讲师们分享他们的成功经验
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{story.name}</h3>
                    <p className="text-sm text-primary mb-2">{story.role}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <span>{story.courses} 门课程</span>
                      <span>{story.students} 名学生</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{story.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm italic text-muted-foreground">
                      "{story.quote}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Apply Now Section */}
      <section className="container py-12">
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-12 text-center">
            <div className="mx-auto max-w-2xl space-y-6">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">
                准备好成为Web3教育专家了吗？
              </h2>
              <p className="text-lg text-muted-foreground">
                加入我们的讲师团队，与全球顶尖的Web3专家一起，
                为下一代区块链开发者提供最优质的教育体验。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  立即申请成为讲师
                </Button>
                <Button size="lg" variant="outline">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  联系我们的团队
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}