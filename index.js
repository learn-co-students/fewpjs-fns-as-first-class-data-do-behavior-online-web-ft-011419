/* Given Code, don't edit */

function handleClick(e) {

  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))

}
function greet(timeStr){
 const  time = parseInt(timeStr.slice(0,2))

if (time < 12)return "Good Morning"
if (time > 17)return "Good Evening"
  return "Good Afternoon"
}
/* Write your implementation of displayMessage() */
function displayMessage(saying){
  document.getElementById('greeting').innerText = saying
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
