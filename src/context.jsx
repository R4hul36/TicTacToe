import React, { useContext, useEffect, useRef, useState } from "react";

const AppContext = React.createContext();

const data = ["", "", "", "", "", "", "", "", ""];

const AppProvider = ({ children }) => {
  const [gameSquares, setGameSquares] = useState(data);
  const [playerSymbol, setPlayerSymbol] = useState("X");
  const [currentSymbol, setCurrentSymbol] = useState("");
  const [gameEnd, setGameEnd] = useState({
    result: false,
    player: "",
    draw: false,
  });

  const handleClick = (id) => {
    let oldData = gameSquares.map((tile, index) => {
      if (id === index && tile === "") {
        setPlayerSymbol((prevSymbol) => {
          if (prevSymbol === "X") {
            return "O";
          }
          return "X";
        });
        setCurrentSymbol(playerSymbol);
        return playerSymbol;
      }
      return tile;
    });
    setGameSquares(oldData);
  };

  const gameRowResult = () => {
    let test = [];
    let count = 0;
    let rowWin = false;

    for (let i = 0; i < 3; i++) {
      let slice = gameSquares.slice(count, count + 3);
      test.push(slice);
      count += 3;
    }
    let result = test.map((item) => {
      let winner = item.every((tile) => tile === currentSymbol && tile !== "");

      if (winner === true) {
        rowWin = true;
      }
    });
    return rowWin;
  };

  const gameColumnResult = () => {
    let i = 0;
    let columns = [];
    let columnWin = false;
    while (i < 3) {
      let step = gameSquares.filter((tile, index) => {
        let count = i + index;
        return count % 3 === 0;
      });
      columns.push(step);
      i++;
    }
    let result = columns.map((column) => {
      let win = column.every((tile) => tile === currentSymbol && tile !== "");
      if (win) {
        columnWin = true;
      }
    });
    return columnWin;
  };

  const gameDiagonalResult = () => {
    let patterns = [
      [0, 4, 8],
      [2, 4, 6],
    ];
    let diagonalWin = false;
    patterns.map((pattern) => {
      let win = pattern.every(
        (tile) =>
          gameSquares[tile] === currentSymbol && gameSquares[tile] !== ""
      );
      if (win) {
        diagonalWin = true;
      }
    });
    return diagonalWin;
  };

  const checkWin = () => {
    if (gameRowResult() || gameColumnResult() || gameDiagonalResult()) {
      setGameEnd((oldData) => {
        return {
          ...oldData,
          result: true,
          player: currentSymbol,
        };
      });
    }
  };

  const checkDraw = () => {
    let draw = gameSquares.every((tile) => tile !== "");
    if (draw) {
      setGameEnd({
        ...gameEnd,
        draw: true,
      });
    }
  };

  const resetGame = () => {
    setGameSquares(data);
    setGameEnd({ result: false, player: "", draw: false });
    setPlayerSymbol("X");
  };

  useEffect(() => {
    checkDraw();
    checkWin();
  }, [gameSquares]);

  // useEffect(() => {
  //   if (gameEnd.result || gameEnd.draw) {
  //     resetGame();
  //   }
  // }, [gameEnd.result, gameEnd.draw]);

  return (
    <AppContext.Provider
      value={{
        gameSquares,
        setGameSquares,
        playerSymbol,
        handleClick,
        ...gameEnd,
        setGameEnd,
        currentSymbol,
        resetGame,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
