import { Button } from '../components'

const variants = ['primary', 'error', 'info', 'warning', 'success', 'surface', 'outline', 'ghost', 'plain'] as const
const sizes = ['sm', 'md', 'lg'] as const

function ButtonPage() {

    const onClick = () => alert('I\'m pressed the button!')

    return (
        <div className="p-10 space-y-12 bg-gray-50 min-h-screen">
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
                    <Button to="/" variant="surface">Go Home</Button>
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
