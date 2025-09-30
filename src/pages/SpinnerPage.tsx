
import { useNavigate } from 'react-router-dom'
import { Spinner } from '../components'
import { Button } from '../components'

const SpinnerPage = () => {
    const navigate = useNavigate()
    const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'error'] as const
    const sizes = ['sm', 'md', 'lg'] as const

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
                <h1 className="text-4xl font-bold text-gray-800">Spinner Component</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Used to indicate loading states while content is being fetched or processed.
                </p>
            </header>

            {/* Basic Example */}
            <section>
                <h2 className="text-xl font-semibold mb-2">Basic Usage</h2>
                <div className="flex items-center gap-4 text-gray-700">
                    <Spinner />
                    <span>Loading content...</span>
                </div>
            </section>

            {/* Colors */}
            <section>
                <h2 className="text-xl font-semibold mb-2">Color Variants</h2>
                <div className="flex flex-wrap gap-6">
                    {colors.map((color) => (
                        <div key={color} className="flex flex-col items-center space-y-2">
                            <Spinner color={color} />
                            <span className="text-sm text-gray-500">{color}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sizes */}
            <section>
                <h2 className="text-xl font-semibold mb-2">Sizes</h2>
                <div className="flex flex-wrap gap-6">
                    {sizes.map((size) => (
                        <div key={size} className="flex flex-col items-center space-y-2">
                            <Spinner size={size} />
                            <span className="text-sm text-gray-500">{size}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Custom Duration & Thickness */}
            <section>
                <h2 className="text-xl font-semibold mb-2">Custom Duration & Thickness</h2>
                <div className="flex flex-wrap gap-6">
                    <div className="flex flex-col items-center space-y-2">
                        <Spinner duration={500} />
                        <span className="text-sm text-gray-500">Duration: 500ms</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <Spinner duration={2000} />
                        <span className="text-sm text-gray-500">Duration: 2000ms</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <Spinner thickness={6} />
                        <span className="text-sm text-gray-500">Thickness: 6px</span>
                    </div>
                </div>
            </section>

            {/* Usage in Button */}
            <section>
                <h2 className="text-xl font-semibold mb-2">Usage in Buttons</h2>
                <div className="flex items-center gap-4">
                    <Button
                        variantType="primary"
                        variant="solid"
                        disabled
                        prefixIcon={<Spinner size="sm" thickness={3} className='border-white border-t-transparent' />}
                    >
                        Loading...
                    </Button>
                </div>
            </section>
        </div>
    )
}

export default SpinnerPage
