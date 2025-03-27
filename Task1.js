const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on("line", (line) => {
    inputLines.push(line.trim());
});

rl.on("close", () => {
    console.log("DEBUG: Input Read =", inputLines);

    let N = parseInt(inputLines[0]); // Number of elements
    let arr = inputLines[1].split(" ").map(Number); // Array elements
    let K = parseInt(inputLines[2]); // Number of queries
    let queries = inputLines.slice(3, 3 + K).map(line => line.split(" ").map(Number));

    //console.log("DEBUG: N =", N, "Array =", arr);
    //console.log("DEBUG: K =", K, "Queries =", queries);

    // ✅ Sort the array for binary search
    arr.sort((a, b) => a - b);
    console.log("DEBUG: Sorted Array =", arr);

    function lowerBound(value) {
        let left = 0, right = N;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] < value) left = mid + 1;
            else right = mid;
        }
        return left;
    }

    function upperBound(value) {
        let left = 0, right = N;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] <= value) left = mid + 1;
            else right = mid;
        }
        return left;
    }

    // ✅ Process Queries Correctly
    let result = [];
    for (let i = 0; i < K; i++) {
        let [l, r] = queries[i];
        let lower = lowerBound(l);
        let upper = upperBound(r);
        result.push(upper - lower);
    }

    //console.log("DEBUG: Final Result Array =", result);

    // ✅ Print Correct Output
    console.log(result.join("\n"));
});
