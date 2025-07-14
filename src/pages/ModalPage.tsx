import { useState } from 'react';
import { Button, Modal } from '../components';
import { useNavigate } from 'react-router-dom';

const ModalPage = () => {
    const navigate = useNavigate()

    const [isBasicOpen, setIsBasicOpen] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

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
                <h1 className="text-4xl font-bold text-gray-800">Modal Component</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Used to show content in a popup layer above the main page, often for alerts, forms, or confirmations.
                </p>
            </header>

            <div className="max-w-4xl mx-auto space-y-10">

                {/* Basic */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Basic Example Modal</h2>
                    <div className="flex flex-wrap gap-4">
                        <Button onClick={() => setIsBasicOpen(true)}>Open Modal</Button>

                        <Modal
                            isOpen={isBasicOpen}
                            overlayClose={false}
                            onClose={() => setIsBasicOpen(false)}
                            title="Example Modal"
                            size="sm"
                        >
                            <div className="flex flex-col">
                                <p>This is a reusable modal component.</p>
                                <div className="mt-4 self-end">
                                    <Button onClick={() => setIsBasicOpen(false)} variant="surface">
                                        Close
                                    </Button>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </section>

                {/* Confirmation Modal */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Confirmation Modal</h2>
                    <div className="flex flex-wrap gap-4">
                        <Button onClick={() => setIsConfirmOpen(true)} variant="error">
                            Delete Item
                        </Button>

                        <Modal
                            isOpen={isConfirmOpen}
                            onClose={() => setIsConfirmOpen(false)}
                            overlayClose={true}
                            title="Are you sure?"
                            size="lg"
                        >
                            <p className="text-gray-700">
                                This action cannot be undone. Are you sure you want to delete this item? It will be permanently removed from your system.
                            </p>
                            <div className="mt-6 flex justify-end gap-3">
                                <Button onClick={() => setIsConfirmOpen(false)} variant="surface">
                                    Cancel
                                </Button>
                                <Button onClick={() => setIsConfirmOpen(false)} variant="error">
                                    Yes, Delete
                                </Button>
                            </div>
                        </Modal>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default ModalPage;
