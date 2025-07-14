import { useNavigate } from 'react-router-dom';
import { Badge, Button } from '../components';

const variants = ['default', 'secondary', 'success', 'info', 'warning', 'error'] as const;

function BadgePage() {
    const navigate = useNavigate()

    return (
        <div className="p-10 space-y-12 min-h-screen bg-gradient-to-br from-primary/25 via-white to-blue-100">

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
