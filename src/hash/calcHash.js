import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { join } from 'path';
import { pipeline } from 'stream/promises';

const calculateHash = async () => {
    // Write your code here
    const filePath = join('src', 'hash', 'files', 'fileToCalculateHashFor.txt');
    console.log({filePath})
    try {
        const readStream = createReadStream(filePath);
        const hash = createHash('sha256');
        await pipeline(readStream, hash);
        const hashResult = hash.digest('hex');
        console.log(hashResult)
    } catch (error) {
        throw new Error("Error while creating hash: ", error.message)
    }
};

await calculateHash();