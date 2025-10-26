import { Button, Card } from "../components"
import { useTheme } from "../context/ThemeContext"
import Container from "./Container"

const CardPage = () => {
    const { theme } = useTheme()

    return (
        <Container title="Card Component" description="Used to group related content like text, images, and actions in a single container.">

            {/* Basic */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">Basic Example Card</h2>
                <div className="flex flex-wrap gap-4">
                    <Card
                        image={theme === 'dark' ? "https://placehold.co/600x400/000000/FFFFFF/png" : "https://placehold.co/600x400/"}
                        title="This is Card"
                        description="A card is used to display a collection of related items."
                    />
                </div>
            </div>

            {/* With Footer */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">With Footer</h2>
                <div className="flex flex-wrap gap-4">
                    <Card
                        image={theme === 'dark' ? "https://placehold.co/600x400/000000/FFFFFF/png" : "https://placehold.co/600x400/"}
                        title="This is Card"
                        description="A card is used to display a collection of related items."
                        footer={<button className="text-sm text-info hover:underline">Read More</button>}
                    />
                </div>
            </div>

            {/* With Ribbon */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">With Ribbon</h2>
                <div className="flex flex-wrap gap-4">
                    <Card
                        image={theme === 'dark' ? "https://placehold.co/600x400/000000/FFFFFF/png" : "https://placehold.co/600x400/"}
                        title="This is Card"
                        ribbon="35% Off"
                        description="A card is used to display a collection of related items."
                        footer={<button className="text-sm text-info hover:underline">Read More</button>}
                    />
                </div>
            </div>

            {/* With Ribbon on Horizontal Card*/}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">With Ribbon on Horizontal Card</h2>
                <div className="flex flex-wrap gap-4">
                    <Card
                        horizontal
                        image={theme === 'dark' ? "https://placehold.co/600x400/000000/FFFFFF/png" : "https://placehold.co/600x400/"}
                        title="This is Card"
                        ribbon="35% Off"
                        description="A card is used to display a collection of related items."
                        footer={<button className="text-sm text-info hover:underline">Read More</button>}
                    />
                </div>
            </div>

            {/* Horizontal Card */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">Horizontal Card</h2>
                <div className="flex flex-wrap gap-4">
                    <Card
                        horizontal
                        image={theme === 'dark' ? "https://placehold.co/600x400/000000/FFFFFF/png" : "https://placehold.co/600x400/"}
                        title="This is Card"
                        description="A card is used to display a collection of related items."
                        footer={<button className="text-sm text-info hover:underline">Read More</button>}
                    />
                </div>
            </div>

            {/* With Custom Class */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">With Custom Class</h2>
                <div className="flex flex-wrap gap-4">
                    <Card
                        image={theme === 'dark' ? "https://placehold.co/600x400/000000/FFFFFF/png" : "https://placehold.co/600x400/"}
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

        </Container>
    )
}

export default CardPage