function dividir_par(num) {
  console.log(num);

  if (num % 2 === 0) {
    dividir_par(num / 2);
  } else return num;
}

//dividir_par(24);

function fatorial(num) {
  console.log(num);
  if (num === 0) {
    return 1;
  } else if (num === 1) {
    return 1;
  } else {
    console.log(num + " * !" + (num + 1));
    return num * fatorial(num - 1);
  }
}

console.log(fatorial(5));
