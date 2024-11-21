const arr = [1,2,3,4,5];
const counts = {}, result = [], n = arr.length;

for(let i = 0; i < n; i++) {
    counts[arr[i]] = (counts[arr[i]] || 0) + 1;
}
for(const val in counts) {
    if(counts[val] > n/3) result.push(parseInt(val));
}
result.sort((a,b) => a-b);
console.log(result);

