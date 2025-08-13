import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="flex w-full flex-col gap-8 py-8 px-4 sm:px-6 lg:px-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-2">
            <div className="relative h-8 w-8">
              <Image
                src="/logo.png"
                alt="Creative Feline Logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="font-bold">Creative Feline</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Unleashing creative software solutions for the digital age.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/ai-analytics"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  AI Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/cloud-services"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Cloud Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/creativefeline"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com/creativefeline"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/company/creativefeline"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Creative Feline. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
