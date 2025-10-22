import {
  BookOpen,
  CheckCircle,
  Clock,
  DollarSign,
  Heart,
  MessageCircle,
  Shield,
  TrendingUp,
  Users,
  Vote,
  Zap,
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

// 模拟DAO数据
const daoStats = [
  { label: 'DAO成员', value: '2,500+', icon: <Users className="h-6 w-6" /> },
  { label: '提案数量', value: '150+', icon: <Vote className="h-6 w-6" /> },
  {
    label: '通过提案',
    value: '85+',
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    label: '治理代币',
    value: '100M',
    icon: <DollarSign className="h-6 w-6" />,
  },
]

const activeProposals = [
  {
    id: 1,
    title: '增加Web3课程奖学金预算',
    description: '提议增加50万美元预算用于Web3课程奖学金，帮助更多学习者参与',
    status: 'voting',
    votesFor: 1250,
    votesAgainst: 180,
    endDate: '2024-02-15',
    proposer: 'Alice Chen',
  },
  {
    id: 2,
    title: '与知名大学建立合作伙伴关系',
    description: '与MIT、斯坦福等知名大学建立Web3教育合作伙伴关系',
    status: 'discussion',
    votesFor: 0,
    votesAgainst: 0,
    endDate: '2024-02-20',
    proposer: 'Bob Smith',
  },
  {
    id: 3,
    title: '平台技术升级提案',
    description: '升级平台基础设施，提升用户体验和系统性能',
    status: 'passed',
    votesFor: 2100,
    votesAgainst: 95,
    endDate: '2024-01-30',
    proposer: 'Carol Johnson',
  },
]

const daoFeatures = [
  {
    icon: <Vote className="h-8 w-8" />,
    title: '去中心化治理',
    description: '社区成员通过投票决定平台发展方向和重要决策',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: '透明决策',
    description: '所有提案和投票过程完全透明，确保社区信任',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: '社区驱动',
    description: '由社区成员共同参与平台治理和建设',
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: '价值共享',
    description: '平台价值增长与社区成员利益直接关联',
  },
]

const governanceProcess = [
  {
    step: 1,
    title: '提案提交',
    description: '社区成员可以提交治理提案',
    icon: <MessageCircle className="h-6 w-6" />,
  },
  {
    step: 2,
    title: '社区讨论',
    description: '社区成员对提案进行讨论和反馈',
    icon: <Users className="h-6 w-6" />,
  },
  {
    step: 3,
    title: '投票表决',
    description: '持有治理代币的成员参与投票',
    icon: <Vote className="h-6 w-6" />,
  },
  {
    step: 4,
    title: '执行实施',
    description: '通过投票的提案将被执行实施',
    icon: <CheckCircle className="h-6 w-6" />,
  },
]

export default function DAOPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      {/* Hero Section */}
      <section className="container py-12 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <Badge variant="secondary" className="px-4 py-2">
            <Heart className="mr-2 h-4 w-4" />
            去中心化自治组织
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            构建Web3教育的
            <span className="text-primary">民主未来</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Web3 College DAO是一个由社区驱动的去中心化自治组织，
            让每个成员都能参与平台治理，共同决定Web3教育的未来。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              加入DAO
              <Users className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              查看提案
              <Vote className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {daoStats.map((stat, index) => (
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

      {/* Active Proposals Section */}
      <section className="container py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">活跃提案</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            参与社区治理，为Web3教育的未来发声
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activeProposals.map((proposal) => (
            <Card
              key={proposal.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge
                    variant={
                      proposal.status === 'voting'
                        ? 'default'
                        : proposal.status === 'passed'
                          ? 'secondary'
                          : 'outline'
                    }
                  >
                    {proposal.status === 'voting' && '投票中'}
                    {proposal.status === 'discussion' && '讨论中'}
                    {proposal.status === 'passed' && '已通过'}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-4 w-4" />
                    {proposal.endDate}
                  </div>
                </div>
                <CardTitle className="text-xl">{proposal.title}</CardTitle>
                <CardDescription>{proposal.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      提案人: {proposal.proposer}
                    </span>
                  </div>

                  {proposal.status === 'voting' && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-green-600">
                          支持: {proposal.votesFor}
                        </span>
                        <span className="text-red-600">
                          反对: {proposal.votesAgainst}
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{
                            width: `${
                              (proposal.votesFor /
                                (proposal.votesFor + proposal.votesAgainst)) *
                              100
                            }%`,
                          }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Vote className="mr-2 h-4 w-4" />
                      投票
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      讨论
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* DAO Features Section */}
      <section className="container py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            DAO特色功能
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            体验真正的去中心化治理，参与Web3教育的未来建设
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {daoFeatures.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Governance Process Section */}
      <section className="container py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">治理流程</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            简单透明的治理流程，让每个成员都能参与决策
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {governanceProcess.map((process) => (
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

      {/* Join DAO Section */}
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
                加入Web3 College DAO
              </h2>
              <p className="text-lg text-muted-foreground">
                成为Web3教育变革的参与者，与全球社区成员一起塑造去中心化教育的未来。
                持有治理代币，参与重要决策，分享平台成长价值。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Users className="mr-2 h-5 w-5" />
                  立即加入
                </Button>
                <Button size="lg" variant="outline">
                  <BookOpen className="mr-2 h-5 w-5" />
                  了解更多
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
