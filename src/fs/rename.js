import {rename as fsRename} from 'fs/promises'
import { join } from 'path';

const rename = async () => {
    // Write your code here 
    const oldFilePath = join('src','fs', 'files', 'wrongFilename.txt');
    const newFilePath = join('src','fs', 'files', 'properFilename.md');
    try {
      await fsRename(oldFilePath, newFilePath);
    } catch (error) {
      throw new Error('FS operation failed');
    }
};

await rename();