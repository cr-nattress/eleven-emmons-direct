import { logger } from '../logger'

describe('Logger Utility', () => {
  let consoleInfoSpy: jest.SpyInstance
  let consoleWarnSpy: jest.SpyInstance
  let consoleErrorSpy: jest.SpyInstance
  let originalNodeEnv: string | undefined

  beforeEach(() => {
    originalNodeEnv = process.env.NODE_ENV
    ;(process.env as any).NODE_ENV = 'development'
    consoleInfoSpy = jest.spyOn(console, 'info').mockImplementation()
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation()
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation()
  })

  afterEach(() => {
    ;(process.env as any).NODE_ENV = originalNodeEnv
    consoleInfoSpy.mockRestore()
    consoleWarnSpy.mockRestore()
    consoleErrorSpy.mockRestore()
  })

  describe('info', () => {
    it('logs info messages in development', () => {
      logger.info('Test info message', { key: 'value' })

      expect(consoleInfoSpy).toHaveBeenCalledWith(
        '[INFO]',
        'Test info message',
        { key: 'value' }
      )
    })
  })

  describe('warn', () => {
    it('logs warning messages in development', () => {
      logger.warn('Test warning message')

      expect(consoleWarnSpy).toHaveBeenCalledWith(
        '[WARN]',
        'Test warning message'
      )
    })
  })

  describe('error', () => {
    it('logs error messages in development', () => {
      logger.error('Test error message')

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        '[ERROR]',
        'Test error message'
      )
    })

    it('sends errors to Google Analytics when gtag is available', () => {
      const mockGtag = jest.fn()

      // Save original window state
      const originalWindow = global.window

      // Mock window and gtag
      Object.defineProperty(global, 'window', {
        value: { gtag: mockGtag },
        writable: true,
        configurable: true,
      })

      logger.error('Analytics error')

      expect(mockGtag).toHaveBeenCalledWith('event', 'exception', {
        description: 'Analytics error',
        fatal: false,
      })

      // Restore original window
      Object.defineProperty(global, 'window', {
        value: originalWindow,
        writable: true,
        configurable: true,
      })
    })
  })
})
