import { Avatar } from '../components'
import { AvatarGroup } from '../components'
import Container from './Container'

const AvatarPage = () => {

    return (
        <Container title={'Avatar Component'} description='Displays a profile image, initials, or status indicator.'>

            {/* Sizes */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">Sizes</h2>
                <div className="flex items-center gap-4 p-4">
                    <Avatar imageSrc="https://avatar.iran.liara.run/public" size="sm" fallbackName="AL" />
                    <Avatar imageSrc="https://avatar.iran.liara.run/public" size="md" fallbackName="BK" />
                    <Avatar imageSrc="https://avatar.iran.liara.run/public" size="lg" fallbackName="CP" />
                </div>
            </section>

            {/* Variant */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">Variant</h2>
                <div className="flex items-center gap-4 p-4">
                    <Avatar imageSrc="https://avatar.iran.liara.run/public" variant="outline" fallbackName="AL" className='border-info' />
                    <Avatar imageSrc="https://avatar.iran.liara.run/public" variant="solid" fallbackName="BK" />
                </div>
            </section>

            {/* Shape */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">Shape</h2>
                <div className="flex items-center gap-4 p-4">
                    <Avatar imageSrc="https://i.pravatar.cc/300" shape='cornered' fallbackName="AL" />
                    <Avatar imageSrc="https://i.pravatar.cc/300" shape='rounded' fallbackName="BK" />
                    <Avatar imageSrc="https://i.pravatar.cc/300" shape='sharp' fallbackName="BK" />
                </div>
            </section>

            {/* With Fallback */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">Fallback Initials</h2>
                <div className="flex items-center gap-4 p-4">
                    <Avatar fallbackName="John Doe" />
                    <Avatar fallbackName="Jane Smith" fallbackColor="info" />
                    <Avatar fallbackName="Anna Lin" fallbackColor="error" />
                </div>
            </section>

            {/* With Status */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">With Status</h2>
                <div className="flex items-center gap-4 p-4">
                    <Avatar imageSrc='https://avatar.iran.liara.run/public' fallbackName="Online" status="online" />
                    <Avatar imageSrc='https://avatar.iran.liara.run/public' fallbackName="Offline" status="offline" />
                </div>
            </section>

            {/* With Ring */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">With Ring</h2>
                <div className="flex items-center gap-4 p-4">
                    <Avatar fallbackName="Ringed" ring />
                    <Avatar fallbackName="Custom Ring" ring ringClassName="ring-pink-500" />
                </div>
            </section>

            {/* AvatarGroup */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">Avatar Group</h2>
                <div className="p-4">
                    <AvatarGroup
                        size="md"
                        avatars={[
                            { fallbackName: "Alice", imageSrc: "https://avatar.iran.liara.run/public" },
                            { fallbackName: "Bob", imageSrc: "https://avatar.iran.liara.run/public" },
                            { fallbackName: "Charlie", imageSrc: "https://avatar.iran.liara.run/public" },
                            { fallbackName: "Diana" },
                        ]}
                        maxVisible={3}
                    />
                </div>
            </section>

            {/* Image Not Found (Fallback Test) */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">Broken Image (Fallback Test)</h2>
                <div className="flex items-center gap-4 p-4">
                    <Avatar imageSrc="/does-not-exist.jpg" fallbackName="Broken" />
                </div>
            </section>

        </Container>
    )
}

export default AvatarPage
