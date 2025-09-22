import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Humaniser from "./pages/Humaniser";
import Assignments from "./pages/Assignments";

export default function App() {
  const [selected, setSelected] = useState("dashboard");

  const renderContent = () => {
    switch (selected) {
      case "humaniser":
        return <Humaniser />;
      case "political":
        return <Assignments category="political" />;
      case "it":
        return <Assignments category="it" />;
      case "custom":
        return <Assignments category="custom" />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      <Sidebar onSelect={setSelected} />
      <main className="flex-1 bg-gray-100 min-h-screen">{renderContent()}</main>
    </div>
  );
}
