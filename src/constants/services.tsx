import {
  Activity,
  Container,
  Cloud,
  Code2,
  GitBranch,
  Shield,
} from "lucide-react";
import type { Service } from "../types";

export const services: Service[] = [
  {
    title: "Cloud Migration",
    description:
      "Secure AWS, Azure, and GCP cloud migration services for reliable and scalable business infrastructure.",
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    title: "CI/CD Pipelines",
    description:
      "CI/CD pipeline automation for faster, secure, and reliable software development and deployment.",
    icon: <GitBranch className="w-6 h-6" />,
    isActive: true,
  },
  {
    title: "Kubernetes Orchestration",
    description:
      "Kubernetes consulting and orchestration services for scalable cloud-native applications and containers.",
    icon: <Container className="w-6 h-6" />,
  },
  {
    title: "Infrastructure as Code",
    description:
      "Infrastructure automation using Terraform and Ansible for consistent and efficient cloud deployments.",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: "DevSecOps",
    description:
      "DevSecOps services that integrate automated security into every stage of software development and deployment.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "24/7 Monitoring",
    description:
      "24/7 cloud infrastructure monitoring to improve system performance, reliability, security, and uptime.",
    icon: <Activity className="w-6 h-6" />,
  },
];