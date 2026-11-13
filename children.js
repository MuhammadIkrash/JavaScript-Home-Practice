// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);
// console.log(document.body.childNodes[0] === document.body.firstChild);

// let arr = Array.from(document.body.childNodes);
// console.log(arr);

// console.log(document.body.firstChild.nextSibling);
// console.log(document.body.firstChild.parentElement);
// console.log(document.body.firstChild.parentNode);

// let b = document.body.firstElementChild.style.color = "red";

let a = document.body.firstElementChild;
// console.log(a);
// console.log(a.rows);
// console.log(a.caption);
// console.log(a.rows[0]);
// console.log(a.tHead);
// console.log(a.tFoot);
// console.log(a.tBodies);
console.log(a.rows[0].cells);
console.log(a.rows[0].cells[0]);
console.log(a.rows[0].rowIndex);
