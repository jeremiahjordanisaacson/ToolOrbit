interface HowToUseProps {
  steps: string[];
  toolName: string;
}

export default function HowToUse({ steps, toolName }: HowToUseProps) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">
        How to Use the {toolName}
      </h2>
      <ol className="list-inside list-decimal space-y-2 text-gray-600">
        {steps.map((step, index) => (
          <li key={index} className="leading-relaxed">
            {step}
          </li>
        ))}
      </ol>
    </section>
  );
}
