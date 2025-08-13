import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 w-full items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <div className="relative h-8 w-8">
            <Image
              src="/logo.png"
              alt="Creative Feline Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-bold">Creative Feline</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link
            href="/solutions"
            className="transition-colors hover:text-primary"
          >
            Solutions
          </Link>
          <Link
            href="/industries"
            className="transition-colors hover:text-primary"
          >
            Industries
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/creativefeline"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Button variant="ghost" size="sm">
            Contact
          </Button>
          <Button size="sm">Get a Demo</Button>
        </div>
      </div>
    </header>
  );
}
