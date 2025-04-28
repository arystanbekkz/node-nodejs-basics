const parseArgs = () => {
    // Write your code here 
    const allArgs = process.argv
    const args = allArgs.slice(2)
    const result = [];
    for (const argument of args) {
        const [prop, value] = argument.replace('--', '').split('=')
        result.push(`${prop} is ${value}`)
    }
    console.log(result.join(', '))
};

parseArgs();