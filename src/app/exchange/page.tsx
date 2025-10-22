'use client'

import {
  ArrowLeftRight,
  Clock,
  DollarSign,
  Info,
  RefreshCw,
  Shield,
  TrendingDown,
  TrendingUp,
  Wallet,
  Zap,
} from 'lucide-react'
import { useState } from 'react'
import { useAccount, useBalance } from 'wagmi'
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

// 兑换历史记录
const exchangeHistory = [
  {
    id: 1,
    type: 'ETH_TO_LIGHT',
    amount: '0.5 ETH',
    converted: '1250 一灯币',
    rate: '1 ETH = 2500 一灯币',
    time: '2024-03-22 14:30',
    status: 'completed',
  },
  {
    id: 2,
    type: 'LIGHT_TO_ETH',
    amount: '500 一灯币',
    converted: '0.2 ETH',
    rate: '1 ETH = 2500 一灯币',
    time: '2024-03-21 09:15',
    status: 'completed',
  },
  {
    id: 3,
    type: 'ETH_TO_LIGHT',
    amount: '1.0 ETH',
    converted: '2500 一灯币',
    rate: '1 ETH = 2500 一灯币',
    time: '2024-03-20 16:45',
    status: 'pending',
  },
]

// 兑换说明
const exchangeInfo = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: '安全可靠',
    description: '使用智能合约确保兑换过程安全透明',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: '即时到账',
    description: '兑换完成后立即到账，无需等待',
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: '实时汇率',
    description: '基于市场实时汇率，确保公平交易',
  },
  {
    icon: <Wallet className="h-6 w-6" />,
    title: '低手续费',
    description: '仅收取少量Gas费用，无额外手续费',
  },
]

export default function ExchangePage() {
  const { address, isConnected } = useAccount()
  const { data: ethBalance } = useBalance({
    address: address,
  })
  const [ethAmount, setEthAmount] = useState('')
  const [lightAmount, setLightAmount] = useState('')

  const handleExchange = () => {
    if (!isConnected) {
      alert('请先连接钱包')
      return
    }
    // 这里可以添加实际的兑换逻辑
    alert('兑换功能开发中...')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      {/* Hero Section */}
      <section className="container py-12 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <Badge variant="secondary" className="px-4 py-2">
            <ArrowLeftRight className="mr-2 h-4 w-4" />
            代币兑换
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            一灯币与ETH
            <span className="text-primary">自由兑换</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            安全、快速、透明的代币兑换服务，让您的一灯币与ETH之间自由转换，
            享受Web3教育的便利。
          </p>
        </div>
      </section>

      <div className="container pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Exchange Interface */}
          <div className="lg:col-span-2 space-y-8">
            {/* Exchange Card */}
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ArrowLeftRight className="h-5 w-5" />
                  <span>代币兑换</span>
                </CardTitle>
                <CardDescription>
                  在ETH和一灯币之间进行安全兑换
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Exchange Form */}
                <div className="space-y-4">
                  {/* From */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">从</label>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <Zap className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-medium">ETH</span>
                      </div>
                      <div className="flex-1">
                        <input
                          type="number"
                          placeholder="0.0"
                          value={ethAmount}
                          onChange={(e) => {
                            setEthAmount(e.target.value)
                            setLightAmount((parseFloat(e.target.value) * 2500).toString())
                          }}
                          className="w-full text-right text-lg font-semibold bg-transparent border-none outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Exchange Button */}
                  <div className="flex justify-center">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      onClick={() => {
                        const temp = ethAmount
                        setEthAmount(lightAmount)
                        setLightAmount(temp)
                      }}
                    >
                      <ArrowLeftRight className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* To */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">到</label>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 flex items-center justify-center">
                          <DollarSign className="h-4 w-4 text-yellow-600" />
                        </div>
                        <span className="font-medium">一灯币</span>
                      </div>
                      <div className="flex-1">
                        <input
                          type="number"
                          placeholder="0.0"
                          value={lightAmount}
                          onChange={(e) => {
                            setLightAmount(e.target.value)
                            setEthAmount((parseFloat(e.target.value) / 2500).toString())
                          }}
                          className="w-full text-right text-lg font-semibold bg-transparent border-none outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exchange Rate */}
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">当前汇率</span>
                    <span className="font-medium">1 ETH = 2,500 一灯币</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-muted-foreground">预计到账</span>
                    <span className="font-medium">约 2,500 一灯币</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button className="flex-1" size="lg">
                    <ArrowLeftRight className="mr-2 h-4 w-4" />
                    立即兑换
                  </Button>
                  <Button variant="outline" size="lg">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    刷新汇率
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Exchange History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>兑换记录</span>
                </CardTitle>
                <CardDescription>查看您的兑换历史记录</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {exchangeHistory.map((record) => (
                  <div
                    key={record.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <ArrowLeftRight className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{record.amount}</span>
                          <ArrowLeftRight className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{record.converted}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {record.rate} • {record.time}
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant={
                        record.status === 'completed' ? 'default' : 'secondary'
                      }
                    >
                      {record.status === 'completed' ? '已完成' : '处理中'}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Exchange Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Info className="h-5 w-5" />
                  <span>兑换说明</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {exchangeInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5"
                  >
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{info.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Current Rates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>实时汇率</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">ETH → 一灯币</span>
                  <span className="font-medium">1 : 2,500</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">一灯币 → ETH</span>
                  <span className="font-medium">2,500 : 1</span>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">24h变化</span>
                    <div className="flex items-center space-x-1 text-green-600">
                      <TrendingUp className="h-4 w-4" />
                      <span>+2.5%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>快速操作</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  <Wallet className="mr-2 h-4 w-4" />
                  连接钱包
                </Button>
                <Button className="w-full" variant="outline">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  刷新余额
                </Button>
                <Button className="w-full" variant="outline">
                  <Info className="mr-2 h-4 w-4" />
                  查看帮助
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
