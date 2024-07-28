/**
 * Merges multiple CSS class names into a single string.
 * Removes duplicate class names and trims whitespace.
 *
 * @param classes - The CSS class names to merge.
 * @returns The merged class names as a single string.
 */
export function mergeClasses(...classes: string[]): string {
  const classSet = new Set();

  classes.forEach(cls => {
    cls.split(' ').forEach(c => {
      if (c.trim()) {
        classSet.add(c.trim());
      }
    });
  });

  return Array.from(classSet).join(' ');
}
