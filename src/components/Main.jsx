import { useState } from "react";

export default function Main() {
  const artWorks = [
    {
      id: 1,
      title: "Infinity Mirror Room",
    },
    {
      id: 2,
      title: "Narcissus Garden",
    },
    {
      id: 3,
      title: "Dots Obsession",
    },
    {
      id: 4,
      title: "Pumpkin",
    },
    {
      id: 5,
      title: "The Obliteration Room",
    },
    {
      id: 6,
      title: "Infinity Nets",
    },
    {
      id: 7,
      title: "Aggregation: One Thousand Boats Show",
    },
    {
      id: 8,
      title: "Kusama's Self-Obliteration",
    },
    {
      id: 9,
      title: "Accumulation",
    },
    {
      id: 10,
      title: "The Obliteration Room",
    },
  ];

  //const [artWorks, setArtWorks] = useState("Infinity Mirror Room");

  return (
    <main>
      <div className="container">
        <ul className="list-group">
          {artWorks.map((artwork, index) => {
            return (
              <li key={artWorks.title} className="list-group-item">
                {artwork.title}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
