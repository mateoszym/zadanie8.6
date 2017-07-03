var a = 2;
var b = 5;
var value = (a * a) + (2 * a * b) - (b * b);

if (value > 0) {
    alert('Wynik działania jest dodatni');
    console.log('Wynik działania jest dodatni');
  } else if (value < 0) {
    alert('Wynik działania jest ujemny');
    console.log('Wynik działania jest ujemny');
  } else {
  	alert('Wynik jest równy zero');
  	console.log('Wynik jest równy zero');
  }
