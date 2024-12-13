export interface FileNode {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
  isOpen?: boolean;
}

export const initialFileSystem: FileNode[] = [
  {
    name: 'Applications',
    type: 'folder',
    children: [
      { name: 'Webstorm.dmg', type: 'file' },
      { name: 'Pycharm.dmg', type: 'file' },
      { name: 'FileZila.dmg', type: 'file' },
      { name: 'Mattermost.dmg', type: 'file' }
    ]
  },
  {
    name: 'Desktop',
    type: 'folder',
    children: [
      { name: 'Screenshot1.jpg', type: 'file' },
      { name: 'videopal.mp4', type: 'file' }
    ]
  },
  {
    name: 'Documents',
    type: 'folder',
    children: [
      { name: 'Document1.jpg', type: 'file' },
      { name: 'Document2.jpg', type: 'file' },
      { name: 'Document3.jpg', type: 'file' }
    ]
  },
  {
    name: 'Downloads',
    type: 'folder',
    children: [
      {
        name: 'Drivers',
        type: 'folder',
        children: [
          { name: 'Printerdriver.dmg', type: 'file' },
          { name: 'cameradriver.dmg', type: 'file' }
        ]
      },
      { name: 'chromedriver.dmg', type: 'file' }
    ]
  }
];