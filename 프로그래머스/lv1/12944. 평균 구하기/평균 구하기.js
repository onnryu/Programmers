function solution(arr) {
    let sum = 0;
    let average = 0;
    for (i=0; i< arr.length; i++){
        sum += arr[i];
    }
    return average = sum / arr.length;
}