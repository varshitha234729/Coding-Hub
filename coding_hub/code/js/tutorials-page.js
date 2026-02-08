const buttons = document.querySelectorAll('.tab-button');
    const galleries = document.querySelectorAll('.video-gallery');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // hide all galleries
        galleries.forEach(gallery => gallery.classList.remove('active'));

        // show selected
        const target = button.dataset.target;
        document.getElementById(target).classList.add('active');
      });
    });
