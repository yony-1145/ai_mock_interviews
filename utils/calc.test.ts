import { add } from './calc';

describe('add', () => {
  it('adds two numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
  });
});
