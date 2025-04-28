const parseEnv = () => {
    // Write your code here 
    const result = [];
    const envVariables = Object.entries(process.env);

    for (const [key, value] of envVariables) {
        if (key.startsWith('RSS_')) {
            result.push(`${key}=${value}`)
        }
    }

    const formattedResult = result.join("; ")
    console.log(formattedResult)
};

parseEnv();