"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Analytics Dashboard",
    description:
      "A comprehensive analytics platform powered by machine learning algorithms for real-time data insights.",
    image: "/placeholder.svg?height=200&width=400&text=AI+Analytics+Dashboard",
    tags: ["React", "Python", "TensorFlow", "PostgreSQL"],
    liveUrl: "https://analytics.creativefeline.com",
    githubUrl: "https://github.com/creativefeline/ai-analytics",
    featured: true,
  },
  {
    id: 2,
    title: "Cloud Migration Tool",
    description:
      "Seamless cloud migration solution that helps businesses transition their infrastructure with zero downtime.",
    image: "/placeholder.svg?height=200&width=400&text=Cloud+Migration+Tool",
    tags: ["Node.js", "AWS", "Docker", "Kubernetes"],
    liveUrl: "https://cloudmigrate.creativefeline.com",
    githubUrl: "https://github.com/creativefeline/cloud-migrate",
    featured: false,
  },
  {
    id: 3,
    title: "Security Audit Platform",
    description:
      "Enterprise-grade security auditing tool that identifies vulnerabilities and provides actionable recommendations.",
    image: "/placeholder.svg?height=200&width=400&text=Security+Audit+Platform",
    tags: ["Go", "Redis", "MongoDB", "GraphQL"],
    liveUrl: "https://security.creativefeline.com",
    githubUrl: "https://github.com/creativefeline/security-audit",
    featured: true,
  },
  {
    id: 4,
    title: "Performance Optimizer",
    description:
      "High-performance optimization suite that improves application speed and reduces resource consumption.",
    image: "/placeholder.svg?height=200&width=400&text=Performance+Optimizer",
    tags: ["Rust", "WebAssembly", "C++", "LLVM"],
    liveUrl: "https://optimizer.creativefeline.com",
    githubUrl: "https://github.com/creativefeline/performance-optimizer",
    featured: false,
  },
  {
    id: 5,
    title: "DevOps Automation Suite",
    description:
      "Complete DevOps automation platform that streamlines CI/CD pipelines and infrastructure management.",
    image: "/placeholder.svg?height=200&width=400&text=DevOps+Automation+Suite",
    tags: ["Jenkins", "Terraform", "Ansible", "GitLab"],
    liveUrl: "https://devops.creativefeline.com",
    githubUrl: "https://github.com/creativefeline/devops-suite",
    featured: false,
  },
  {
    id: 6,
    title: "Blockchain Integration API",
    description:
      "Robust blockchain integration service that enables secure and scalable decentralized applications.",
    image:
      "/placeholder.svg?height=200&width=400&text=Blockchain+Integration+API",
    tags: ["Solidity", "Web3.js", "Ethereum", "IPFS"],
    liveUrl: "https://blockchain.creativefeline.com",
    githubUrl: "https://github.com/creativefeline/blockchain-api",
    featured: true,
  },
];

export default function Projects() {
  return (
    <section className="w-full space-y-16 py-24 px-4 sm:px-6 lg:px-8 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Our Featured Projects
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg max-w-2xl mx-auto">
          Explore our portfolio of innovative solutions that have transformed
          businesses across various industries.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group relative overflow-hidden border bg-background transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
          >
            <div className="relative overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={200}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {project.featured && (
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                  Featured
                </Badge>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-black transition-colors hover:bg-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-black transition-colors hover:bg-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <CardHeader className="pb-3">
              <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="line-clamp-2">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{project.tags.length - 3}
                  </Badge>
                )}
              </div>
            </CardContent>

            {/* Clickable overlay */}
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
            >
              <span className="sr-only">View {project.title}</span>
            </Link>
          </Card>
        ))}
      </div>

      <div className="text-center px-4 sm:px-6">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}
