import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function About() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section id="about" ref={ref} className="py-20 sm:py-24 lg:py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div
          className={cn(
            "transition-all duration-700 ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
            About Me
          </h2>

          <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
            <p>
              I'm a passionate{" "}
              <span className="text-foreground font-medium">
                Frontend Developer and UI/UX Designer
              </span>{" "}
              with a deep love for creating digital experiences that are both
              beautiful and functional. With years of experience in the
              industry, I've honed my skills in bridging the gap between design
              and development.
            </p>

            <p>
              My approach combines{" "}
              <span className="text-foreground font-medium">
                clean, maintainable code
              </span>{" "}
              with thoughtful user experience design. I believe that the best
              products come from understanding both the technical possibilities
              and the human needs they serve.
            </p>

            <p>
              I specialize in building responsive web applications using modern
              frameworks like
              <span className="text-foreground font-medium">
                {" "}
                React and TypeScript
              </span>
              , while ensuring accessibility, performance, and pixel-perfect
              implementation of designs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 pt-10 border-t border-border">
              <div>
                <h3 className="text-foreground font-semibold mb-2">
                  What I Value
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Clean, readable code</li>
                  <li>• User-centered design</li>
                  <li>• Performance optimization</li>
                  <li>• Continuous learning</li>
                </ul>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-2">My Focus</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Modern frameworks & tools</li>
                  <li>• Responsive design</li>
                  <li>• Accessibility (a11y)</li>
                  <li>• Design systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
