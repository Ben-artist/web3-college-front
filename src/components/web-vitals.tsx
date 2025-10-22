'use client'

import * as Sentry from '@sentry/nextjs'
import { useEffect } from 'react'
import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals'

export function WebVitals() {
  useEffect(() => {
    // 监控Core Web Vitals
    onCLS((metric) => {
      Sentry.addBreadcrumb({
        category: 'web-vitals',
        message: `CLS: ${metric.value}`,
        level: 'info',
      })

      // 如果CLS值过高，发送到Sentry
      if (metric.value > 0.1) {
        Sentry.captureMessage(`Poor CLS: ${metric.value}`, 'warning')
      }
    })

    onFID((metric) => {
      Sentry.addBreadcrumb({
        category: 'web-vitals',
        message: `FID: ${metric.value}`,
        level: 'info',
      })

      // 如果FID值过高，发送到Sentry
      if (metric.value > 100) {
        Sentry.captureMessage(`Poor FID: ${metric.value}`, 'warning')
      }
    })

    onFCP((metric) => {
      Sentry.addBreadcrumb({
        category: 'web-vitals',
        message: `FCP: ${metric.value}`,
        level: 'info',
      })

      // 如果FCP值过高，发送到Sentry
      if (metric.value > 1800) {
        Sentry.captureMessage(`Poor FCP: ${metric.value}`, 'warning')
      }
    })

    onLCP((metric) => {
      Sentry.addBreadcrumb({
        category: 'web-vitals',
        message: `LCP: ${metric.value}`,
        level: 'info',
      })

      // 如果LCP值过高，发送到Sentry
      if (metric.value > 2500) {
        Sentry.captureMessage(`Poor LCP: ${metric.value}`, 'warning')
      }
    })

    onTTFB((metric) => {
      Sentry.addBreadcrumb({
        category: 'web-vitals',
        message: `TTFB: ${metric.value}`,
        level: 'info',
      })

      // 如果TTFB值过高，发送到Sentry
      if (metric.value > 600) {
        Sentry.captureMessage(`Poor TTFB: ${metric.value}`, 'warning')
      }
    })
  }, [])

  return null
}
