import { Spinner } from '../components'
import { Button } from '../components'
import Container from './Container'

const SpinnerPage = () => {
    const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'error'] as const
    const sizes = ['sm', 'md', 'lg'] as const

    return (
        <Container title='Spinner Component' description='Used to indicate loading states while content is being fetched or processed.'>

            {/* Basic Example */}
            <section>
                <h2 className="text-xl font-semibold dark:text-white mb-2">Basic Usage</h2>
                <div className="flex items-center gap-4 text-gray-700">
                    <Spinner />
                    <span className='dark:text-white'>Loading content...</span>
                </div>
            </section>

            {/* Colors */}
            <section>
                <h2 className="text-xl font-semibold dark:text-white mb-2">Color Variants</h2>
                <div className="flex flex-wrap gap-6">
                    {colors.map((color) => (
                        <div key={color} className="flex flex-col items-center space-y-2">
                            <Spinner color={color} />
                            <span className="text-sm dark:text-white text-gray-500">{color}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sizes */}
            <section>
                <h2 className="text-xl font-semibold dark:text-white mb-2">Sizes</h2>
                <div className="flex flex-wrap gap-6">
                    {sizes.map((size) => (
                        <div key={size} className="flex flex-col items-center space-y-2">
                            <Spinner size={size} />
                            <span className="text-sm dark:text-white text-gray-500">{size}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Custom Duration & Thickness */}
            <section>
                <h2 className="text-xl font-semibold dark:text-white mb-2">Custom Duration & Thickness</h2>
                <div className="flex flex-wrap gap-6">
                    <div className="flex flex-col items-center space-y-2">
                        <Spinner duration={500} />
                        <span className="text-sm dark:text-white text-gray-500">Duration: 500ms</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <Spinner duration={2000} />
                        <span className="text-sm dark:text-white text-gray-500">Duration: 2000ms</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <Spinner thickness={6} />
                        <span className="text-sm dark:text-white text-gray-500">Thickness: 6px</span>
                    </div>
                </div>
            </section>

            {/* Usage in Button */}
            <section>
                <h2 className="text-xl font-semibold dark:text-white mb-2">Usage in Buttons</h2>
                <div className="flex items-center gap-4">
                    <Button
                        variantType="primary"
                        variant="solid"
                        disabled
                        prefixIcon={<Spinner size="sm" thickness={3} className='border-white dark:border-white' />}
                    >
                        Loading...
                    </Button>
                </div>
            </section>

        </Container>
    )
}

export default SpinnerPage
