import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // 调整此值以控制性能监控的采样率
  tracesSampleRate: 1,

  // 设置采样率以控制错误监控
  sampleRate: 1.0,

  // 设置环境
  environment: process.env.NODE_ENV,

  // 设置发布版本
  release: process.env.NEXT_PUBLIC_APP_VERSION,

  // 设置用户信息
  beforeSend(event, hint) {
    // 过滤敏感信息
    if (event.exception) {
      const error = hint.originalException
      if (error && typeof error === 'object' && 'message' in error) {
        // 过滤掉一些不重要的错误
        if (
          typeof error.message === 'string' &&
          error.message.includes('Non-Error promise rejection')
        ) {
          return null
        }
      }
    }
    return event
  },

  // 设置标签
  initialScope: {
    tags: {
      component: 'web3-college-frontend',
    },
  },

  // 设置面包屑
  beforeBreadcrumb(breadcrumb) {
    // 过滤掉一些不重要的面包屑
    if (breadcrumb.category === 'console' && breadcrumb.level === 'log') {
      return null
    }
    return breadcrumb
  },
})
