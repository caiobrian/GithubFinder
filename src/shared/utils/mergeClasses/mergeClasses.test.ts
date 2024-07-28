import { mergeClasses } from './mergeClasses';

describe('mergeClasses', () => {
  it('should merge multiple classes into a single string', () => {
    const result = mergeClasses('class1', 'class2', 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  it('should remove leading and trailing spaces from each class', () => {
    const result = mergeClasses('  class1  ', ' class2 ', '  class3  ');
    expect(result).toBe('class1 class2 class3');
  });

  it('should remove duplicate classes', () => {
    const result = mergeClasses(
      'class1',
      'class2',
      'class1',
      'class3',
      'class2',
    );
    expect(result).toBe('class1 class2 class3');
  });

  it('should handle empty classes', () => {
    const result = mergeClasses('', 'class1', '', 'class2', '');
    expect(result).toBe('class1 class2');
  });
});
