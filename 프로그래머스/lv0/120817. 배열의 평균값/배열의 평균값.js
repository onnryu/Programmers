function solution(numbers) {
    let sum = 0;
    let average = 0;
    
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    return average = sum / numbers.length;
}