const copyBtn = document.querySelector('#discord');
const twitterBtn = document.querySelector('#twitter');
const githubBtn = document.querySelector('#github');
const notification = document.querySelector('#notification');

copyBtn.addEventListener('click', () => {
  const textToCopy = 'Nick747#9414';
  
  // Create a temporary input element
  const tempInput = document.createElement('input');
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);
  
  // Select the text
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices
  
  // Copy the text
  document.execCommand('copy');
  
  // Remove the temporary input element
  document.body.removeChild(tempInput);
  
  // Show notification
  notification.textContent = 'Nickname Copiato!';
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
});

twitterBtn.addEventListener('click', () => {
  window.open('https://twitter.com/nick7473',"_blank");
});

githubBtn.addEventListener('click', () => {
  window.open('https://github.com/nick747',"_blank");
});
