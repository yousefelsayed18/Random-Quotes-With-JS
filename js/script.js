var arrQoute = [
  {qoute: "“So many books, so little time.”", author: "― Oscar Wilde"},
  {qoute: "Al-Ahly is above all", author: "― Saleh Seleim"},
  {qoute: "Things are not as they seem and neither are people", author: "― Menna shalaby"},
  {qoute: "“Al-Ahly Club is the real club of the century”", author: "― AlAhly Fans"},
  {qoute: "“There's always time to start again”", author: "― Somebody"}
];

var lastQoute = -1;

function loopQoute() {
  var random;
  do {
      random = Math.floor(Math.random() * arrQoute.length);
  } while (random == lastQoute); 

  document.getElementById("qoute").innerHTML = arrQoute[random].qoute;
  document.getElementById("author").innerHTML = arrQoute[random].author;

  lastQoute = random;
}

// var container=document.querySelector('.container')
// var img=document.createElement('img')
// img.setAttribute('src','img/post-3.jpg')
// img.setAttribute('alt','logo')
// img.style.width='30px';
// container.append(img)