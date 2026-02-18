import { ExternalLink, Github } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 px-4 bg-muted/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className={cn(
            "transition-all duration-700 ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A selection of my recent work showcasing various skills and
            technologies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-stretch">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={cn(
                  "flex flex-col h-full overflow-hidden transition-all duration-500 ease-out hover:shadow-lg hover:-translate-y-1 group",
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col flex-1">
                  <CardDescription className="text-muted-foreground mb-5">
                    {project.description}
                  </CardDescription>

                  {/* Tech Stack */}
                  <div className="flex flex-col flex-1 justify-end">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs px-2 py-0.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col min-[400px]:flex-row gap-2 pt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 py-1"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 py-1"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-1" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
