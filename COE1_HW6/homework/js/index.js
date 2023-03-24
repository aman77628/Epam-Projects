/* eslint-disable no-mixed-spaces-and-tabs */
function visitLink(path) {
	let count = localStorage.getItem(path) || 0;
	localStorage.setItem(path, ++count);
  }
  function viewResults() {
	const result = {};
	Object.entries(localStorage).forEach(([key, value]) => {
	  result[key] = value;
	});
	const resultList = document.createElement('ul');
	for (const [key, value] of Object.entries(result)) {
	  const listItem = document.createElement('li');
	  listItem.innerText = `Visited ${key} ${value} time(s)`;
	  resultList.appendChild(listItem);
	}
	document.getElementById('content').appendChild(resultList);
	localStorage.clear();
  }