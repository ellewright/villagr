export function getSrc(asset) {
    let result = [];
    const words = asset.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i][0] === "(") {
            break;
        }

        if (result.length < 2) {
            result.push(words[i]);
        } else if (result.length === 2 && words[i][0] !== "(") {
            result.push(words[i]);
        }
    }

    return `${result.join(" ")}.png`;
}