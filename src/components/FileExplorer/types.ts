import { FileNode } from '../../types/FileSystem';

export interface FileTreeItemProps {
  node: FileNode;
  path: string[];
  isExpanded: boolean;
  onToggle: (path: string) => void;
}

export interface FileTreeProps {
  files: FileNode[];
  expandedFolders: Set<string>;
  onToggleFolder: (path: string) => void;
}

export interface TopBarProps {
  onAddFile: (path: string[]) => void;
  onAddFolder: (path: string[]) => void;
}

export interface FileExplorerProps {
  files: FileNode[];
  onAddFile: (path: string[]) => void;
  onAddFolder: (path: string[]) => void;
}