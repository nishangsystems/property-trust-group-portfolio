import { cn } from "@/utils/cn";
import { createContext, useContext } from "react";
import type { ReactNode } from "react";

interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

export interface TabsProps {
  children?: ReactNode;
  className?: string;
  value: string;
  onValueChange: (value: string) => void;
}

export function Tabs({ children, className, value, onValueChange }: TabsProps) {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div className={cn(className)}>{children}</div>
    </TabsContext.Provider>
  );
}

// TabsList
interface TabsListProps {
  children: ReactNode;
  className?: string;
}

export function TabsList({ children, className }: TabsListProps) {
  return <div className={cn("flex justify-center flex-wrap gap-2", className)}>{children}</div>;
}

// TabsTrigger - WITH YOUR STYLES
interface TabsTriggerProps {
  children: ReactNode;
  value: string;
  className?: string;
}

export function TabsTrigger({ children, value, className }: TabsTriggerProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsTrigger must be used inside Tabs");

  const isActive = context.value === value;

  const baseClasses = "px-5 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap";
  
  const activeClasses = isActive
    ? "border-primary-400 bg-primary-400 text-bg-950"
    : "border-gold-glow-25 bg-transparent text-[#888880]";

  const activeStyle = {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 700,
    border: '1px solid rgb(212, 175, 55)',
    background: 'rgb(212, 175, 55)',
    color: 'rgb(6, 6, 6)'
  };

  const inactiveStyle = {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 700,
    border: '1px solid rgba(212, 175, 55, 0.25)',
    background: 'transparent',
    color: 'rgb(136, 136, 128)'
  };

  return (
    <button
      className={cn(baseClasses, activeClasses, className)}
      style={isActive ? activeStyle : inactiveStyle}
      onClick={() => context.onValueChange(value)}
    >
      {children}
    </button>
  );
}

// TabsContent
interface TabsContentProps {
  children: ReactNode;
  value: string;
  className?: string;
}

export function TabsContent({ children, value, className }: TabsContentProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsContent must be used inside Tabs");

  if (context.value !== value) return null;

  return <div className={cn("mt-3", className)}>{children}</div>;
}