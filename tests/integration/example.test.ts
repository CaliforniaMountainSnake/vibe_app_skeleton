import { describe, it, expect } from 'vitest'

describe('integration example', () => {
  it('sums numbers', () => {
    // В реальном проекте здесь будут тесты с БД, API и т.д.
    const result = [1, 2, 3].reduce((a, b) => a + b, 0)
    expect(result).toBe(6)
  })
})
