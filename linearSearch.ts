// simplest algorithm for searching item index in the list

let array: number[] = [4, 5, 1, -8, 0, 3];

function linearSearch(array: Array<number>, item: number): number {
    for (let i = 0; i < array.length; i++) {
        if(item == array[i]) return i;
    }

    return 0;
}

console.log(linearSearch(array, -8));