import { Icon } from "@iconify/react";

type ArrowButtonProps = {
  direction: "left" | "right";
  mode?: "light" | "dark";
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

export default function ArrowButton({
  direction,
  mode = "dark",
  onClick,
  disabled = false,
  className = "",
}: ArrowButtonProps) {
  const isLight = mode === "light";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={
        direction === "left"
          ? "Previous instructors"
          : "Next instructors"
      }
      className={[
        "flex h-10 w-10 items-center justify-center rounded-full border",
        "transition-all duration-200",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16",

        isLight
          ? "border-black bg-[#f7f7f7] text-black hover:bg-white"
          : "border-white/65 bg-[#5a5a5a]/55 text-white backdrop-blur-sm hover:bg-[#6a6a6a]/70",

        className,
      ].join(" ")}
    >
      <Icon
        icon={
          direction === "left"
            ? "lucide:arrow-left"
            : "lucide:arrow-right"
        }
        className="h-4.5 w-4.5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
      />
    </button>
  );
}