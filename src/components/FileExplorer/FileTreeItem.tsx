import React from 'react';
import { ChevronDown, ChevronRight, File, Folder } from 'lucide-react';
import { FileTreeItemProps } from './types';
import { getPathString } from './utils';

export const FileTreeItem: React.FC<FileTreeItemProps> = ({
  node,
  path,
  isExpanded,
  onToggle,
}) => {
  const currentPath = [...path, node.name];
  const pathString = getPathString(currentPath);

  return (
    <div className="select-none">
      <div
        className={`flex items-center py-1 px-2 hover:bg-gray-700 rounded cursor-pointer ${
          isExpanded ? 'text-white' : 'text-gray-300'
        }`}
        style={{ paddingLeft: `${path.length * 12 + 8}px` }}
      >
        {node.type === 'folder' ? (
          <>
            <button
              onClick={() => onToggle(pathString)}
              className="p-1 hover:bg-gray-600 rounded"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            <Folder className="w-4 h-4 mr-2" />
            <span>{node.name}</span>
          </>
        ) : (
          <>
            <span className="w-5" />
            <File className="w-4 h-4 mr-2" />
            <span>{node.name}</span>
          </>
        )}
      </div>
    </div>
  );
};