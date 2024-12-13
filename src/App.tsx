import React, { useState } from 'react';
import { FileExplorer } from './components/FileExplorer/index';
import { FileNode, initialFileSystem } from './types/FileSystem';

function App() {
  const [files, setFiles] = useState<FileNode[]>(initialFileSystem);

  const handleAddFile = (path: string[]) => {
    // Implementation for adding new file
    console.log('Adding new file at path:', path);
  };

  const handleAddFolder = (path: string[]) => {
    // Implementation for adding new folder
    console.log('Adding new folder at path:', path);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="w-64 h-screen bg-gray-800 border-r border-gray-700">
        <FileExplorer
          files={files}
          onAddFile={handleAddFile}
          onAddFolder={handleAddFolder}
        />
      </div>
    </div>
  );
}

export default App;