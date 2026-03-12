interface AdSlotProps {
  slot: "top" | "sidebar" | "in-content" | "bottom";
  className?: string;
}

export default function AdSlot({ slot, className = "" }: AdSlotProps) {
  if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS) {
    return null;
  }

  return (
    <div
      className={`flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 text-xs text-gray-400 ${className}`}
      role="complementary"
      aria-label="Advertisement placeholder"
      data-ad-slot={slot}
    >
      <span>Ad Slot: {slot}</span>
    </div>
  );
}
