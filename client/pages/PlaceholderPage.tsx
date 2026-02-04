import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

interface PlaceholderPageProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  hasSidebar?: boolean;
}

export default function PlaceholderPage({ icon: Icon, title, description, hasSidebar = true }: PlaceholderPageProps) {
  return (
    <Layout hasSidebar={hasSidebar} showAuthButtons={false}>
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center p-6">
        <div className="text-center max-w-2xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-8">
            <Icon className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text">{title}</span>
          </h1>
          <p className="text-lg text-foreground/70 mb-10">{description}</p>
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="btn-primary gap-2 inline-flex items-center justify-center">
              Explore {title} <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-secondary gap-2 inline-flex items-center justify-center">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
