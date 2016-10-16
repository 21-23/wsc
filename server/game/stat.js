let isGameStarted = false;
let gameStartAt = null;

module.exports = {
    startGame() {
        if(!isGameStarted) {
            isGameStarted = true;
            gameStartAt = Date.now();

            return true;
        }
        
        return false;
    },

    getGameStatus() {
        return isGameStarted;
    },

    getGameStart() {
        return gameStartAt;
    },

    setGameStart(newGameStart) {
        if (!gameStartAt) {
            gameStartAt = newGameStart;
            return true;
        }

        return false;
    }
};
