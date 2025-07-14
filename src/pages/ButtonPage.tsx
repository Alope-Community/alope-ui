import { useNavigate } from 'react-router-dom'
import { Button } from '../components'

const variantTypes = ['primary', 'error', 'info', 'warning', 'success', 'secondary'] as const
const variants = ['solid', 'outline', 'ghost', 'plain'] as const
const radius = ['regular', 'stadium'] as const
const sizes = ['sm', 'md', 'lg'] as const

function ButtonPage() {
    const navigate = useNavigate()

    const onClick = () => alert('I\'m pressed the button!')

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
                <h1 className="text-4xl font-bold text-gray-800">Button Component</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Used to trigger an action or event when clicked.
                </p>
            </header>


            <div className="max-w-4xl mx-auto space-y-10">

                {/* Variants */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Variants</h2>
                    <div className="flex gap-4 flex-wrap">
                        {variants.map((variant) => (
                            <Button key={variant} variant={variant} onClick={onClick}>
                                {variant}
                            </Button>
                        ))}
                    </div>
                </section>

                {/* Variant Types */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Variant Types</h2>
                    <div className="flex gap-4 flex-wrap">
                        {variantTypes.map((variant) => (
                            <Button key={variant} variantType={variant} onClick={onClick}>
                                {variant}
                            </Button>
                        ))}
                    </div>
                </section>

                {/* Sizes */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
                    <div className="flex gap-4 flex-wrap items-end">
                        {sizes.map((size) => (
                            <Button key={size} size={size} onClick={onClick}>
                                {size}
                            </Button>
                        ))}
                    </div>
                </section>

                {/* Border Radius */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Border Radius</h2>
                    <div className="flex gap-4 flex-wrap items-end">
                        {radius.map((radius) => (
                            <Button key={radius} borderType={radius} onClick={onClick}>
                                {radius}
                            </Button>
                        ))}
                    </div>
                </section>

                {/* Full Width */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Full Width</h2>
                    <Button fullWidth onClick={onClick}>
                        Full Width Button
                    </Button>
                </section>

                {/* Disabled */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Disabled</h2>
                    <div className="flex gap-4">
                        <Button disabled>Disabled</Button>
                        <Button disabled variant="outline">Disabled</Button>
                    </div>
                </section>

                {/* Link (to) */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">As Link</h2>
                    <Button to="/">Go Home</Button>
                </section>

                {/* Prefix and Suffix Icons */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
                    <div className="flex gap-4 items-center">
                        <Button onClick={onClick} prefixIcon={<span>🔍</span>}>Search</Button>
                        <Button onClick={onClick} suffixIcon={<span>➡️</span>} variant="outline">Next</Button>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default ButtonPage
