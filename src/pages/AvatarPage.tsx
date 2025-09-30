import { useNavigate } from 'react-router-dom'
import { Avatar } from '../components'
import { AvatarGroup } from '../components'
import { Button } from '../components'

const AvatarPage = () => {
    const navigate = useNavigate()

    return (
        <div className="p-10 space-y-12 min-h-screen bg-gradient-to-br from-primary/25 via-white to-blue-100">

            {/* Back Button */}
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

            {/* Header */}
            <header className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">Avatar Component</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Displays a profile image, initials, or status indicator.
                </p>
            </header>

            <div className="max-w-4xl mx-auto space-y-10">

                {/* Sizes */}
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">Sizes</h2>
                    <div className="flex items-center gap-4 p-4">
                        <Avatar imageSrc="https://avatar.iran.liara.run/public" size="sm" fallbackName="AL" />
                        <Avatar imageSrc="https://avatar.iran.liara.run/public" size="md" fallbackName="BK" />
                        <Avatar imageSrc="https://avatar.iran.liara.run/public" size="lg" fallbackName="CP" />
                    </div>
                </section>

                {/* Variant */}
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">Variant</h2>
                    <div className="flex items-center gap-4 p-4">
                        <Avatar imageSrc="https://avatar.iran.liara.run/public" variant="outline" fallbackName="AL" className='border-info'/>
                        <Avatar imageSrc="https://avatar.iran.liara.run/public" variant="solid" fallbackName="BK" />
                    </div>
                </section>

                {/* Shape */}
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">Shape</h2>
                    <div className="flex items-center gap-4 p-4">
                        <Avatar imageSrc="https://i.pravatar.cc/300" shape='cornered' fallbackName="AL"/>
                        <Avatar imageSrc="https://i.pravatar.cc/300" shape='rounded' fallbackName="BK" />
                        <Avatar imageSrc="https://i.pravatar.cc/300" shape='sharp' fallbackName="BK" />
                    </div>
                </section>

                {/* With Fallback */}
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">Fallback Initials</h2>
                    <div className="flex items-center gap-4 p-4">
                        <Avatar fallbackName="John Doe" />
                        <Avatar fallbackName="Jane Smith" fallbackColor="info" />
                        <Avatar fallbackName="Anna Lin" fallbackColor="error" />
                    </div>
                </section>

                {/* With Status */}
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">With Status</h2>
                    <div className="flex items-center gap-4 p-4">
                        <Avatar imageSrc='https://avatar.iran.liara.run/public' fallbackName="Online" status="online" />
                        <Avatar imageSrc='https://avatar.iran.liara.run/public' fallbackName="Offline" status="offline" />
                    </div>
                </section>

                {/* With Ring */}
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">With Ring</h2>
                    <div className="flex items-center gap-4 p-4">
                        <Avatar fallbackName="Ringed" ring />
                        <Avatar fallbackName="Custom Ring" ring ringClassName="ring-pink-500" />
                    </div>
                </section>

                {/* AvatarGroup */}
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">Avatar Group</h2>
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
                    <h2 className="text-xl font-semibold">Broken Image (Fallback Test)</h2>
                    <div className="flex items-center gap-4 p-4">
                        <Avatar imageSrc="/does-not-exist.jpg" fallbackName="Broken" />
                    </div>
                </section>

            </div>
        </div>
    )
}

export default AvatarPage
