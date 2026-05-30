import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Cell } from './Cell'

describe('Cell', () => {
  it('renders a cell and its disc', () => {
    render(<Cell state="empty" />)
    expect(screen.getByTestId('cell')).toBeInTheDocument()
    expect(screen.getByTestId('cell-disc')).toBeInTheDocument()
  })

  it('applies the empty class when state is empty', () => {
    render(<Cell state="empty" />)
    expect(screen.getByTestId('cell-disc')).toHaveClass('cell__disc--empty')
  })

  it('applies the player1 class when state is player1', () => {
    render(<Cell state="player1" />)
    expect(screen.getByTestId('cell-disc')).toHaveClass('cell__disc--player1')
  })

  it('applies the player2 class when state is player2', () => {
    render(<Cell state="player2" />)
    expect(screen.getByTestId('cell-disc')).toHaveClass('cell__disc--player2')
  })

  it('does not apply the preview class by default', () => {
    render(<Cell state="player1" />)
    expect(screen.getByTestId('cell-disc')).not.toHaveClass('cell__disc--preview')
  })

  it('applies the preview class when preview is true', () => {
    render(<Cell state="player1" preview />)
    expect(screen.getByTestId('cell-disc')).toHaveClass('cell__disc--preview')
  })

  it('applies both the state class and the preview class simultaneously', () => {
    render(<Cell state="player1" preview />)
    const disc = screen.getByTestId('cell-disc')
    expect(disc).toHaveClass('cell__disc--player1')
    expect(disc).toHaveClass('cell__disc--preview')
  })

  it('does not apply the preview class when preview is false', () => {
    render(<Cell state="player1" preview={false} />)
    expect(screen.getByTestId('cell-disc')).not.toHaveClass('cell__disc--preview')
  })
})
