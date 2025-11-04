import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Checkbox } from './Checkbox'

describe('checkbox', () => {
  it('renders with label', () => {
    render(<Checkbox label="Accept terms" />)
    expect(screen.getByLabelText(/accept terms/i)).toBeDefined()
  })

  it('handles change events', async () => {
    render(<Checkbox label="Remember me" />)
    const checkbox = screen.getByLabelText(/remember me/i)

    await userEvent.click(checkbox)

    await userEvent.click(checkbox)
  })

  it('can be disabled', () => {
    render(<Checkbox label="Disabled option" disabled />)
  })
})
