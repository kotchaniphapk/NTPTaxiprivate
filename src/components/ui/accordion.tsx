"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "./utils";

interface AccordionContextValue {
  value: string | string[];
  onValueChange: (value: string) => void;
  type: "single" | "multiple";
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

function useAccordionContext() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within Accordion");
  }
  return context;
}

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  collapsible?: boolean;
}

function Accordion({
  type = "single",
  defaultValue,
  value: controlledValue,
  onValueChange,
  collapsible = false,
  className,
  children,
  ...props
}: AccordionProps) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState<string | string[]>(
    defaultValue || (type === "multiple" ? [] : "")
  );
  
  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue;
  const isControlled = controlledValue !== undefined;

  const handleValueChange = React.useCallback((itemValue: string) => {
    if (type === "single") {
      const newValue = value === itemValue && collapsible ? "" : itemValue;
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
      onValueChange?.(newValue as string);
    } else {
      const currentValue = Array.isArray(value) ? value : [];
      const newValue = currentValue.includes(itemValue)
        ? currentValue.filter((v) => v !== itemValue)
        : [...currentValue, itemValue];
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
      onValueChange?.(newValue);
    }
  }, [type, value, collapsible, isControlled, onValueChange]);

  const contextValue = React.useMemo(
    () => ({
      value,
      onValueChange: handleValueChange,
      type,
    }),
    [value, handleValueChange, type]
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      <div data-slot="accordion" className={className} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

const AccordionItemContext = React.createContext<{ value: string } | null>(null);

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

function AccordionItem({ className, value, children, ...props }: AccordionItemProps) {
  const { value: accordionValue } = useAccordionContext();
  const isOpen = Array.isArray(accordionValue)
    ? accordionValue.includes(value)
    : accordionValue === value;

  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div
        data-slot="accordion-item"
        data-state={isOpen ? "open" : "closed"}
        className={cn("border-b last:border-b", className)}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

function useAccordionItemContext() {
  const context = React.useContext(AccordionItemContext);
  if (!context) {
    throw new Error("AccordionTrigger and AccordionContent must be used within AccordionItem");
  }
  return context;
}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string;
}

function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  const { value: accordionValue, onValueChange } = useAccordionContext();
  const { value: itemValue } = useAccordionItemContext();
  const isOpen = Array.isArray(accordionValue)
    ? accordionValue.includes(itemValue)
    : accordionValue === itemValue;

  return (
    <div className="flex">
      <button
        type="button"
        data-slot="accordion-trigger"
        data-state={isOpen ? "open" : "closed"}
        onClick={() => onValueChange(itemValue)}
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
          isOpen && "[&>svg]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </button>
    </div>
  );
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
}

function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  const { value: accordionValue } = useAccordionContext();
  const { value: itemValue } = useAccordionItemContext();
  const isOpen = Array.isArray(accordionValue)
    ? accordionValue.includes(itemValue)
    : accordionValue === itemValue;

  return (
    <div
      data-slot="accordion-content"
      data-state={isOpen ? "open" : "closed"}
      className={cn(
        "overflow-hidden text-sm transition-all",
        isOpen ? "animate-accordion-down" : "animate-accordion-up",
        className
      )}
      {...props}
    >
      {isOpen && <div className={cn("pt-0 pb-4")}>{children}</div>}
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
