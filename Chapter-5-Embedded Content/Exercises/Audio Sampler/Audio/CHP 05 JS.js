document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.container');
  
    containers.forEach(container => {
      container.addEventListener('click', function () {
        const audio = this.querySelector('audio');
        if (audio) {
          audio.play();
        }
      });
  
      // Hover animation
      container.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#45a049';
        this.style.color = '#fff';
      });
  
      container.addEventListener('mouseout', function () {
        this.style.backgroundColor = '#fff';
        this.style.color = '#000';
      });
    });
  });
  