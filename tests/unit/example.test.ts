import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utilities'

describe('unit example', () => {
  it('merges class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })
})
