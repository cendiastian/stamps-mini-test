// Membuat array dari 1 sampai 100
var numbers = Array.from({ length: 100 }, (_, i) => i + 1);
// Membalik urutan array
numbers.reverse();

// Function untuk memeriksa apakah suatu angka adalah bilangan prima
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Variabel untuk menyimpan output yang akan ditampilkan menyamping
var result = "";

numbers.forEach(function(number) {
  if (isPrime(number)) {
    return; // Skip angka bilangan prima
  }

  if (number % 3 === 0 && number % 5 === 0) {
    result += "FooBar ";
  } else if (number % 3 === 0) {
    result += "Foo ";
  } else if (number % 5 === 0) {
    result += "Bar ";
  } else {
    result += number + " ";
  }
});

console.log(result);