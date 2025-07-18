import { useState } from "react";

export default function Main() {
  const [famousWorks, setsfamousWorks] = useState(" Infinity Mirror Room");

  return (
    <main>
      <input type="text" value={famousWorks} />
    </main>
  );
}
