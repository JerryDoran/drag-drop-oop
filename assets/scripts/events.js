const button = document.querySelector('button');

const buttonClickHandler = event => {
  event.target.disabled = true;
  console.log(event);
};
const anotherButtonClickHandler = () => {
  console.log('This was clicked');
};
// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// buttons.forEach(btn => {
//   btn.addEventListener('click', buttonClickHandler);
// });

// window.addEventListener('scroll', e => {
//   console.log(e);
// });

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e);
});

const div = document.querySelector('div');

div.addEventListener('click', e => {
  console.log('CLICKED DIV');
  console.log(e);
});

button.addEventListener('click', e => {
  // Stops the propogation of the click event up to the 'div' or ancestor elements
  e.stopPropagation();
  console.log('CLICKED BUTTON');
  console.log(e);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(listItem => {
//   listItem.addEventListener('click', e => {
//     e.target.classList.toggle('highlight');
//   });
// });

// Event delegation pattern
list.addEventListener('click', e => {
  // e.target.classList.toggle('highlight');
  e.target.closest('li').classList.toggle('highlight');

  // Programatically trigger an event
  // form.submit();

  // Trigger the button click event will call the preventDefault() method of the submit button
  button.click();
});
