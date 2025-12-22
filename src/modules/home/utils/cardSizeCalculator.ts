/**
 * Calculate which card positions should be large based on the sequence pattern
 * Sequence: 3, 4, 9, 10, 15, 16, ...
 * Formula: seq(n) = 3 * n + 3 + (n & 1)
 */
export function seq(n: number): number {
  return 3 * n + 3 + (n & 1);
}

/**
 * Check if a card at a given position (1-based) should be large
 * Cards at positions 3, 4, 9, 10, 15, 16, etc. are large
 * Pattern: pairs of consecutive positions starting at 3, then every 6 positions
 */
export function isLargeCardPosition(position: number): boolean {
  // Position is 1-based (first card is at position 1)
  if (position < 3) return false;
  
  // Positions 3-4, 9-10, 15-16, 21-22, etc. are large
  // Pattern: pairs starting at 3, then every 6 positions
  const offsetFrom3 = position - 3;
  const posInBlock = offsetFrom3 % 6;
  
  // First two positions in each block (0 and 1) are large
  return posInBlock === 0 || posInBlock === 1;
}

