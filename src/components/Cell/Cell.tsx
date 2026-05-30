import './Cell.css'

export type CellState = 'empty' | 'player1' | 'player2'

interface CellProps {
  state: CellState
  preview?: boolean
}

export function Cell({ state, preview = false }: CellProps) {
  const discClasses = [
    'cell__disc',
    `cell__disc--${state}`,
    preview ? 'cell__disc--preview' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="cell" data-testid="cell">
      <div className={discClasses} data-testid="cell-disc" />
    </div>
  )
}
