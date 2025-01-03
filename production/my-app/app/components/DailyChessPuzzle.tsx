"use client"; 

import React, { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard"; 
import { Chess } from "chess.js";  

const DailyChessPuzzle: React.FC = () => {
  const [puzzle, setPuzzle] = useState<any>(null);
  const [game, setGame] = useState<any>(null);
  const [boardPosition, setBoardPosition] = useState<string>("");

  const [feedback, setFeedback] = useState<string>("");

  useEffect(() => {
    async function fetchPuzzle() {
      const res = await fetch("https://api.chess.com/pub/puzzle");
      const data = await res.json();
      setPuzzle(data);
      setBoardPosition(data.fen);  // initial position from puzzle
    }
    fetchPuzzle();
  }, []);

  // initialize the chess game object 
  useEffect(() => {
    if (puzzle) {
      const chessGame = new Chess();
      chessGame.load(puzzle.fen);
      setGame(chessGame);
    }
  }, [puzzle]);

  //  handle move logic
  const handleMove = (from: string, to: string) => {
    if (game) {
      const move = game.move({ from, to });
      if (move) {
        setBoardPosition(game.fen());  // Update the board position
        return true;  // Indicate that the move was successful
      }
    }
    return false;  // Return false if the move is invalid
  };

  if (!puzzle) {
    return <div>Loading puzzle...</div>;
  }

  return (
    <div>
     

      
        <h2 className="text-center text-4xl font-[900] font-mono text-[#64b0e2] mb-10">Today's Chess Puzzle</h2>

        <div className="flex flex-row justify-center space-x-10">
            {/* left column */}
            <div className="flex flex-col space-y-4 w-[300px]">
                <p className="text-left text-2xl font-[900] text-[#64b0e2]">
                    <strong>Rating:</strong> {puzzle.rating}
                </p>
                <p className="text-left text-2xl font-[900] text-[#64b0e2]">
                    <strong>Solution:</strong> {puzzle.solution}
                </p>
            </div>
    
            {/* RIGHT COLUMN */}
            <div className="flex items-center justify-center w-[680px] h-[680px] mx-auto shadow-2xl bg-amber-100 rounded-[80px] p-8">
                <div className="flex items-center justify-center w-[550px] h-[550px] bg-white shadow-lg">
                    <Chessboard
                        position={boardPosition}  
                        onPieceDrop={(sourceSquare, targetSquare, piece) => {
                            return handleMove(sourceSquare, targetSquare);  
                        }}
                        boardWidth={550}
                    />
                </div>
            </div>

        </div>
    </div>
  );
};

export default DailyChessPuzzle;
