import {join} from 'path'
import {readdir} from 'fs/promises'

const list = async () => {
    // Write your code here 
    const folderPath = join('src', 'fs', 'files');
    try {
        const files = await readdir(folderPath);
        console.log(files);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();