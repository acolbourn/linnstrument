import Box from "@mui/material/Box";
import React from "react";
import NoteCell from "./NoteCell";

const Grid: React.FC = () => {
  const notesSequence = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];

  // Define the specific starting notes for each row according to the provided sequence
  const startingNotes = ["F", "C", "G", "D", "A", "E", "B", "F#"];

  // Helper function to calculate the note for a given cell
  const getNote = (col: number, row: number): string => {
    // Find the starting note for the current row
    const rowStartNote = startingNotes[row];
    const rowStartIndex = notesSequence.indexOf(rowStartNote);
    // Calculate the note index for the cell, wrapping around the notes sequence if necessary
    const noteIndex = (rowStartIndex + col) % notesSequence.length;
    return notesSequence[noteIndex];
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ border: "2px solid grey" }}>
        {Array.from({ length: 8 }).map((_, row) => (
          <Box
            key={row}
            sx={{
              display: "flex",
            }}
          >
            {Array.from({ length: 25 }).map((_, col) => (
              <NoteCell key={`${row}-${col}`} note={getNote(col, row)} />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Grid;
