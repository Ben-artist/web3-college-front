'use client'

import { ArrowLeft, BookOpen, Home, Search } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
      <div className="container max-w-2xl text-center">
        <Card className="p-12">
          <CardContent className="space-y-8">
            {/* 404 Icon */}
            <div className="flex justify-center">
              <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-primary" />
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-primary">404</h1>
              <h2 className="text-2xl font-semibold">页面未找到</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                抱歉，您访问的页面不存在或已被移除。请检查URL是否正确，或返回首页继续浏览。
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg">
                  <Home className="mr-2 h-5 w-5" />
                  返回首页
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                返回上页
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="pt-8 border-t">
              <p className="text-sm text-muted-foreground mb-4">
                您可能想要访问：
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Link href="/courses">
                  <Button variant="ghost" size="sm">
                    课程列表
                  </Button>
                </Link>
                <Link href="/community">
                  <Button variant="ghost" size="sm">
                    社区讨论
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="ghost" size="sm">
                    关于我们
                  </Button>
                </Link>
              </div>
            </div>

            {/* Search Suggestion */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-2">
                或者尝试搜索您需要的内容：
              </p>
              <Button variant="outline" size="sm">
                <Search className="mr-2 h-4 w-4" />
                搜索课程
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
