import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Tooltip } from '../components'

const TooltipPage = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

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
                <h1 className="text-4xl font-bold text-gray-800">Tooltip Component</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Tooltips provide helpful hints or additional information on hover or focus.
                </p>
            </header>

            <div className="max-w-4xl mx-auto space-y-10">

                {/* Placements */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Placements</h2>
                    <div className="flex flex-wrap gap-4">
                        <Tooltip text='Top placement' placement='top'><Button>Top</Button></Tooltip>
                        <Tooltip text='Bottom placement' placement='bottom'><Button>Bottom</Button></Tooltip>
                        <Tooltip text='Left placement' placement='left'><Button>Left</Button></Tooltip>
                        <Tooltip text='Right placement' placement='right'><Button>Right</Button></Tooltip>
                    </div>
                </div>

                {/* No Arrow */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">No Arrow</h2>
                    <div className="flex flex-wrap gap-4">
                        <Tooltip text='No arrow here' showArrow={false}>
                            <Button>No Arrow</Button>
                        </Tooltip>
                    </div>
                </div>

                {/* Custom Offset */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Custom Offset</h2>
                    <div className="flex flex-wrap gap-4">
                        <Tooltip text='Offset of 20px' offset={20}>
                            <Button>Offset 20px</Button>
                        </Tooltip>
                    </div>
                </div>

                {/* Custom Background */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Custom Background</h2>
                    <div className="flex flex-wrap gap-4">
                        <Tooltip text='Custom background' bgColor='bg-blue-500'>
                            <Button>Blue Background</Button>
                        </Tooltip>
                    </div>
                </div>

                {/* Disabled */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Disabled</h2>
                    <div className="flex flex-wrap gap-4">
                        <Tooltip text='You should not see this' disabled>
                            <Button>Disabled</Button>
                        </Tooltip>
                    </div>
                </div>

                {/* Controlled */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Controlled</h2>
                    <div className="flex flex-wrap gap-4">
                        <Tooltip text='Controlled tooltip' isOpen={isOpen} onOpenChange={setIsOpen}>
                            <Button onClick={() => setIsOpen(!isOpen)}>
                                Toggle Tooltip
                            </Button>
                        </Tooltip>
                    </div>
                </div>

                {/* Animation Duration */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Animation Duration</h2>
                    <div className="flex flex-wrap gap-4">
                        <Tooltip text='Animation of 1s' animationDuration={1000}>
                            <Button>Animation 1s</Button>
                        </Tooltip>
                    </div>
                </div>

                {/* Delay */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Delay</h2>
                    <div className="flex flex-wrap gap-4">
                        <Tooltip text='Delayed tooltip' delay={1000}>
                            <Button>Delay 1s</Button>
                        </Tooltip>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TooltipPage
