import { Button } from '../components'

const variants = ['solid', 'error', 'info', 'warning', 'success', 'surface', 'outline', 'ghost', 'plain'] as const
const sizes = ['sm', 'md', 'lg'] as const

function ButtonPage() {
    
    const onClick = () => alert('I\'m pressed the button!')

    return (
        <div className="p-10 space-y-10">
            <h1 className="text-3xl font-bold">Button Component Documentation</h1>

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
                        <Button key={size} size={size} variant="solid" onClick={onClick}>
                            {size}
                        </Button>
                    ))}
                </div>
            </section>

            {/* Full Width */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Full Width</h2>
                <Button fullWidth variant="solid" onClick={onClick}>
                    Full Width Button
                </Button>
            </section>

            {/* Disabled */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Disabled</h2>
                <div className="flex gap-4">
                    <Button disabled variant="solid">Disabled</Button>
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
                    <Button onClick={onClick} prefixIcon={<span>🔍</span>} variant="solid">Search</Button>
                    <Button onClick={onClick} suffixIcon={<span>➡️</span>} variant="outline">Next</Button>
                </div>
            </section>
        </div>
    )
}

export default ButtonPage
