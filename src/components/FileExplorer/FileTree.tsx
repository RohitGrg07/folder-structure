import React from 'react';
import { FileTreeProps } from './types';
import { FileTreeItem } from './FileTreeItem';
import { getPathString } from './utils';

export const FileTree: React.FC<FileTreeProps> = ({
  files,
  expandedFolders,
  onToggleFolder,
}) => {
  const renderFileTree = (node: FileNode, path: string[] = []) => {
    const currentPath = [...path, node.name];
    const isExpanded = expandedFolders.has(getPathString(currentPath));

    return (
      <div key={getPathString(currentPath)}>
        <FileTreeItem
          node={node}
          path={path}
          isExpanded={isExpanded}
          onToggle={onToggleFolder}
        />
        {node.type === 'folder' && isExpanded && node.children && (
          <div className="ml-2">
            {node.children.map((child) => renderFileTree(child, currentPath))}
          </div>
        )}
      </div>
    );
  };

  return <div className="p-2">{files.map((file) => renderFileTree(file))}</div>;
};