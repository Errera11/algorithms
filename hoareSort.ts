//quick algorithm for array sorting

let array: number[] = [4, 5, 1, -8, 0, 3];

function hoareSort(array: Array<number>): Array<number> {
    const pivotIndex = Math.floor((array.length)/2);
    let leftArr: Array<number> = [];
    let rightArr: Array<number> = [];

    if(array.length <= 1) return array;

    for (let i = 0; i < array.length; i++) {
        if(array[i] == array[pivotIndex]) continue;

        if(array[pivotIndex] < array[i]) rightArr.push(array[i]);
        else leftArr.push(array[i]);
    }

    return [...hoareSort(leftArr), array[pivotIndex], ...hoareSort(rightArr)];

}

console.log(array);
console.log(hoareSort(array));