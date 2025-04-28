const parseArgs = () => {
    // Write your code here 
    const allArgs = process.argv
    const args = allArgs.slice(2)
    const result = [];
    for (let i = 0; i < args.length; i += 2) {
        const prop = args[i].replace(/^--/, '')
        const value = args[i+1]
        result.push(`${prop} is ${value}`)
    }
    console.log(result.join(', '))
};

parseArgs();