const buildInfo = document.getElementById("modal-build");
const userAgent = document.getElementById("modal-useragent");
const localTime = document.getElementById("modal-time");
const mdlcontainer = document.getElementById("modal-container");

const latest = fetch('https://api.github.com/repos/zachyfoxx/zachy.dev/git/refs/heads/main');
const commit = JSON.parse(fetch(JSON.parse(latest).object.url));

buildInfo.textContent = `Build ${commit.sha.slice(0,7)} ${new Date(commit.author.date).toUTCString()}`;
userAgent.textContent = `${window.navigator.userAgent}`;
localTime.textContent = `${new Date()}`;

var modal = document.getElementById("info-modal");
var modalClose = document.getElementById("info-button");
var spanClose = document.getElementsByClassName("close")[0];

window.onclick = function(event) {
  if (event.target == mdlcontainer) {
    mdlcontainer.style.display = "none";
    modal.style.display = "none";
  }
}

modalClose.onclick = function() {
  modal.style.display = "flex";
  mdlcontainer.style.display = "block";
}


const age = document.getElementById("age");
age.textContent = `${
  new Date(Date.now()).getFullYear() - new Date(1064120400000).getFullYear()
}`; // calculate age


function fetch(url) {
  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", url, false); 
  xmlHttpReq.send(null);
  return xmlHttpReq.responseText;
}