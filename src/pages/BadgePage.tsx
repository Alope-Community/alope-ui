import { useNavigate } from 'react-router-dom';
import { Badge, Button, Card } from '../components';

const variants = ['default', 'secondary', 'success', 'info', 'warning', 'error'] as const;
const positions = ['top-right', 'top-left', 'bottom-right', 'bottom-left'] as const;

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

                {/* Variants */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Variants</h2>
                    <div className="flex flex-wrap gap-4">
                        {variants.map((variant) => (
                            <Badge key={variant} variant={variant}>
                                {variant.toUpperCase()}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Absolute Position */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Absolute Position</h2>
                    <div className="flex ">
                        {positions.map((position) => (
                            <div className="bg-gray-200 p-5">
                                <Card containerClassName='relative overflow-visible'>
                                    <Badge variant="success" position={position} isAbsolute>
                                        100
                                    </Badge>
                                    <div className="p-5">
                                        {position}
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {/* With Icon */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">With Icon</h2>
                    <div className="flex">
                        {positions.map((position) => (
                            <div className="bg-gray-200 p-5">
                                <Card containerClassName='relative overflow-visible'>
                                    <Badge
                                        isAbsolute
                                        variant="success"
                                        position={position}
                                        icon={
                                            <svg viewBox="0 0 24 24" className={"w-4 h-4 fill-current"}>
                                                <path
                                                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z">
                                                </path>
                                            </svg>
                                        }>
                                        100
                                    </Badge>
                                    <div className="p-5">
                                        {position}
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BadgePage;
