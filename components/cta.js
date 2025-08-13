import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="flex w-full flex-col items-center gap-4 py-24 text-center px-4 sm:px-6 lg:px-8 md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Ready to revolutionize your business?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Join leading companies who trust Creative Feline to drive their digital transformation and stay ahead in the
          rapidly evolving tech landscape.
        </p>
        <Button size="lg" className="mt-4">
          Get Started Today
        </Button>
      </div>
    </section>
  )
}
