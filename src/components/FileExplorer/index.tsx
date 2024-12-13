import React, { useState } from 'react';
import { FileExplorerProps } from './types';
import { TopBar } from './TopBar';
import { FileTree } from './FileTree';
import { toggleSetItem } from './utils';

export const FileExplorer: React.FC<FileExplorerProps> = ({
  files,
  onAddFile,
  onAddFolder,
}) => {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());

  const handleToggleFolder = (path: string) => {
    setExpandedFolders(toggleSetItem(expandedFolders, path));
  };

  return (
    <div className="h-full">
      <TopBar onAddFile={onAddFile} onAddFolder={onAddFolder} />
      <FileTree
        files={files}
        expandedFolders={expandedFolders}
        onToggleFolder={handleToggleFolder}
      />
    </div>
  );
};