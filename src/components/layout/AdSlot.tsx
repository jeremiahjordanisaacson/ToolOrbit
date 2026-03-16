interface AdSlotProps {
  slot: "top" | "sidebar" | "in-content" | "bottom";
  className?: string;
}

export default function AdSlot({ slot, className = "" }: AdSlotProps) {
  if (!process.env.NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS) {
    return null;
  }

  return (
    <div
      className={`flex items-center justify-center rounded border border-dashed border-surface-200 text-[10px] text-surface-300 ${className}`}
      role="complementary"
      aria-label="Advertisement placeholder"
      data-ad-slot={slot}
    >
      Ad
    </div>
  );
}
