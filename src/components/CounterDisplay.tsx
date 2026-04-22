interface CounterDisplayProps {
  count: number
}

export default function CounterDisplay({ count }: CounterDisplayProps) {
  return (
    <section className="flex flex-col items-center justify-center w-full mb-16 relative">
      <div className="absolute inset-0 bg-primary/5 rounded-[4rem] blur-3xl -z-10 w-full h-[300px]" />
      <div
        aria-live="polite"
        aria-atomic="true"
        className="text-[8rem] leading-none font-headline font-bold text-on-surface tracking-tighter tabular-nums select-none"
      >
        {count}
      </div>
    </section>
  )
}