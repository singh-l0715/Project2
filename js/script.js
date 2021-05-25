
// get the contacts array using query selector.
const list= Array.from(document.querySelectorAll( '.contact-list li' ));

const pageHeader=document.querySelector(`h2`);

pageHeader.innerText="Students";//changing the list names.

const listElement = document.getElementById('contact-list');

const paginationElement = document.getElementById('pagination');

var current_page = 1;
var rows = 10;//as required.

function ShowList (items, container, rows_per_page, page) {
	container.innerHTML = "";
	page--;

	var begin = rows_per_page * page;
	var end = begin + rows_per_page;
	var paginatedItems = items.slice(begin, end);

	for (var i = 0; i < paginatedItems.length; i++) {
		var item = paginatedItems[i].innerHTML;
        //console.log(item);

		var item_element = document.createElement('div');
		item_element.classList.add('contact-list');
		item_element.innerHTML = item;
		
		container.appendChild(item_element);
	}
}


function SetUp (items, container, rows_per_page) {
	container.innerHTML = "";
	// using math floor function to keep the count to 10 contact per page.
	var page_count = Math.floor(items.length / rows_per_page);
	for (var i = 1; i < page_count + 1; i++) {
		var btn = PaginationButton(i, items);
		container.appendChild(btn);
	}
}


function PaginationButton (page, items) {
	var button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		ShowList(items, listElement, rows, current_page);

		var current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

ShowList(list, listElement, rows, current_page);
SetUp(list, paginationElement, rows);