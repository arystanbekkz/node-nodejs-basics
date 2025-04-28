import { join } from "path";
import { unlink } from "fs/promises";

const remove = async () => {
    // Write your code here
    const filePath = join('src','fs', 'files','fileToRemove.txt');
    try {
        await unlink(filePath)
    } catch(error) {
        throw new Error("FS operation failed")
    }
};

await remove();