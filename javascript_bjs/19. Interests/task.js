//	select all checkboxes 
const allThings = Array.from(document.querySelectorAll('.interest__check'));

//	add global event listener
window.addEventListener('change', e => {
	let check = e.target;

	//	exit in case of no change event from array of allThings 
	if(allThings.indexOf(check) === -1) {
    return;
  }

	//	check/unchek children
	const children = e.target.closest('.interest').querySelectorAll('input');
	children.forEach(child => child.checked = check.checked);
	
	//	go up from target check
	while(check) {
		
		//	get parent and sibling checkboxes
    const parent = check.closest('ul').parentElement.querySelector('input');
    const siblings = Array.from((parent.closest('li').querySelector('ul')).querySelectorAll('input'));

		//	get checked state of siblings 
		const checkStatus = siblings.map(check => check.checked);
		const every  = checkStatus.every(Boolean);
		const some = checkStatus.some(Boolean);		
		
		//	check parent if all siblings are checked, set indeterminate
		parent.checked = every;		
		parent.indeterminate = !every && every !== some;

		//	next loop
		check = check != parent ? parent : 0;
	}
});