import { cn } from "@/utils/cn";

type Variant = "primary" | "outline";
type Size = "sm" | "md" | "lg";
interface ButtonProps {
  size?: Size;
  variant?: Variant;
  className?: string;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
  loadingText?: string;
}

const Button = ({
  size = "md",
  variant = "primary",
  className,
  disabled = false,
  type = "button",
  children,
  onClick,
  isLoading = false,
  loadingText = "loading",
}: ButtonProps) => {
  const baseStyle =
    "flex items-center gap-5 justify-center text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105";
  const variants: Record<Variant, string> = {
    primary: "gold-gradient font-bold tracking-widest",
    outline: "font-semibold gap-2 px-3 h-10 rounded-full border  tracking-widest  disabled:opacity-60 disabled:cursor-not-allowed border-gold-glow-30 text-primary-400 hover:bg-gold-glow-10"
  };

  const sizes: Record<Size, string> = {
    sm: "h-8 rounded-md gap-1.5 px-3 text-sm",
    md: "px-8 py-4 ",
    lg: "h-10 rounded-md px-8 text-lg",
  };

  // border: 1px solid rgb(212, 175, 55); color: rgb(212, 175, 55); font-family: Raleway, sans-serif;
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={cn(baseStyle, variants[variant], sizes[size], className)}
    >
 {isLoading ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span>{loadingText || "Loading..."}</span>
        </div>
      ) : (
        children
      )}    </button>
  );
};

export default Button;
