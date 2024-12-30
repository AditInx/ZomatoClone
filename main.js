async function loadComponent(selector, file) {
    const response = await fetch(`components/${file}`);
    const html = await response.text();
    document.querySelector(selector).innerHTML = html;
  }
  
  // Load Components
  loadComponent("#navbar", "navbar.html");
  loadComponent("#carousel", "carousel.html");
  loadComponent("#delivery", "delivery-section.html");
  loadComponent("#cards", "cards.html");
  loadComponent("#accordian","accordian.html");
  loadComponent("#footer","footer.html");