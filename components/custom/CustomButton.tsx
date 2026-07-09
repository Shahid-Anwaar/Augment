// components/CustomButton.tsx

"use client";

import { Icon } from "@iconify/react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "contained" | "outlined" | "closed";

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text?: string;
    children?: ReactNode;
    variant?: ButtonVariant;
    icon?: string;
    showIcon?: boolean;
    iconClassName?: string;
    iconWidth?: string | number;
    iconHeight?: string | number;
};

export default function CustomButton({
    text,
    children,
    variant = "contained",
    icon = "solar:phone-linear",
    showIcon = false,
    iconClassName = "shrink-0",
    iconWidth = 19,
    iconHeight = 19,
    className = "",
    type = "button",
    ...props
}: CustomButtonProps) {
    const buttonClass =
        variant === "outlined"
            ? "outlined-btn"
            : variant === "contained"
              ? "contained-btn"
              : "closed-btn";

    return (
        <button
            type={type}
            className={`btn-base ${buttonClass} ${className}`}
            {...props}
        >
            {children ?? text}

            {showIcon && (
                <Icon
                    icon={icon}
                    width={iconWidth}
                    height={iconHeight}
                    className={iconClassName}
                />
            )}
        </button>
    );
}