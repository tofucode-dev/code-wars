export function rowSumOddNumbers(n: number): number {
    const i = n - 1;
    const firstElement = i * (i + 1) + 1;
    const lastElement = firstElement + 2*i;
    
    let sum = 0
    for (let j = firstElement; j <= lastElement; j = j+2 ){
      sum+= j;
    }
    return sum
  }