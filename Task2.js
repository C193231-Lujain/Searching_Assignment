const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on("line", (line) => {
    inputLines.push(line.trim());
}).on("close", () => {
    let [N, K] = inputLines[0].split(" ").map(Number);
    let arr = inputLines[1].split(" ").map(Number);
    let queries = inputLines[2].split(" ").map(Number);

    // ✅ Binary Search Function
    function rightmostPosition(value) {
        let left = 0, right = N;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] <= value) left = mid + 1;
            else right = mid;
        }
        return left; // 1-based index
    }

    // ✅ Process Queries
    let result = [];
    for (let x of queries) {
        let pos = rightmostPosition(x);
        result.push(pos === 0 ? 0 : pos);
    }

    // ✅ Print Output
    console.log(result.join("\n"));
});
