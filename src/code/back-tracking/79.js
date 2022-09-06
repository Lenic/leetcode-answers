/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  /**
   * @type {boolean[][]}
   */
  const visited = new Array(board.length);
  for (let i = 0; i < board.length; i++) {
    visited[i] = new Array(board[i].length).fill(false);
  }

  /**
   * @param {number} i
   * @param {number} j
   * @param {number} index
   */
  const traversal = (i, j, index) => {
    if (index >= word.length) return true;
    if (i < 0 || i >= board.length) return false;
    if (j < 0 || j >= board[i].length) return false;
    if (visited[i][j]) return false;

    if (board[i][j] === word[index]) {
      index += 1;
      visited[i][j] = true;

      try {
        let res = traversal(i - 1, j, index);
        if (res) return true;

        res = traversal(i + 1, j, index);
        if (res) return true;

        res = traversal(i, j - 1, index);
        if (res) return true;

        res = traversal(i, j + 1, index);
        if (res) return true;
      } finally {
        visited[i][j] = false;
      }
    }

    return false;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (traversal(i, j, 0)) return true;
    }
  }
  return false;
};

// true
console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
  )
);

// true
console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'SEE'
  )
);

// false
console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCB'
  )
);
