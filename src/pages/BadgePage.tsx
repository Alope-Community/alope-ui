import { Badge } from '../components';

const variants = ['default', 'secondary', 'success', 'info', 'warning', 'error'] as const;

function BadgePage() {
    return (
        <div className="p-10 space-y-10">
            <h1 className="text-3xl font-bold">Badge Component Documentation</h1>

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
    );
}

export default BadgePage;
