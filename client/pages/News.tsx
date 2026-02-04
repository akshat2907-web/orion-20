import { FileText } from "lucide-react";
import PlaceholderPage from "./PlaceholderPage";

export default function News() {
  return (
    <PlaceholderPage
      icon={FileText}
      title="Latest Updates"
      description="Stay informed with the latest news, feature releases, and study tips from the Orion community. New content coming soon!"
      hasSidebar={true}
    />
  );
}
