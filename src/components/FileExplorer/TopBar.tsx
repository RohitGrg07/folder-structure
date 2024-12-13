import React from 'react';
import { FilePlus, FolderPlus } from 'lucide-react';
import { TopBarProps } from './types';

export const TopBar: React.FC<TopBarProps> = ({ onAddFile, onAddFolder }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-700">
      <span className="text-gray-300 font-semibold">EVALUATION</span>
      <div className="flex gap-2">
        <button
          onClick={() => onAddFile([])}
          className="p-1 hover:bg-gray-700 rounded"
          title="New File"
        >
          <FilePlus className="w-5 h-5 text-gray-300" />
        </button>
        <button
          onClick={() => onAddFolder([])}
          className="p-1 hover:bg-gray-700 rounded"
          title="New Folder"
        >
          <FolderPlus className="w-5 h-5 text-gray-300" />
        </button>
      </div>
    </div>
  );
};