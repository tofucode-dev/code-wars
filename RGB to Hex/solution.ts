export function rgb(r: number, g: number, b: number): string { 
  return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}

const toHex = (n: number) => {
  let posN = n < 0 ? 0 : n > 255 ? 255 : n;
  // Math.max(0, Math.min(255, n))

  return posN.toString(16).padStart(2, '0').toUpperCase();
}