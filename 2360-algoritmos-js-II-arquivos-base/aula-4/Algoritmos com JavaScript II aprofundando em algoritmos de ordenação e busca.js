//let numeros = [1, 2, 3, 101, 20, 3, 30, 31, 40];
//cuidado ordena por ordem na tablea Ansi
//numeros.sort();
//console.log(numeros);

// Saída
// [1, 101, 2, 20, 3, 3, 30, 31, 40]
function QuickSort(a, from, to) {
    var third_index = 0;
    while (true) {
      // Insertion sort is faster for short arrays.
      if (to - from <= 10) {
        InsertionSort(a, from, to);
        return;
      }
      