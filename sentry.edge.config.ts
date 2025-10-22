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
})
