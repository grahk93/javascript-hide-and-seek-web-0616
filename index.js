function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(`#nested .target`)
}

function increaseRankBy(n) {
  lis = document.querySelectorAll(`ul.ranked-list li`);
  for (var i = 0; i < lis.length; i++) {
   lis[i].innerHTML = parseInt(lis[i].innerHTML) + n 
  }
}

function deepestChild() {
  var kid = document.querySelector(`#grand-node div div div div`)
  return kid
  //return kids[kids.length-1]
}