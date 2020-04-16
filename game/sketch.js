// A2Z F17
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F17

// This just picks a random word from wordnik
// And shows it to the user each time a new tab is opened

// A random word


function setup(){
  noCanvas();
  let n = floor(random(10)) + 1;
  let n1 = n-1;
  let words = ['1111111', '22222', '33', '4', '5','6','7','8','9','10'];
  textSize(50);
  text(words[n-1], 300, 150);
  fill(0, 102, 153);
  let img = createImg('pic/' + n + '.jpg');
  img.size(900,480);
  img.position(300,150);


}
