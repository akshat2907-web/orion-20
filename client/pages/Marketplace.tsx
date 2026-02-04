import { ShoppingBag } from "lucide-react";
import PlaceholderPage from "./PlaceholderPage";

export default function Marketplace() {
  return (
    <PlaceholderPage
      icon={ShoppingBag}
      title="Resource Marketplace"
      description="Discover curated study materials, lecture notes, exam prep guides, and learning resources from top students and educators."
      hasSidebar={true}
    />
  );
}
