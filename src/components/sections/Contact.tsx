import { Mail, Linkedin } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Contact() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section id="contact" ref={ref} className="py-20 sm:py-24 lg:py-32 px-4">
      <div className="container mx-auto max-w-2xl">
        <div
          className={cn(
            "transition-all duration-700 ease-out text-center",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let’s Connect
          </h2>

          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Have an opportunity, project idea, or just want to say hi? Let’s
            connect on LinkedIn.
          </p>

          {/* LinkedIn Button */}
          <div className="flex justify-center mb-8">
            <a
              href="https://www.linkedin.com/in/thasleempm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="
                  px-8 py-6 rounded-xl
                  transition-all duration-300 ease-out
                  hover:scale-105 active:scale-95
                  shadow-xl
                "
              >
                <Linkedin className="h-5 w-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </a>
          </div>

          {/* Optional Email */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Mail className="h-5 w-5" />
            <a
              href="mailto:mohammedthasleempm@gmail.com"
              className="hover:text-primary transition-colors"
            >
              mohammedthasleempm@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
