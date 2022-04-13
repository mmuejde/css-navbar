document.addEventListener('visibilitychange', () => {
  document.hidden ? console.log('hidden') : console.log('visible');
});

let showingAlert = false;
const interval = setInterval(() => {
  document.title = showingAlert ? 'Homepage' : '(1) New Message';
  showingAlert = !showingAlert;
}, 1000);

window.addEventListener('beforeunload', (event) => {
  event.preventDefault();
  event.returnValue = '';
});
