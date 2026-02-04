import { Settings as SettingsIcon } from "lucide-react";
import PlaceholderPage from "./PlaceholderPage";

export default function Settings() {
  return (
    <PlaceholderPage
      icon={SettingsIcon}
      title="Settings"
      description="Customize your Orion experience, manage notifications, adjust study preferences, and configure your account security."
      hasSidebar={true}
    />
  );
}
