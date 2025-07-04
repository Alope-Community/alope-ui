
import { Alert } from "../components"

const alertTypes = ['default', 'success', 'info', 'warning', 'error'] as const;

const AlertPage = () => {

    return (
        <div className="p-10 space-y-10">
            <h1 className="text-3xl font-bold">Alert Component Documentation</h1>

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

        </div>
    )
}

export default AlertPage