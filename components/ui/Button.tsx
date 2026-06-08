import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "outline" | "brown";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  className = "",
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 cursor-pointer";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-[#1B3A5C] text-white hover:bg-[#122740] shadow-sm hover:shadow-md",
    outline:
      "border border-[#1B3A5C] text-[#1B3A5C] hover:bg-[#1B3A5C] hover:text-white",
    brown:
      "bg-[#8B5E3C] text-white hover:bg-[#6B4423] shadow-sm hover:shadow-md",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
