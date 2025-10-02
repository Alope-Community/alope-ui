import { useState } from 'react'
import { Button, Tooltip } from '../components'
import Container from './Container'

const TooltipPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Container title='Tooltip Component' description='Tooltips provide helpful hints or additional information on hover or focus.'>

            {/* Placements */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">Placements</h2>
                <div className="flex flex-wrap gap-4">
                    <Tooltip text='Top placement' placement='top'><Button>To</Button></Tooltip>
                    <Tooltip text='Bottom placement' placement='bottom'><Button>Bottom</Button></Tooltip>
                    <Tooltip text='Left placement' placement='left'><Button>Left</Button></Tooltip>
                    <Tooltip text='Right placement' placement='right'><Button>Right</Button></Tooltip>
                </div>
            </div>

            {/* No Arrow */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">No Arrow</h2>
                <div className="flex flex-wrap gap-4">
                    <Tooltip text='No arrow here' showArrow={false}>
                        <Button>No Arrow</Button>
                    </Tooltip>
                </div>
            </div>

            {/* Custom Offset */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">Custom Offset</h2>
                <div className="flex flex-wrap gap-4">
                    <Tooltip text='Offset of 20px' offset={20}>
                        <Button>Offset 20px</Button>
                    </Tooltip>
                </div>
            </div>

            {/* Custom Background */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">Custom Background</h2>
                <div className="flex flex-wrap gap-4">
                    <Tooltip text='Custom background' bgColor='bg-blue-500'>
                        <Button>Blue Background</Button>
                    </Tooltip>
                </div>
            </div>

            {/* Disabled */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">Disabled</h2>
                <div className="flex flex-wrap gap-4">
                    <Tooltip text='You should not see this' disabled>
                        <Button>Disabled</Button>
                    </Tooltip>
                </div>
            </div>

            {/* Controlled */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">Controlled</h2>
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
                <h2 className="text-xl font-semibold dark:text-white">Animation Duration</h2>
                <div className="flex flex-wrap gap-4">
                    <Tooltip text='Animation of 1s' animationDuration={1000}>
                        <Button>Animation 1s</Button>
                    </Tooltip>
                </div>
            </div>

            {/* Delay */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">Delay</h2>
                <div className="flex flex-wrap gap-4">
                    <Tooltip text='Delayed tooltip' delay={1000}>
                        <Button>Delay 1s</Button>
                    </Tooltip>
                </div>
            </div>

        </Container>
    )
}

export default TooltipPage
