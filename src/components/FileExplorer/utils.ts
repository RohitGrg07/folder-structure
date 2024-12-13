import { FileNode } from '../../types/FileSystem';

export const getPathString = (path: string[]): string => path.join('/');

export const toggleSetItem = (set: Set<string>, item: string): Set<string> => {
  const newSet = new Set(set);
  if (newSet.has(item)) {
    newSet.delete(item);
  } else {
    newSet.add(item);
  }
  return newSet;
};