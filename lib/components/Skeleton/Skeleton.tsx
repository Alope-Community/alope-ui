import React from "react";

export type SkeletonProps = {
    width?: string;
    height?: string;
    rounded?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
    animode?: "shimmer" | "flash";
};

export const Skeleton: React.FC<SkeletonProps> = ({
    width,
    height,
    rounded = false,
    isLoading = true,
    animode = "flash",
    children,
}) => {
    if (!isLoading) {
        return <>{children}</>;
    }

    const style: React.CSSProperties = {
        width: width ?? "fit-content",
        height: height ?? (children ? "auto" : "1rem"),
    };

    if (children) {
        return (
            <>
                {React.Children.map(children, (child, i) => (
                    <div
                        key={i}
                        className={`${animode} ${rounded ? "rounded-full" : "rounded-sm"
                            } mb-1`}
                        style={style}
                    >
                        <span className="invisible">{child}</span>
                    </div>
                ))}
            </>
        );
    }
    
    return (
        <div
            className={`${animode} ${rounded ? "rounded-full" : "rounded-sm"}`}
            style={style}
        />
    );
};
