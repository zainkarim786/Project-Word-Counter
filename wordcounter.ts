const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const countWords = (text: string): number => {
    // Split the text by whitespace characters and filter out empty strings
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
};

const askQuestion = (question: string): Promise<string> => {
    return new Promise((resolve) => rl.question(question, resolve));
};

const main = async () => {
    const text = await askQuestion('Enter some text: ');
    const wordCount = countWords(text);
    console.log(`Word count: ${wordCount}`);
    rl.close();
};

main();
