'use client'

import { useState } from 'react'
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi'
import { Wallet, LogOut, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function WalletConnect() {
  const { address, isConnected } = useAccount()
  const { connect, connectors, isPending } = useConnect()
  const { disconnect } = useDisconnect()
  const { data: balance } = useBalance({
    address: address,
  })
  const [copied, setCopied] = useState(false)

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  const copyAddress = async () => {
    if (address) {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // 钱包连接时自动注册/登录
  const handleConnect = async () => {
    try {
      await connect({ connector: connectors[0] })
      // 连接成功后，自动处理注册/登录逻辑
      if (address) {
        // 这里可以调用后端API检查用户是否已注册
        // 如果未注册，自动创建账户
        // 如果已注册，直接登录
        console.log('钱包连接成功，自动注册/登录:', address)
      }
    } catch (error) {
      console.error('连接钱包失败:', error)
    }
  }

  if (isConnected && address) {
    return (
      <div className="flex items-center space-x-2">
        {/* 钱包信息 - 简化版本 */}
        <div className="flex items-center space-x-2 px-3 py-2 bg-muted/50 rounded-lg">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <Wallet className="h-3 w-3 text-primary" />
          </div>
          <span className="text-sm font-medium">
            {formatAddress(address)}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={copyAddress}
          >
            {copied ? (
              <Check className="h-3 w-3 text-green-600" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>

        {/* 断开连接按钮 - 紧凑版本 */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => disconnect()}
          className="h-8 px-3"
        >
          <LogOut className="mr-1 h-3 w-3" />
          断开
        </Button>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-2">
      {/* 桌面端连接按钮 */}
      <Button
        variant="outline"
        onClick={() => connect({ connector: connectors[0] })}
        disabled={isPending}
        className="hidden sm:inline-flex"
      >
        <Wallet className="mr-2 h-4 w-4" />
        {isPending ? '连接中...' : '连接钱包'}
      </Button>
      
      {/* 移动端连接按钮 */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => connect({ connector: connectors[0] })}
        disabled={isPending}
        className="sm:hidden"
      >
        <Wallet className="h-4 w-4" />
      </Button>
    </div>
  )
}

// 钱包连接模态框组件
export function WalletConnectModal() {
  const { connect, connectors, isPending } = useConnect()
  const [isOpen, setIsOpen] = useState(false)

  if (!isOpen) {
    return (
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        <Wallet className="mr-2 h-4 w-4" />
        连接钱包
      </Button>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Wallet className="h-5 w-5" />
            <span>连接钱包</span>
          </CardTitle>
          <CardDescription>
            选择一个钱包来连接您的账户
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {connectors.map((connector) => (
            <Button
              key={connector.uid}
              variant="outline"
              className="w-full justify-start"
              onClick={() => {
                connect({ connector })
                setIsOpen(false)
              }}
              disabled={isPending}
            >
              <Wallet className="mr-2 h-4 w-4" />
              {connector.name}
              {isPending && ' (连接中...)'}
            </Button>
          ))}
          <Button
            variant="ghost"
            className="w-full"
            onClick={() => setIsOpen(false)}
          >
            取消
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
