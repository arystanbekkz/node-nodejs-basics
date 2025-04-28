import { readFile } from 'fs/promises';
import {join} from 'path'


const read = async () => {
    // Write your code here
    const filePath = join('src', 'fs', 'files', 'fileToRead.txt') 
    try {
        const content = await readFile(filePath, 'utf-8');
        console.log(content)
    } catch(error) {
        throw new Error("FS operation failed")
    }
};

await read();