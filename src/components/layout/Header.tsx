import { Home, User, Layers, Briefcase, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const dockItems = [
  { icon: Home, target: "#", label: "Home" },
  { icon: User, target: "#about", label: "About" },
  { icon: Layers, target: "#services", label: "Services" },
  { icon: Briefcase, target: "#projects", label: "Projects" },
  { icon: Mail, target: "#contact", label: "Contact" },
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const { scrollDirection, isAtTop } = useScrollDirection();

  const scrollToSection = (id: string) => {
    if (id === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50",
        "transition-all duration-300 ease-out",
        scrollDirection === "down" && !isAtTop
          ? "translate-y-24 opacity-0"
          : "translate-y-0 opacity-100",
      )}
    >
      <div
        className="
    flex items-center
    gap-2 sm:gap-3
    px-3 sm:px-4
    py-2.5 sm:py-3
    rounded-[20px] sm:rounded-[22px]
    bg-background/60 backdrop-blur-2xl
    border border-white/10
    shadow-[0_10px_30px_rgba(0,0,0,0.15)]
  "
      >
        {dockItems.map((item, i) => {
          const Icon = item.icon;

          return (
            <button
              key={i}
              onClick={() => scrollToSection(item.target)}
              className="
                group relative
                flex items-center justify-center
                w-10 h-10 sm:w-11 sm:h-11 rounded-xl
                transition-all duration-200 ease-out
                hover:bg-black/5 dark:hover:bg-white/5
                hover:scale-110
                active:scale-95
              "
            >
              <Icon className="h-5 w-5" />

              {/* Apple-style tooltip */}
              <span
                className="
                  absolute -top-10 left-1/2 -translate-x-1/2
                  px-2 py-1 rounded-lg text-xs
                  dark:bg-white/5 bg-black/5 dark:text-white text-black backdrop-blur-md
                  opacity-0 translate-y-1
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-200
                  pointer-events-none whitespace-nowrap
                "
              >
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Divider */}
        <div className="w-px h-8 bg-black/10 dark:bg-white/15 mx-1" />

        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="
            flex items-center justify-center
            w-10 h-10 sm:w-11 sm:h-11 rounded-xl
            transition-all duration-200 ease-out
            hover:bg-black/5 dark:hover:bg-white/5
            hover:scale-110
            active:scale-95
          "
        >
          <Sun className="h-5 w-5 hidden dark:block" />
          <Moon className="h-5 w-5  dark:hidden" />
        </button>
      </div>
    </div>
  );
}
