import React, { useState } from 'react';
import { Button, Offcanvas } from '../components';
import Container from './Container';

const OffcanvasPage: React.FC = () => {
    const [isRightOpen, setIsRightOpen] = useState(false);
    const [isLeftOpen, setIsLeftOpen] = useState(false);

    const handleRightOpen = () => setIsRightOpen(true);
    const handleRightClose = () => setIsRightOpen(false);

    const handleLeftOpen = () => setIsLeftOpen(true);
    const handleLeftClose = () => setIsLeftOpen(false);

    return (
        <>
            <Container title='Offcanvas Component' description='Used to display hidden content like menus or sidebars that slide in from the side.'>

                {/* Basic */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold dark:text-white">Basic Example Offcanvas</h2>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex space-x-4">
                            <Button onClick={handleLeftOpen}>Open Offcanvas</Button>
                        </div>
                    </div>
                </div>

                {/* Custom Class */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold dark:text-white">With Custom Class</h2>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex space-x-4">
                            <Button onClick={handleRightOpen}>Open OffCanvas</Button>
                        </div>
                    </div>
                </div>

            </Container>

            <Offcanvas
                isOpen={isRightOpen}
                onClose={handleRightClose}
                title="Right Offcanvas"
                position="right"
                className='bg-primary-700 dark:bg-primary-700'
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
                <p className='dark:text-white'>This is the content of the offcanvas that slides in from the left.</p>
            </Offcanvas>
        </>
    );
};

export default OffcanvasPage;
