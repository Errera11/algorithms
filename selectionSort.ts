
let array: number[] = [4, 5, 1, -8, 0, 3];

function selectionSort(array: Array<number>): Array<number> {

    for(let i = 0; i < array.length; i++) {
        let minIndex = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[minIndex]) minIndex = j;
        }
        const temp = array[minIndex];
        array[minIndex] = array[i];
        array[i] = temp;

    }

    return array;
}

console.log(array);
console.log(selectionSort(array));