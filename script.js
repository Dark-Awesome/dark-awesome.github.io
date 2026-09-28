document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    document.body.dataset.navigating = 'true';
    window.setTimeout(() => delete document.body.dataset.navigating, 500);
  });
});
