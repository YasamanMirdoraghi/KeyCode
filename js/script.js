let $ = document
let locationKey = $.querySelector('#location')
let title = $.querySelector('title')
let keyCodeElem = $.getElementById('keyCode')
let keyElem = $.getElementById('key')
let locationElem = $.getElementById('location')
let whichElem = $.getElementById('which')
let codeElem = $.getElementById('code')

document.body.addEventListener('keydown', function (event) {

	//raftar defult f1,f2,...
	event.preventDefault()
	
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'

	console.log(event);
	let eventKeyCode = event.keyCode
	let eventKey = event.key
	let eventLocation = event.location
	let eventWhich = event.which
	let eventCode = event.code

	switch (eventLocation) {
		case 0:locationElem.innerHTML="General keys";break;
		case 1:locationElem.innerHTML="Left-side modifier keys";break;
		case 2:locationElem.innerHTML="Right-side modifier keys";break;
		case 3:locationElem.innerHTML="Numpad";break;
		default: locationElem.innerHTML ="Not Found";break;
	}

	keyCodeElem.innerHTML = eventKeyCode
	keyElem.innerHTML = eventKey
	whichElem.innerHTML = eventWhich
	codeElem.innerHTML = eventCode

})