import { useState } from "react";

export default function Sidebar({ onSelect }) {
  const [active, setActive] = useState("dashboard");

  const menu = [
    { id: "dashboard", label: "Dashboard" },
    { id: "humaniser", label: "Humaniser Tool" },
  ];

  const categories = [
    { id: "political", label: "Political Science" },
    { id: "it", label: "IT / Programming" },
    { id: "custom", label: "Custom" },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-screen flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-6">📘 AssignMate</h1>
      
      <h2 className="text-sm uppercase text-gray-400 mb-2">Tools</h2>
      {menu.map((item) => (
        <button
          key={item.id}
          onClick={() => { setActive(item.id); onSelect(item.id); }}
          className={`block w-full text-left px-4 py-2 rounded-lg mb-1 ${
            active === item.id ? "bg-blue-600" : "hover:bg-gray-700"
          }`}
        >
          {item.label}
        </button>
      ))}

      <h2 className="text-sm uppercase text-gray-400 mt-4 mb-2">Categories</h2>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => { setActive(cat.id); onSelect(cat.id); }}
          className={`block w-full text-left px-4 py-2 rounded-lg mb-1 ${
            active === cat.id ? "bg-blue-600" : "hover:bg-gray-700"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
