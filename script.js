

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  };

  window.addEventListener('keydown', playSound);