import { useState } from 'react';
import { BottomNavbar, BottomNavbarAction } from '../components'
import Container from './Container'

function BottomNavbarPage() {
    const [value, setValue] = useState("home");

    return (
        <Container title='BottomNavbar Component' description='A simple bottom navigation bar.'>
            <p className="mb-4 dark:text-white">Scroll down to see the BottomNavbar in action.</p>
            <div className="h-screen bg-gray-300 dark:bg-gray-600" />

            <BottomNavbar value={value} onChangeValue={setValue}>

                <BottomNavbarAction
                    icon={
                        <svg className="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                    }
                    label="Home"
                    value="home"
                />
                <BottomNavbarAction
                    icon={
                        <svg className="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                    }
                    label="Profile"
                    value="profile"
                />
                <BottomNavbarAction
                    icon={
                        <svg className="w-5 h-5 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V-2.25m6 13.5V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M16 19v-2.25" />
                        </svg>
                    }
                    label="Settings"
                    value="settings"
                />

            </BottomNavbar>

        </Container>
    )
}

export default BottomNavbarPage
