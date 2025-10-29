import { env } from '../env'

describe('Environment Variables', () => {
  it('exports env object', () => {
    expect(env).toBeDefined()
  })

  it('has GA_MEASUREMENT_ID property', () => {
    expect(env).toHaveProperty('GA_MEASUREMENT_ID')
  })

  it('has HOSPITABLE_WIDGET_ID property', () => {
    expect(env).toHaveProperty('HOSPITABLE_WIDGET_ID')
  })

  it('has DISABLE_ANIMATIONS property', () => {
    expect(env).toHaveProperty('DISABLE_ANIMATIONS')
  })

  it('loads environment variables from process.env', () => {
    // Values set in jest.setup.js
    expect(env.GA_MEASUREMENT_ID).toBe('G-TEST123')
    expect(env.HOSPITABLE_WIDGET_ID).toBe('test-widget-id')
  })

  it('parses DISABLE_ANIMATIONS as boolean', () => {
    expect(typeof env.DISABLE_ANIMATIONS).toBe('boolean')
  })
})
