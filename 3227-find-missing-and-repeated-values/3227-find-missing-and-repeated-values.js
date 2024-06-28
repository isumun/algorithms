
    function findMissingAndRepeatedValues (grid) {
    const n = grid.length * grid[0].length;
    const nums = new Array(n + 1).fill(0);
    let duplicate, missing;
  
    for (let row of grid) {
      for (let num of row) {
        nums[num]++;
      }
    }
  
    for (let i = 1; i <= n; i++) {
      if (nums[i] === 0) {
        missing = i;
      } else if (nums[i] === 2) {
        duplicate = i;
      }
    }
  
    return [duplicate, missing];
  }
  
  const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 8]  
];
  
  const result = findMissingAndRepeatedValues(grid);
  console.log(result); 