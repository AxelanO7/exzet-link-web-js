import { Github, Linkedin, Globe, Mail } from "lucide-react";

export const socialLinks = [
  {
    name: "Portfolio",
    href: "https://portofolio.exzet.site/",
    icon: Globe,
    description: "Explore my projects and achievements",
    color: "from-blue-500 to-cyan-500",
    hoverColor: "hover:shadow-glow",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jeremia-axelano/",
    icon: Linkedin,
    description: "Professional network and career updates",
    color: "from-blue-600 to-blue-800",
    hoverColor: "hover:shadow-glow",
  },
  {
    name: "GitHub",
    href: "https://github.com/AxelanO7/",
    icon: Github,
    description: "Code repositories and open source contributions",
    color: "from-gray-800 to-gray-600",
    hoverColor: "hover:shadow-glow-cyan",
  },
] as const;
