/* START TASK 1: Your code goes here */
    let cells = document.getElementsByTagName('td');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function() {
            if (this.classList.contains('yellow')) {
                this.classList.remove('yellow');
            } else {
                this.classList.add('yellow');
            }
        });
    }

    let greenCell = document.getElementsByClassName('green')[0];
    greenCell.addEventListener('click', function() {
        let allCells = document.getElementsByTagName('td');
        for (let i = 0; i < allCells.length; i++) {
            allCells[i].classList.add('yellow');
        }
    });
/* END TASK 1 */

/* START TASK 2: Your code goes here */
const phoneInput = document.getElementById('phone-input');
const sendButton = document.getElementById('send-button');
const notification = document.getElementById('notification');

phoneInput.addEventListener('input', () => {
  const value = phoneInput.value.trim();
  const regex = /^\+380\d{9}$/;

  if (regex.test(value)) {
    sendButton.disabled = false;
    phoneInput.style.border = '2px solid black';
    notification.style.display = 'none';
  } else {
    sendButton.disabled = true;
    phoneInput.style.border = '2px solid red';
    notification.textContent = 'Type Number does not follow format +380*********';
    notification.className = 'invalid';
    notification.style.display = 'block';
  }
});

sendButton.addEventListener('click', () => {
  notification.textContent = 'Data was successfully sent';
  notification.className = 'valid';
  notification.style.display = 'block';
});
/* END TASK 2 */

/* START TASK 3: Your code goes here */

/* END TASK 3 */
