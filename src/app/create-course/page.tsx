'use client'

import { useState } from 'react'
import { 
  BookOpen, 
  Upload, 
  Save, 
  X, 
  Plus,
  Trash2,
  Edit,
  Eye,
  Clock,
  Users,
  Star,
  DollarSign,
  Tag,
  FileText,
  Video,
  Image as ImageIcon,
  Link
} from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MultiSelect } from '@/components/ui/multi-select'
import { AvatarUpload } from '@/components/ui/avatar-upload'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// 课程分类选项
const courseCategories = [
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

// 难度等级选项
const difficultyLevels = [
  { value: 'beginner', label: '初级' },
  { value: 'intermediate', label: '中级' },
  { value: 'advanced', label: '高级' },
]

// 课程类型选项 - 已移除

// 课程表单数据类型
interface CourseFormData {
  title: string
  description: string
  thumbnail: string
  categories: string[]
  difficulty: string
  duration: string
  price: string
  tags: string[]
  objectives: string[]
  prerequisites: string[]
  targetAudience: string
  instructor: string
  language: string
  startDate: string
  endDate: string
  isPublished: boolean
}

export default function CreateCoursePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<CourseFormData>({
    title: '',
    description: '',
    thumbnail: '',
    categories: [],
    difficulty: '',
    duration: '',
    price: '',
    tags: [],
    objectives: [],
    prerequisites: [],
    targetAudience: '',
    instructor: 'Alice Chen', // 当前讲师
    language: '中文',
    startDate: '',
    endDate: '',
    isPublished: false,
  })

  const [newObjective, setNewObjective] = useState('')
  const [newPrerequisite, setNewPrerequisite] = useState('')
  const [newTag, setNewTag] = useState('')

  const handleInputChange = (field: keyof CourseFormData, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const addObjective = () => {
    if (newObjective.trim()) {
      setFormData(prev => ({
        ...prev,
        objectives: [...prev.objectives, newObjective.trim()]
      }))
      setNewObjective('')
    }
  }

  const removeObjective = (index: number) => {
    setFormData(prev => ({
      ...prev,
      objectives: prev.objectives.filter((_, i) => i !== index)
    }))
  }

  const addPrerequisite = () => {
    if (newPrerequisite.trim()) {
      setFormData(prev => ({
        ...prev,
        prerequisites: [...prev.prerequisites, newPrerequisite.trim()]
      }))
      setNewPrerequisite('')
    }
  }

  const removePrerequisite = (index: number) => {
    setFormData(prev => ({
      ...prev,
      prerequisites: prev.prerequisites.filter((_, i) => i !== index)
    }))
  }

  const addTag = () => {
    if (newTag.trim()) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }))
      setNewTag('')
    }
  }

  const removeTag = (index: number) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟提交过程
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    alert('课程创建成功！')
  }

  const isFormValid = formData.title && 
    formData.description && 
    formData.categories.length > 0 && 
    formData.difficulty && 
    formData.duration

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      {/* Page Header */}
      <section className="container py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-primary" />
                <span>创建课程</span>
              </h1>
              <p className="text-muted-foreground mt-2">
                创建您的Web3课程，分享专业知识
              </p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">
                <Eye className="mr-2 h-4 w-4" />
                预览
              </Button>
              <Button variant="outline">
                <Save className="mr-2 h-4 w-4" />
                保存草稿
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Form */}
      <section className="container pb-16">
        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 基本信息 */}
            <Card>
              <CardHeader>
                <CardTitle>基本信息</CardTitle>
                <CardDescription>
                  填写课程的基本信息，这些信息将展示给学习者
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 课程标题 */}
                <div className="space-y-2">
                  <Label htmlFor="title">课程标题 *</Label>
                  <Input
                    id="title"
                    placeholder="请输入课程标题"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    required
                  />
                </div>

                {/* 课程描述 */}
                <div className="space-y-2">
                  <Label htmlFor="description">课程描述 *</Label>
                  <Textarea
                    id="description"
                    placeholder="请详细描述课程内容、学习目标和价值"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={6}
                    required
                  />
                </div>

                {/* 课程封面 */}
                <div className="space-y-2">
                  <Label>课程封面</Label>
                  <AvatarUpload
                    value={formData.thumbnail}
                    onChange={(value) => handleInputChange('thumbnail', value)}
                  />
                  <p className="text-sm text-muted-foreground">
                    建议尺寸：1200x675px，支持JPG、PNG格式
                  </p>
                </div>

                {/* 课程分类和难度 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>课程分类 *</Label>
                    <MultiSelect
                      options={courseCategories}
                      value={formData.categories}
                      onChange={(value) => handleInputChange('categories', value)}
                      placeholder="请选择课程分类"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>难度等级 *</Label>
                    <MultiSelect
                      options={difficultyLevels}
                      value={formData.difficulty ? [formData.difficulty] : []}
                      onChange={(value) => handleInputChange('difficulty', value[0] || '')}
                      placeholder="请选择难度等级"
                    />
                  </div>
                </div>

                {/* 课程类型和时长 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="duration">课程时长 *</Label>
                    <Input
                      id="duration"
                      placeholder="例如：10小时、5周"
                      value={formData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 课程目标 */}
            <Card>
              <CardHeader>
                <CardTitle>学习目标</CardTitle>
                <CardDescription>
                  列出学习者完成课程后能够掌握的知识和技能
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="添加学习目标"
                    value={newObjective}
                    onChange={(e) => setNewObjective(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addObjective())}
                  />
                  <Button type="button" onClick={addObjective}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  {formData.objectives.map((objective, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="flex-1">{objective}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeObjective(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 前置要求 */}
            <Card>
              <CardHeader>
                <CardTitle>前置要求</CardTitle>
                <CardDescription>
                  学习者需要具备的基础知识或技能
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="添加前置要求"
                    value={newPrerequisite}
                    onChange={(e) => setNewPrerequisite(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addPrerequisite())}
                  />
                  <Button type="button" onClick={addPrerequisite}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  {formData.prerequisites.map((prerequisite, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="flex-1">{prerequisite}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removePrerequisite(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 课程设置 */}
            <Card>
              <CardHeader>
                <CardTitle>课程设置</CardTitle>
                <CardDescription>
                  设置课程的价格、目标受众等详细信息
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="price">课程价格</Label>
                    <Input
                      id="price"
                      placeholder="例如：99 一灯币"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetAudience">目标受众</Label>
                  <Textarea
                    id="targetAudience"
                    placeholder="描述适合学习此课程的人群"
                    value={formData.targetAudience}
                    onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                    rows={3}
                  />
                </div>

                {/* 标签 */}
                <div className="space-y-2">
                  <Label>课程标签</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="添加标签"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    />
                    <Button type="button" onClick={addTag}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        {tag}
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-4 w-4 p-0"
                          onClick={() => removeTag(index)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 提交按钮 */}
            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline">
                保存草稿
              </Button>
              <Button 
                type="submit" 
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Clock className="mr-2 h-4 w-4 animate-spin" />
                    创建中...
                  </>
                ) : (
                  <>
                    <BookOpen className="mr-2 h-4 w-4" />
                    创建课程
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
