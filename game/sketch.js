// A2Z F17
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F17

// This just picks a random word from wordnik
// And shows it to the user each time a new tab is opened

// A random word

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255);
  let n = floor(random(10)) + 1;
  let img = createImg('pic/' + n + '.jpg');
  img.size(1100,680);
  img.position(200,170);

  let words = ['emmmm..what about Animal Crossing? Have you pay off your mortgage yet?', 'nah. No gaming today, lets take a day and read a book', 'What Remains of Edith Finch seems good for today. Have you finish discovering Finchs family mystery?', 'Today feels like a silly day---go text your friends and make them play Human Fall Flat together!', 'You still have not finish your giant house constrution in Junyes minecraft server, GO TO WORK.','Time for some quiet and sad moments to calm down from all these things--To The Moon', 'MUuuSE DAssSH!!', 'Overwatch hummmmmmm...', 'Time for PUBG', 'nah, just relax and chill for today.'];
  textSize(30);
  textAlign(LEFT);
  fill(0);
  text(words[n-1], 300,750,800,800);

  let h = hour();
  let m = minute();
  fill(0);
  textSize(23);
  textFont('Georgia')
  text('current time: \n'+ h+':'+m,30,300)

  }

  function mouseClicked(){

  }
