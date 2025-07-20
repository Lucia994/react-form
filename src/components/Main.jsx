import { useState } from "react";
import ArtworkCard from "./ArtworkCard";
import InputTitle from "./InputTitle";

export default function Main() {
  const artWorks = [
    {
      id: 1,
      src: "https://localhost:3000",
      title: "Infinity Mirror Room",
      date: 1965,
      location: "Hirshhorn Museum and Sculpture Garden, Washington, D.C.",
    },
    {
      id: 2,
      src: "../img",
      title: "Dots Obsession",
      date: 1968,
      location: "Various",
    },
    {
      id: 3,
      src: "",
      title: "The Obliteration Room ",
      date: 2002,
      location: "Various",
    },
    {
      id: 4,
      src: "",
      title: "My Eternal Soul",
      date: 2009,
      location: "Various",
    },
    {
      id: 5,
      src: "",
      title: "Infinity Nets",
      date: 2007,
      location: "Various",
    },
    {
      id: 6,
      src: "",
      title: "Ascension of Polka Dots ",
      date: 2009,
      location: "Various",
    },
    {
      id: 7,
      src: "",
      title: "All the Eternal Love I Have for the Pumpkins",
      date: 2016,
      location: "Various",
    },
    {
      id: 8,
      src: "",
      title: "Repetitive Vision",
      date: 1996,
      location: "Various",
    },
    {
      id: 9,
      src: "",
      title: "The Passing Winter ",
      date: 2005,
      location: "Various",
    },
  ];

  return (
    <main>
      <div className="p-5 mb-4-bg-light rounded-0">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">
            The Most Famous Artworks of Yayoi Kusama
          </h1>
        </div>

        {/*List of artworks*/}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {artWorks.map(({ id, title, date, location }) => {
            return (
              <ArtworkCard title={title} date={date} location={location} />
            );
          })}
        </div>
      </div>
    </main>
  );
}
