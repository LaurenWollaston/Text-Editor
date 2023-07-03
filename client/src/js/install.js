const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      if (result.outcome === 'accepted') {
        console.log('PWA installation accepted by the user');
      } else {
        console.log('PWA installation rejected by the user');
      }
      deferredPrompt = null;
    }
  });

  window.addEventListener('appinstalled', (event) => {
    console.log('App sucessfully installed!');
  });