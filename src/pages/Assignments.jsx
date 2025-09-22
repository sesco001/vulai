import { useEffect, useState } from "react";
import { api } from "../api";

export default function Assignments({ category }) {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const res = await api.get(`/assignments/${category}`);
        setAssignments(res.data);
      } catch (err) {
        console.error("Error fetching assignments:", err);
      }
    };
    fetchAssignments();
  }, [category]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📑 {category} Assignments</h2>
      {assignments.length > 0 ? (
        <ul className="space-y-2">
          {assignments.map((a, idx) => (
            <li key={idx} className="p-3 bg-white border rounded-lg shadow-sm">
              {a.title}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No assignments available.</p>
      )}
    </div>
  );
}
