import { Badge, Card } from '../components';
import Container from './Container';

const variants = ['default', 'secondary', 'success', 'info', 'warning', 'error'] as const;
const positions = ['top-right', 'top-left', 'bottom-right', 'bottom-left'] as const;

function BadgePage() {

    return (
        <Container title='Badge Component' description='Used to display small labels or counters to highlight information.'>

            {/* Variants */}
            <div className="space-y-2">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Variants</h2>
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
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Absolute Position</h2>
                <div className="flex gap-4">
                    {positions.map((position) => (
                        <div key={position} className="bg-gray-200 p-5 dark:bg-gray-800 rounded-md">
                            <Card containerClassName='relative overflow-visible dark:bg-gray-700 dark:border dark:border-gray-600'>
                                <Badge variant="success" position={position} isAbsolute>
                                    100
                                </Badge>
                                <div className="p-5 text-gray-900 dark:text-gray-200">
                                    {position}
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            {/* With Icon */}
            <div className="space-y-2">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">With Icon</h2>
                <div className="flex gap-4">
                    {positions.map((position) => (
                        <div key={position} className="bg-gray-200 p-5 dark:bg-gray-800 rounded-md">
                            <Card containerClassName='relative overflow-visible dark:bg-gray-700 dark:border dark:border-gray-600'>
                                <Badge
                                    isAbsolute
                                    variant="success"
                                    position={position}
                                    icon={
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z" />
                                        </svg>
                                    }>
                                    100
                                </Badge>
                                <div className="p-5 text-gray-900 dark:text-gray-200">
                                    {position}
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

        </Container>
    );
}

export default BadgePage;
