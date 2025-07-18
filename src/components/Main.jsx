import { useState } from "react";

export default function Main() {
  // const [famousWorks, setsfamousWorks] = useState(" Infinity Mirror Room");

  const artWorks = [
    "Infinity Mirror Room",
    "Narcissus Garden",
    "Dots Obsession",
    "Pumpkin (various dates)",
    "The Obliteration Room (2002-present)",
    "Infinity Nets",
    "Aggregation: One Thousand Boats Show (1963)",
    "The Obliteration Room (2002-present)",
    "Kusama's Self-Obliteration (1967)",
    "Accumulation",
  ];

  // const [famousWorks, setsfamousWorks] = useState(" ");
  // const [artWorks, setArtWorks] = useState(initila_tasks);

  return (
    <main>
      {/* <input
        type="text"
        value={famousWorks}
        onChange={(e) => setsfamousWorks(e.target.value)}
      /> */}
      <div className="container">
        <ul className="list-group">
          {artWorks.map((artwork, index) => {
            return (
              <li key={index} className="list-group-item">
                {artwork}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
