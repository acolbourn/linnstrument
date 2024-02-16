import Box from '@mui/material/Box';
import React from 'react';

// Define types for clarity
export type NoteType = 'natural' | 'accidental' | 'root';
interface NoteCellProps {
  note: string; // Pass the note itself to determine if it's the root
}

const NoteCell: React.FC<NoteCellProps> = ({ note }) => {
  // Determine the note type for styling
  const getNoteType = (note: string): NoteType => {
    if (note === 'C') return 'root'; // Identify C as the root note
    return note.includes('#') ? 'accidental' : 'natural';
  };

  const noteType = getNoteType(note);
  const innerBorderColor =
    noteType === 'root' ? 'red' : noteType === 'natural' ? '#26FD26' : 'black';

  return (
    <Box
      sx={{
        width: 40, // Adjust size as needed
        height: 40, // Adjust size as needed
        border: `1px solid #ccc`, // Consistent grey border for all notes
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3px', // Adjust padding to control the width of the inner border
        backgroundColor: innerBorderColor, // Use background color to simulate the inner border
      }}
    >
      <Box
        sx={{
          width: '95%',
          height: '95%',
          bgcolor: 'black',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {note}
      </Box>
    </Box>
  );
};

export default NoteCell;
