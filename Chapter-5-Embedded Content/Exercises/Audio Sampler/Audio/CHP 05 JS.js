const containers = document.querySelectorAll('.container'); // Retrieves the class 'container' and assigns it to the container variable

containers.forEach(container => { // Goes through each container element
  container.addEventListener('click', function () { // Listens for a click to execute the following
    const audio = this.querySelector('audio'); // Looks for the audio element
    if (audio) { // Plays the audio element when it is found
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
