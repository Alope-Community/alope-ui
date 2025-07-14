
import { useNavigate } from "react-router-dom";
import { Alert, Button } from "../components"

const alertTypes = ['default', 'success', 'info', 'warning', 'error'] as const;

const AlertPage = () => {
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
                <h1 className="text-4xl font-bold text-gray-800">Alert Component</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Used to display important messages or notifications to the user.
                </p>
            </header>

            <div className="max-w-4xl mx-auto space-y-10">

                {/* Basic */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Basic Example Alert</h2>
                    <div className="flex flex-wrap gap-4">
                        <Alert
                            title="Alert"
                            description="Alert is used to give some feedback or infos to user."
                        />
                    </div>
                </div>

                {/* List Type */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">List Type of Alert</h2>
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
                    <h2 className="text-xl font-semibold">With Custom Icon</h2>
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
                    <h2 className="text-xl font-semibold">With Action</h2>
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
                    <h2 className="text-xl font-semibold">With Close Button</h2>
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

            </div>
        </div>
    )
}

export default AlertPage