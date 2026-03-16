interface HowToUseProps {
  steps: string[];
  toolName: string;
}

export default function HowToUse({ steps, toolName }: HowToUseProps) {
  return (
    <section className="mb-10">
      <h2 className="mb-5 text-lg font-semibold text-surface-900">
        How to Use the {toolName}
      </h2>
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-50 text-xs font-bold text-primary-600">
              {index + 1}
            </span>
            <p className="pt-0.5 text-sm leading-relaxed text-surface-600">
              {step}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
