import { useState } from "react";
import { api } from "../api";

export default function Humaniser() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await api.post("/tools/humaniser", { text: inputText });
      setOutputText(res.data.result);
    } catch (err) {
      console.error("Error:", err);
      setOutputText("⚠️ Failed to process text.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">✍ Humaniser Tool</h2>
      <textarea
        className="w-full p-3 border rounded-lg"
        rows="5"
        placeholder="Paste your text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Humanise Text
      </button>

      {outputText && (
        <div className="mt-4 p-4 bg-gray-100 border rounded-lg">
          <h3 className="font-semibold">Result:</h3>
          <p>{outputText}</p>
        </div>
      )}
    </div>
  );
}
