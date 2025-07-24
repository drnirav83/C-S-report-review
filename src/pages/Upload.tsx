import { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");
    alert("Simulating upload of: " + file.name);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Upload Report</h2>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept=".pdf,.jpg,.png"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
