import { useState } from 'react';
import { Button, Modal } from '../components';
import Container from './Container';

const ModalPage = () => {
    const [isBasicOpen, setIsBasicOpen] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    return (
        <Container title='Modal Component' description='Used to show content in a popup layer above the main page, often for alerts, forms, or confirmations.'>

            {/* Basic */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold dark:text-white">Basic Example Modal</h2>
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
                            <p className='dark:text-white'>This is a reusable modal component.</p>
                            <div className="mt-4 self-end">
                                <Button onClick={() => setIsBasicOpen(false)} variantType="secondary">
                                    Close
                                </Button>
                            </div>
                        </div>
                    </Modal>
                </div>
            </section>

            {/* Confirmation Modal */}
            {/* <section className="space-y-4">
                <h2 className="text-xl font-semibold dark:text-white">Confirmation Modal</h2>
                <div className="flex flex-wrap gap-4">
                    <Button onClick={() => setIsConfirmOpen(true)} variantType="error">
                        Delete Item
                    </Button>

                    <Modal
                        isOpen={isConfirmOpen}
                        onClose={() => setIsConfirmOpen(false)}
                        overlayClose={true}
                        title="Are you sure?"
                        size="lg"
                    >
                        <p className="text-gray-700 dark:text-white">
                            This action cannot be undone. Are you sure you want to delete this item? It will be permanently removed from your system.
                        </p>
                        <div className="mt-6 flex justify-end gap-3">
                            <Button onClick={() => setIsConfirmOpen(false)} variantType="secondary">
                                Cancel
                            </Button>
                            <Button onClick={() => setIsConfirmOpen(false)} variantType="error">
                                Yes, Delete
                            </Button>
                        </div>
                    </Modal>
                </div>
            </section> */}

            <section>
                <Button onClick={() => setIsConfirmOpen(true)}>Open Modal</Button>
                <Modal
                    isOpen={isConfirmOpen}
                    onClose={() => setIsConfirmOpen(false)}
                    title="Konfirmasi Logout"
                    size="md"
                    overlayClose
                    className="z-50"
                >
                    <div className="p-4">
                        <p className="text-gray-600 mb-4">Apakah yakin ingin logout?</p>
                        <div className="flex justify-end gap-2">
                            <Button
                                variant="outline"
                                variantType="secondary"
                                onClick={() => setIsConfirmOpen(false)}
                            >
                                Batal
                            </Button>
                            <Button variantType="error" onClick={() => {}}>
                                Yakin Logout
                            </Button>
                        </div>
                    </div>
                </Modal>
            </section>

        </Container>
    );
};

export default ModalPage;
