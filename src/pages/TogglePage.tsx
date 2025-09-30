import { useNavigate } from 'react-router-dom'
import { Toggle, Button } from '../components'

const TogglePage = () => {
  const navigate = useNavigate()
  const variants = ['primary', 'secondary', 'success', 'error', 'warning', 'info'] as const
  const sizes = ['sm', 'md', 'lg'] as const
  const thumbShapes = ['stadium', 'rounded'] as const

  return (
    <div className="p-10 space-y-12 bg-gray-50 min-h-screen bg-gradient-to-br from-primary/25 via-white to-blue-100">
      <Button
        onClick={() => navigate(-1)}
        className="absolute top-10 left-10 flex items-center gap-2"
        prefixIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        }>
        Back
      </Button>

      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Toggle Component</h1>
        <p className="text-lg text-gray-600 mt-2">
          A switch-style component to toggle between two states, such as ON and OFF.
        </p>
      </header>

      {/* Variant Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Color Variants</h2>
        <div className="flex flex-wrap gap-6">
          {variants.map((variant) => (
            <div key={variant} className="flex flex-col items-center space-y-2">
              <Toggle variant={variant} label={variant} checked />
              <span className="text-sm text-gray-500 capitalize">{variant}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Size Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Sizes</h2>
        <div className="flex flex-wrap gap-6">
          {sizes.map((size) => (
            <div key={size} className="flex flex-col items-center space-y-2">
              <Toggle customSize={size} label={size} />
              <span className="text-sm text-gray-500">{size}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Thumb Shape Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Thumb Shapes</h2>
        <div className="flex flex-wrap gap-6">
          {thumbShapes.map((shape) => (
            <div key={shape} className="flex flex-col items-center space-y-2">
              <Toggle thumbShape={shape} label={shape} />
              <span className="text-sm text-gray-500 capitalize">{shape}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Disabled Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Disabled States</h2>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center space-y-2">
            <Toggle disabled label="Disabled" />
            <span className="text-sm text-gray-500">Unchecked</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Toggle disabled label="Checked" defaultChecked />
            <span className="text-sm text-gray-500">Checked</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TogglePage
