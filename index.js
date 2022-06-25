// Write your code here!
const selectBody = document.querySelector('body');
const selectMain = document.getElementById('main');

selectBody.removeChild(selectMain);

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = " Josh is the champion ";

selectBody.append(newHeader);


