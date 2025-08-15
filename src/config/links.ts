import {
  Github,
  Linkedin,
  Globe,
  Mail,
  MessageCircle,
  MessageCircleCode,
} from "lucide-react";

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
    description: "Code repositories and source projects",
    color: "from-gray-800 to-gray-600",
    hoverColor: "hover:shadow-glow-cyan",
  },
  {
    name: "Email",
    href: "mailto:jeremia123.jm@gmail.com",
    icon: Mail,
    description: "Contact me via email",
    color: "from-yellow-500 to-yellow-600",
    hoverColor: "hover:shadow-glow",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/082210487700",
    icon: MessageCircleCode,
    description: "Contact me via WhatsApp",
    color: "from-green-400 to-green-500",
    hoverColor: "hover:shadow-glow",
  },
] as const;
