// Function to check the user's answer
function checkAnswer() {
  // Define the correct answer
  const correctAnswer = "4";
  // Get the selected radio button
  const selectedRadio = document.querySelector('input[name="quiz"]:checked');
  // Get the feedback element
  const feedbackElement = document.getElementById("feedback");

  // Check if an answer was selected
  if (!selectedRadio) {
    feedbackElement.textContent = "Please Select an Answer first!";
    return;
  }
  // Get the user's answer
  const userAnswer = selectedRadio.value;
  // Compare the answer and provide feedback
  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "Correct! Well done.";
  } else {
    feedbackElement.textContent = "That's incorrect. Try again!";
  }
}
// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
