'use client'

import Script from 'next/script'

export function Analytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  if (!measurementId) {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

/**
 * Send a custom event to Google Analytics
 * @param action - The action name
 * @param category - The category of the event
 * @param label - Additional label for the event
 * @param value - Numeric value associated with the event
 */
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

/**
 * Track booking widget interactions
 */
export function trackBookingInteraction(action: 'view' | 'click' | 'submit') {
  trackEvent(action, 'Booking Widget', `Booking ${action}`)
}

/**
 * Track navigation clicks
 */
export function trackNavigation(destination: string) {
  trackEvent('click', 'Navigation', destination)
}

/**
 * Track QR code scans (when users arrive via QR code)
 */
export function trackQRCodeScan() {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('source') === 'qr') {
      trackEvent('scan', 'QR Code', 'Property QR Code')
    }
  }
}
