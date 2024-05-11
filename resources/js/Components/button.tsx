interface IButton {
    bgColor?: string;
    hoverBgColor?: string;
    activeBgColor?: string;
    textColor?: string;
    rounded?: string;
    type?: "button" | "submit";
    onClick?: any;
    custom?: any;
    children: any;
}

export default function Button({
    bgColor = "bg-green-500",
    hoverBgColor = "hover:bg-green-600",
    activeBgColor = "active:bg-green-400",
    textColor = "text-white",
    rounded = "rounded-lg",
    type = "button",
    onClick = null,
    custom = "",
    children,
}: IButton) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-6 py-2.5 capitalize items-center justify-center ${textColor} ${rounded} ${bgColor} ${hoverBgColor} ${activeBgColor} ${custom}`}
        >
            {children}
        </button>
    );
}
