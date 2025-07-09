import React, { useState } from 'react';
import { Button, Offcanvas } from '../components';

const OffcanvasPage: React.FC = () => {
    const [isRightOpen, setIsRightOpen] = useState(false);
    const [isLeftOpen, setIsLeftOpen] = useState(false);

    const handleRightOpen = () => setIsRightOpen(true);
    const handleRightClose = () => setIsRightOpen(false);

    const handleLeftOpen = () => setIsLeftOpen(true);
    const handleLeftClose = () => setIsLeftOpen(false);

    return (
        <>
            <div className="p-10 space-y-12 min-h-screen">
                <header className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800">Offcanvas Component</h1>
                    <p className="text-lg text-gray-600 mt-2">
                        Used to display hidden content like menus or sidebars that slide in from the side.
                    </p>
                </header>

                <div className="max-w-4xl mx-auto space-y-10">

                    {/* Basic */}
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">Basic Example Offcanvas</h2>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex space-x-4">
                                <Button onClick={handleLeftOpen}>Open Offcanvas</Button>
                            </div>
                        </div>
                    </div>

                    {/* Custom Class */}
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">With Custom Class</h2>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex space-x-4">
                                <Button onClick={handleRightOpen}>Open OffCanvas</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Offcanvas
                isOpen={isRightOpen}
                onClose={handleRightClose}
                title="Right Offcanvas"
                position="right"
                className='bg-primary/50'
                titleClassName='text-2xl font-bold text-white'
                closeButtonClassName='text-white hover:text-white/20'
            >
                <div className="text-white">
                    <p>This is the content of the offcanvas with that slides in from the right.</p>
                    <p>You can put any content here, such as text, forms, or other components.</p>
                </div>
            </Offcanvas>

            <Offcanvas
                isOpen={isLeftOpen}
                onClose={handleLeftClose}
                title="Left Offcanvas"
                position="left"
            >
                <p>This is the content of the offcanvas that slides in from the left.</p>
            </Offcanvas>
        </>
    );
};

export default OffcanvasPage;
