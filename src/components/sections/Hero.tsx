import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/profile_avatar.jpg";

export function Hero() {
  const handleViewProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactMe = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-4 px-4">
      <div className="container mx-auto text-center max-w-4xl animate-fade-in">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6 mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-0 md:mb-6 lg:mb-6  leading-tight">
            Hi, I'm <span className="text-primary">Mohammed Thasleem</span>
          </h1>
          <img
            src={avatar}
            alt="Mohammed Thasleem"
            className="
              w-28 h-28 
              sm:w-32 sm:h-32 
              md:w-36 md:h-36
              rounded-full 
              object-cover 
              shadow-lg
            "
          />
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4">
          Frontend Developer | UI/UX Designer
        </p>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          I craft beautiful, performant web experiences with a focus on clean
          code, intuitive design, and exceptional user experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            onClick={handleViewProjects}
            className="min-w-[160px]"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleContactMe}
            className="min-w-[160px]"
          >
            Contact Me
          </Button>
        </div>

        <button
          onClick={() =>
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
