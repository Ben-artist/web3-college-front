'use client'

import { useState, useRef, useEffect } from 'react'
import { Mail, RefreshCw, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

interface EmailVerificationProps {
  email: string
  onVerified?: (isVerified: boolean) => void
  className?: string
}

export function EmailVerification({ email, onVerified, className }: EmailVerificationProps) {
  const [verificationCode, setVerificationCode] = useState('')
  const [isVerified, setIsVerified] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const [error, setError] = useState('')
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // 倒计时效果
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [countdown])

  // 发送验证码
  const sendVerificationCode = async () => {
    if (!email) {
      setError('请先输入邮箱地址')
      return
    }

    setIsSending(true)
    setError('')

    try {
      // 模拟发送验证码
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // 这里应该调用实际的API发送验证码
      console.log('发送验证码到:', email)
      
      setCountdown(60) // 60秒倒计时
      alert('验证码已发送到您的邮箱，请查收')
    } catch (err) {
      setError('发送失败，请重试')
    } finally {
      setIsSending(false)
    }
  }

  // 验证验证码
  const verifyCode = async () => {
    if (verificationCode.length !== 6) {
      setError('请输入6位验证码')
      return
    }

    setIsVerifying(true)
    setError('')

    try {
      // 模拟验证过程
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // 这里应该调用实际的API验证验证码
      // 模拟验证成功
      if (verificationCode === '123456') {
        setIsVerified(true)
        onVerified?.(true)
        alert('邮箱验证成功！')
      } else {
        setError('验证码错误，请重新输入')
        setVerificationCode('')
        inputRefs.current[0]?.focus()
      }
    } catch (err) {
      setError('验证失败，请重试')
    } finally {
      setIsVerifying(false)
    }
  }

  // 处理输入变化
  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return

    const newCode = verificationCode.split('')
    newCode[index] = value
    const updatedCode = newCode.join('')
    setVerificationCode(updatedCode)

    // 自动跳转到下一个输入框
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }

    // 如果输入了6位数字，自动验证
    if (updatedCode.length === 6) {
      verifyCode()
    }
  }

  // 处理退格键
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  // 处理粘贴
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    setVerificationCode(pastedData)
    
    // 自动验证
    if (pastedData.length === 6) {
      setTimeout(() => verifyCode(), 100)
    }
  }

  if (isVerified) {
    return (
      <div className={cn('flex items-center space-x-2 text-green-600', className)}>
        <Check className="h-4 w-4" />
        <span className="text-sm font-medium">邮箱已验证</span>
      </div>
    )
  }

  return (
    <div className={cn('space-y-4', className)}>
      {/* 发送验证码按钮 */}
      <div className="flex items-center space-x-2">
        <Button
          type="button"
          variant="outline"
          onClick={sendVerificationCode}
          disabled={isSending || countdown > 0}
          className="flex-1"
        >
          {isSending ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              发送中...
            </>
          ) : (
            <>
              <Mail className="mr-2 h-4 w-4" />
              {countdown > 0 ? `重新发送 (${countdown}s)` : '发送验证码'}
            </>
          )}
        </Button>
      </div>

      {/* 验证码输入 */}
      <div className="space-y-2">
        <Label>验证码</Label>
        <div className="flex space-x-2 justify-center">
          {Array.from({ length: 6 }).map((_, index) => (
            <Input
              key={index}
              ref={(el: HTMLInputElement | null) => {
                if (el) {
                  inputRefs.current[index] = el
                }
              }}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={verificationCode[index] || ''}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-12 h-12 text-center text-lg font-semibold"
              disabled={isVerifying}
            />
          ))}
        </div>
        
        {/* 验证按钮 */}
        {verificationCode.length === 6 && (
          <Button
            type="button"
            onClick={verifyCode}
            disabled={isVerifying}
            className="w-full"
          >
            {isVerifying ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                验证中...
              </>
            ) : (
              '验证邮箱'
            )}
          </Button>
        )}
      </div>

      {/* 错误信息 */}
      {error && (
        <p className="text-sm text-red-600 text-center">{error}</p>
      )}

      {/* 提示信息 */}
      <p className="text-xs text-muted-foreground text-center">
        验证码将发送到您的邮箱，请查收邮件并输入6位数字验证码
      </p>
    </div>
  )
}
