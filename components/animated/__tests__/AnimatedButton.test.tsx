import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AnimatedButton from '@/components/animated/AnimatedButton'

describe('AnimatedButton Component', () => {
  it('renders children content', () => {
    render(<AnimatedButton>Click Me</AnimatedButton>)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()

    render(<AnimatedButton onClick={handleClick}>Click Me</AnimatedButton>)

    await user.click(screen.getByText('Click Me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies custom className', () => {
    render(<AnimatedButton className="custom-class">Button</AnimatedButton>)
    const button = screen.getByText('Button')
    expect(button).toHaveClass('custom-class')
  })

  it('renders as button element by default', () => {
    render(<AnimatedButton>Button</AnimatedButton>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'button')
  })

  it('respects disabled prop', () => {
    render(<AnimatedButton disabled>Disabled Button</AnimatedButton>)
    const button = screen.getByText('Disabled Button')
    expect(button).toBeDisabled()
  })

  it('accepts different button types', () => {
    render(<AnimatedButton type="submit">Submit</AnimatedButton>)
    const button = screen.getByText('Submit')
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('does not call onClick when disabled', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()

    render(
      <AnimatedButton onClick={handleClick} disabled>
        Disabled
      </AnimatedButton>
    )

    await user.click(screen.getByText('Disabled'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('renders with enableScale prop', () => {
    render(<AnimatedButton enableScale>Scale Button</AnimatedButton>)
    expect(screen.getByText('Scale Button')).toBeInTheDocument()
  })

  it('renders with enablePulse prop', () => {
    render(<AnimatedButton enablePulse>Pulse Button</AnimatedButton>)
    expect(screen.getByText('Pulse Button')).toBeInTheDocument()
  })

  it('renders with both enableScale and enablePulse', () => {
    render(
      <AnimatedButton enableScale enablePulse>
        Animated Button
      </AnimatedButton>
    )
    expect(screen.getByText('Animated Button')).toBeInTheDocument()
  })
})
