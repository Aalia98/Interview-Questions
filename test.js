function minDiff(arr,k) {
    
    for(let i = 1; i <= arr.length; i++) {
        if(i < k) {
            arr[i] += k;
        } else {
            arr[i] -= k;
        }
    }
    console.log(arr);
    
    let diff = arr[arr.length-1] - arr[0];
    return diff;
}
const arr = [1, 5, 8, 10];
const k = 2;
console.log(minDiff(arr,k));

