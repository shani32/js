function steps(n) {
    for (let j = 0; j < n; j++) {
      let stair = ""
  
      for (let i = 0; i < n; i++) {
        if (i <= j) {
          stair += "#"
        } else {
          stair += " "
        }
      }
      console.log(stair)
    }
  }
  steps(2)