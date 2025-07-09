import { Badge } from '../components';

const variants = ['default', 'secondary', 'success', 'info', 'warning', 'error'] as const;

function BadgePage() {
    return (
        <div className="p-10 space-y-12 min-h-screen">
            <header className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">Badge Component</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Used to display small labels or counters to highlight information.
                </p>
            </header>

            <div className="max-w-4xl mx-auto space-y-10">

                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Example Variants</h2>
                    <div className="flex flex-wrap gap-4">
                        {variants.map((variant) => (
                            <Badge key={variant} variant={variant}>
                                {variant.toUpperCase()}
                            </Badge>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BadgePage;
