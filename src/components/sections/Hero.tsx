import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const handleViewProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactMe = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto text-center max-w-4xl animate-fade-in">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
          Welcome to my portfolio
        </p>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4">
          UI/UX Engineer | Frontend Developer | Designer
        </p>
        
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          I craft beautiful, performant web experiences with a focus on clean code, 
          intuitive design, and exceptional user experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg" onClick={handleViewProjects} className="min-w-[160px]">
            View Projects
          </Button>
          <Button size="lg" variant="outline" onClick={handleContactMe} className="min-w-[160px]">
            Contact Me
          </Button>
        </div>

        <button
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
