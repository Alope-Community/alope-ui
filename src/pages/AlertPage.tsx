import { Alert, Button } from "../components"
import Container from "./Container";

const alertTypes = ['secondary', 'primary', 'success', 'info', 'warning', 'error'] as const;

const AlertPage = () => {

    return (
        <Container title="Alert Component" description="Used to display important messages or notifications to the user.">

            {/* Basic */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">Basic Example Alert</h2>
                <div className="flex flex-wrap gap-4">
                    <Alert
                        title="Alert"
                        description="Alert is used to give some feedback or infos to user."
                    />
                </div>
            </div>

            {/* Basic No Description */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">Alert Without Description</h2>
                <div className="flex flex-wrap gap-4">
                    <Alert
                        title="This is Alert without Description"
                        type="success"
                        iconColor="success"
                    />
                </div>
            </div>

            {/* List Type */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">List Type of Alert</h2>
                <div className="flex flex-wrap gap-4">
                    {
                        alertTypes.map((alertType, index) => (
                            <Alert
                                key={index}
                                iconColor={alertType}
                                type={alertType}
                                title="Alert"
                                description="Alert is used to give some feedback or infos to user."
                            />
                        ))
                    }
                </div>
            </div>

            {/* With Custom Icon */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">With Custom Icon</h2>
                <div className="flex flex-wrap gap-4">
                    <Alert
                        type="warning"
                        title="Alert"
                        description="Alert is used to give some feedback or infos to user."
                        icon={
                            <svg viewBox="0 0 24 24" className="w-6 h-6 text-warning-700" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                            </svg>
                        }
                    />
                </div>
            </div>

            {/* With Action */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">With Action</h2>
                <div className="flex flex-wrap gap-4">
                    <Alert
                        type="info"
                        title="Alert"
                        description="Alert is used to give some feedback or infos to user."
                        iconColor="info"
                        action={
                            <Button variantType="info">Confirm</Button>
                        }
                    />
                </div>
            </div>

            {/* With Action */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">With Close Button</h2>
                <div className="flex flex-wrap gap-4">
                    <Alert
                        withClose
                        type="primary"
                        title="Alert"
                        description="Alert is used to give some feedback or infos to user."
                        iconColor="primary"
                        action={
                            <Button>Yes! I Know it!</Button>
                        }
                    />
                </div>
            </div>

        </Container>
    )
}

export default AlertPage