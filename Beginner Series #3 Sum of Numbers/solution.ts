export function getSum(a: number, b: number): number {
    if (a === b) {
      return a;
    }
    
    let start = a;
    let end = b;
    let sum = 0;
    
    if (a > b) {
      start = b;
      end = a;
    }
    
    for (let i = start; i <= end; i++) {
      sum += i;
    }
    
    return sum;
  }