import { Toggle } from '../components'
import Container from './Container'

const TogglePage = () => {
  const variants = ['primary', 'secondary', 'success', 'error', 'warning', 'info'] as const
  const sizes = ['sm', 'md', 'lg'] as const
  const thumbShapes = ['stadium', 'rounded'] as const

  return (
    <Container title='Toggle Component' description='A switch-style component to toggle between two states, such as ON and OFF.'>

      {/* Variant Examples */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-2">Color Variants</h2>
        <div className="flex flex-wrap gap-6">
          {variants.map((variant) => (
            <div key={variant} className="flex flex-col items-center space-y-2">
              <Toggle variant={variant} label={variant} defaultChecked />
              <span className="text-sm dark:text-white text-gray-500 capitalize">{variant}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Size Examples */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-2">Sizes</h2>
        <div className="flex flex-wrap gap-6">
          {sizes.map((size) => (
            <div key={size} className="flex flex-col items-center space-y-2">
              <Toggle customSize={size} label={size} />
              <span className="text-sm dark:text-white text-gray-500">{size}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Thumb Shape Examples */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-2">Thumb Shapes</h2>
        <div className="flex flex-wrap gap-6">
          {thumbShapes.map((shape) => (
            <div key={shape} className="flex flex-col items-center space-y-2">
              <Toggle thumbShape={shape} label={shape} />
              <span className="text-sm dark:text-white text-gray-500 capitalize">{shape}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Disabled Examples */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-2">Disabled States</h2>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center space-y-2">
            <Toggle disabled label="Disabled" />
            <span className="text-sm dark:text-white text-gray-500">Unchecked</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Toggle disabled label="Checked" defaultChecked />
            <span className="text-sm dark:text-white text-gray-500">Checked</span>
          </div>
        </div>
      </section>

    </Container>
  )
}

export default TogglePage
