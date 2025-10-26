import { Button } from '../components'
import Container from './Container'

const variantTypes = ['primary', 'error', 'info', 'warning', 'success', 'secondary'] as const
const variants = ['solid', 'outline', 'ghost', 'plain'] as const
const radius = ['regular', 'stadium'] as const
const sizes = ['sm', 'md', 'lg'] as const

function ButtonPage() {

    const onClick = () => alert('I\'m pressed the button!')

    return (
        <Container title='Button Component' description='Used to trigger an action or event when clicked.'>

            {/* Variants */}
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Variants</h2>
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
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Variant Types</h2>
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
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Sizes</h2>
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
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Border Radius</h2>
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
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Full Width</h2>
                <Button fullWidth onClick={onClick}>
                    Full Width Button
                </Button>
            </section>

            {/* Disabled */}
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Disabled</h2>
                <div className="flex gap-4">
                    <Button disabled>Disabled</Button>
                    <Button disabled variant="outline">Disabled</Button>
                </div>
            </section>

            {/* Link (to) */}
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">As Link</h2>
                <Button to="/">Go Home</Button>
            </section>

            {/* Prefix and Suffix Icons */}
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">With Icons</h2>
                <div className="flex gap-4 items-center">
                    <Button onClick={onClick} prefixIcon={<span>🔍</span>}>Search</Button>
                    <Button onClick={onClick} suffixIcon={<span>➡️</span>} variant="outline">Next</Button>
                </div>
            </section>

        </Container>
    )
}

export default ButtonPage
