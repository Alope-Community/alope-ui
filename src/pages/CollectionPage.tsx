import { useState } from "react";
import { Avatar, Collection } from "../components"
import Container from "./Container";
import { cn } from "clsx-for-tailwind";

const sampleData = [
    { id: 1, name: 'John Doe', description: 'Software Engineer', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d' },
    { id: 2, name: 'Jane Doe', description: 'UI/UX Designer', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
    { id: 3, name: 'Peter Jones', description: 'Project Manager', avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d' },
];

const CollectionPage = () => {
    const [active, setActive] = useState<any>(1);

    return (
        <Container title="Collection Component" description="A component to display a collection of items.">

            {/* Simple */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">Simple</h2>
                <div className="flex flex-wrap gap-4">
                    <Collection data={sampleData} title="My Collection" />
                </div>
            </div>

            {/* Custom Children */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">Custom Children</h2>
                <div className="flex flex-wrap gap-4">
                    <Collection data={sampleData} title="My Collection">
                        {(item) => (
                            <div className="p-4 border rounded-md mb-2">
                                <p className="font-bold">{item.name}</p>
                                <p>{item.description}</p>
                            </div>
                        )}
                    </Collection>
                </div>
            </div>

            {/* With Active State */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">With Active State</h2>
                <div className="flex flex-wrap gap-4">
                    <Collection data={sampleData} title="My Collection" activeItem={active}>
                        {(item, _, isActive) => (
                            <div onClick={() => setActive(item.id)} className={cn("p-4 border rounded-md mb-2 cursor-pointer", { "bg-primary border-primary-700 text-white dark:bg-primary-dark dark:border-primary-dark-700": isActive })}>
                                <p className="font-bold">{item.name}</p>
                                <p>{item.description}</p>
                            </div>
                        )}
                    </Collection>
                </div>
            </div>

            {/* With Icon */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">With Icon</h2>
                <div className="flex flex-wrap gap-4">
                    <Collection
                        data={sampleData}
                        activeItem={active}
                        onChangeActive={(item) => setActive(item.id)}
                        suffixIcon={(_, __, isActive) => <div>{isActive ? "✅" : "➕"}</div>}
                    />
                </div>
            </div>

            {/* With Avatar and Suffix Icon */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold dark:text-white">With Avatar and Suffix Icon</h2>
                <div className="flex flex-wrap gap-4">
                    <Collection
                        data={sampleData}
                        title="My Team"
                        activeItem={active}
                        onChangeActive={(item) => setActive(item.id)}
                    >
                        {(item, _, isActive) => (
                            <div className="flex items-center justify-between gap-3 p-3 border border-secondary-700 dark:border-secondary-dark-700 rounded-md cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <Avatar imageSrc={item.avatar} alt={item.name} />
                                    <div>
                                        <p className="font-bold">{item.name}</p>
                                        <p className="text-sm text-secondary-700 dark:text-secondary-dark-700">{item.description}</p>
                                    </div>
                                </div>
                                {/* Favorite Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill={isActive ? "currentColor" : "none"}
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={cn("w-5 h-5", isActive ? "text-yellow-400" : "text-secondary-500")}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.48 3.499a.7.7 0 011.04 0l2.31 4.68 5.17.75c.59.09.83.81.4 1.22l-3.74 3.65.88 5.14c.1.58-.52 1.03-1.05.76L12 17.77l-4.63 2.44c-.53.28-1.15-.18-1.05-.76l.88-5.14-3.74-3.65c-.43-.41-.19-1.13.4-1.22l5.17-.75 2.31-4.68z"
                                    />
                                </svg>
                            </div>
                        )}
                    </Collection>

                </div>
            </div>

        </Container>
    )
}

export default CollectionPage