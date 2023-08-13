import React, { useState, useEffect } from "react";

const BibleVerse: React.FC = () => {
  interface Verse {
    bookname: string;
    chapter: string;
    text: string;
    verse: string;
  }
  const [verse, setVerse] = useState<Verse[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://labs.bible.org/api/?passage=votd&type=json"
      );
      const data = await response.json();
      setVerse(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1
      style={{
        backgroundColor: "black",
        color: "lightpink",
        height: "60px",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "center",
        justifyContent: "center"
      }}
      >Verse of the day 😇</h1>
      {verse?.map((verse) => {
        return (
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              {verse?.bookname}{" "}
              <span style={{ color: "red" }}>{verse?.chapter}</span> :{" "}
              <span style={{ color: "green" }}>{verse?.verse}</span>
            </p>
            <p style={{ fontSize: "1.25rem", padding: "0 10px" }}>
              {verse?.text}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default BibleVerse;
