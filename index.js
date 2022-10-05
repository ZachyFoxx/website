const div = document.getElementById('age');

div.textContent = `${(new Date(Date.now()).getFullYear() - new Date(1064120400000).getFullYear())}`; // calculate age