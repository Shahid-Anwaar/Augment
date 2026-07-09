// components/CustomLinkButton.tsx

import Link from "next/link";
import { Icon } from "@iconify/react";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonVariant = "contained" | "outlined" | "closed";

type CustomLinkProps = {
    href?: string;
    text?: string;
    children?: ReactNode;
    variant?: ButtonVariant;
    icon?: string;
    showIcon?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export default function CustomLink({
    href,
    text,
    children,
    variant = "contained",
    icon = "solar:phone-linear",
    showIcon = false,
    className = "",
    onClick,
}: CustomLinkProps) {

    const buttonClass =
        variant === "outlined" ? "outlined-btn" :
            variant === "contained" ? "contained-btn" : "closed-btn";

    return (
        <Link
            href={href || ""}
            onClick={onClick}
            className={`btn-base ${buttonClass} ${className}`}
        >
            {children || text}

            {showIcon && (
                <Icon
                    icon={icon}
                    width="19"
                    height="19"
                    className="shrink-0"
                />
            )}
        </Link>
    );
}