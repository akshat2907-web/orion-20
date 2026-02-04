import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
  hasSidebar?: boolean;
  showAuthButtons?: boolean;
}

export default function Layout({
  children,
  hasSidebar = false,
  showAuthButtons = true,
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar showAuthButtons={showAuthButtons} />
      <div className="flex flex-1">
        {hasSidebar && <Sidebar />}
        <main className={`flex-1 ${hasSidebar ? "ml-64" : ""}`}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
