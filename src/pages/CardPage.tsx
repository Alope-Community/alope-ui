import { Button, Card } from "../components"

const CardPage = () => {
    return (
        <div className="p-10 space-y-12 min-h-screen">
            <header className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">Card Component</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Used to group related content like text, images, and actions in a single container.
                </p>
            </header>

            <div className="max-w-4xl mx-auto space-y-10">

                {/* Basic */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Basic Example Card</h2>
                    <div className="flex flex-wrap gap-4">
                        <Card
                            image="https://placehold.co/600x400"
                            title="This is Card"
                            description="A card is used to display a collection of related items."
                        />
                    </div>
                </div>

                {/* With Footer */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">With Footer</h2>
                    <div className="flex flex-wrap gap-4">
                        <Card
                            image="https://placehold.co/600x400"
                            title="This is Card"
                            description="A card is used to display a collection of related items."
                            footer={<button className="text-sm text-info hover:underline">Read More</button>}
                        />
                    </div>
                </div>

                {/* Horizontal Card */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Horizontal Card</h2>
                    <div className="flex flex-wrap gap-4">
                        <Card
                            horizontal
                            image="https://placehold.co/600x400"
                            title="This is Card"
                            description="A card is used to display a collection of related items."
                            footer={<button className="text-sm text-info hover:underline">Read More</button>}
                        />
                    </div>
                </div>

                {/* With Custom Class */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">With Custom Class</h2>
                    <div className="flex flex-wrap gap-4">
                        <Card
                            image="https://placehold.co/600x400"
                            title="This is Card"
                            titleClassName="text-2xl font-bold text-primary"
                            descriptionClassName="text-info"
                            description="A card is used to display a collection of related items."
                            footer={
                                <Button>
                                    Got It!
                                </Button>
                            }

                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardPage