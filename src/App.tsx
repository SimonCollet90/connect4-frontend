import { Cell, type CellState } from './components/Cell/Cell'

interface Variant { state: CellState; preview?: boolean; label: string }

const VARIANTS: Variant[] = [
  { state: 'empty', label: 'empty' },
  { state: 'player1', label: 'player1' },
  { state: 'player2', label: 'player2' },
  { state: 'player1', preview: true, label: 'player1 + preview' },
  { state: 'player2', preview: true, label: 'player2 + preview' },
]

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>Cell — variant preview</h2>
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
        }}
      >
        {VARIANTS.map(({ state, preview, label }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div
              style={{ background: '#1a6bb5', padding: '8px', display: 'inline-block' }}
            >
              <Cell state={state} preview={preview} />
            </div>
            <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
