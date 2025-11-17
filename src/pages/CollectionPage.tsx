import { useState } from "react";
import { Avatar, Collection, RadioInput } from "../components"
import Container from "./Container";
import { cn } from "clsx-for-tailwind";
import type { Variant, VariantType } from "../components/Collection/Collection";

const sampleData = [
    { id: 1, name: 'John Doe', description: 'Software Engineer', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d' },
    { id: 2, name: 'Jane Doe', description: 'UI/UX Designer', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
    { id: 3, name: 'Peter Jones', description: 'Project Manager', avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d' },
];

const variantOptions = [
    { label: 'Solid', value: 'solid' },
    { label: 'Subtle', value: 'subtle' },
    { label: 'Outline', value: 'outline' },
]

const variantTypeOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Success', value: 'success' },
    { label: 'Error', value: 'error' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
]

const CollectionPage = () => {
    const [active, setActive] = useState<any>(1);
    const [variant, setVariant] = useState<Variant>('subtle');
    const [variantType, setVariantType] = useState<VariantType>('primary');

    return (
        <Container title="Collection Component" description="A component to display a collection of items.">
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4">
                    <RadioInput
                        options={variantOptions}
                        selectedValue={{ label: variant, value: variant }}
                        onValueChange={(value) => setVariant(value.value as Variant)}
                        variant={variant}
                        variantType={variantType}
                    />
                </div>
                <div className="flex flex-wrap gap-4">
                    <RadioInput
                        options={variantTypeOptions}
                        selectedValue={{ label: variantType, value: variantType }}
                        onValueChange={(value) => setVariantType(value.value as VariantType)}
                        variant={variant}
                        variantType={variantType}
                    />
                </div>
            </div>

            <div className="mt-4">
                <Collection
                    data={sampleData}
                    title="My Team"
                    activeItem={active}
                    onChangeActive={(item) => setActive(item.id)}
                    variant={variant}
                    variantType={variantType}
                >
                    {(item, _, isActive) => (
                        <div className="flex w-full items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <Avatar imageSrc={item.avatar} alt={item.name} />
                                <div>
                                    <p className="font-bold">{item.name}</p>
                                    <p className={cn(
                                        "text-sm text-secondary-500 dark:text-secondary-300-dark",
                                        { 'text-secondary-200': variant === 'solid'},
                                    )}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                            {/* Favorite Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill={isActive ? "currentColor" : "none"}
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className={cn("w-5 h-5", isActive ? "text-warning-400" : "text-secondary-500")}
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
        </Container>
    )
}

export default CollectionPage