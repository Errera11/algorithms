
let array: number[] = [4, 5, 1, -8, 0, 3];

function bubbleSort(array: Array<number>): Array<number> {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(array[j + 1] < array[j]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(array);
console.log(bubbleSort(array));