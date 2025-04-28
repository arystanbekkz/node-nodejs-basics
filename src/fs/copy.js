import { join } from "path";
import { cp } from "fs/promises";

const copy = async () => {
    // Write your code here 
    const sourcePath = join('src','fs', 'files');
    const destinationPath = join('src', 'fs', 'files_copy');
    console.log({sourcePath, destinationPath})
    try {
        await cp(sourcePath, destinationPath, { recursive: true, errorOnExist: true, force: false });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
