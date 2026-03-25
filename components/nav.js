(function () {
  // Determine base path from script src ('' for root pages, '../' for subdirectories)
  const scriptSrc = document.currentScript.getAttribute('src');
  const base = scriptSrc.replace('components/nav.js', '');

  // Determine which nav link is active
  const pathname = window.location.pathname;
  const filename = pathname.split('/').pop() || 'index.html';
  const inProjectDetails = pathname.includes('/ProjectDetails/');

  function active(page) {
    switch (page) {
      case 'home':
        return filename === 'index.html' || filename === '';
      case 'about':
        return filename === 'About.html';
      case 'services':
        return filename === 'Services.html' || (filename.endsWith('Detail.html') && !inProjectDetails);
      case 'portfolio':
        return filename === 'Portfolio.html' || inProjectDetails;
      case 'contact':
        return filename === 'Contact.html';
      default:
        return false;
    }
  }

  function desktopLink(page, label, href) {
    const cls = active(page)
      ? 'text-[#D0AC6E] border-b-2 border-[#D0AC6E] pb-1'
      : 'text-[#F5F0E8] hover:text-[#D0AC6E] transition-colors';
    return `<a class="${cls}" href="${base}${href}">${label}</a>`;
  }

  function mobileLink(page, label, href) {
    const cls = active(page) ? 'text-[#D0AC6E]' : 'text-[#F5F0E8] hover:text-[#D0AC6E] transition-colors';
    return `<a class="${cls}" href="${base}${href}">${label}</a>`;
  }

  const root = document.getElementById('nav-root');
  if (!root) return;

  root.innerHTML = `
<nav class="fixed top-0 w-full z-50 bg-[#0D1A13]/85 backdrop-blur-md">
  <div class="flex justify-between items-center px-8 py-6 max-w-full mx-auto">
    <a href="${base}index.html" class="text-2xl font-black text-[#F5F0E8] tracking-tighter font-headline uppercase">EASTWAY</a>
    <div class="hidden md:flex items-center space-x-8 font-headline font-bold uppercase tracking-wider text-sm">
      ${desktopLink('home',      'Home',      'index.html')}
      ${desktopLink('about',     'About',     'About.html')}
      ${desktopLink('services',  'Services',  'Services.html')}
      ${desktopLink('portfolio', 'Portfolio', 'Portfolio.html')}
      ${desktopLink('contact',   'Contact',   'Contact.html')}
    </div>
    <a href="${base}Contact.html" class="hidden md:inline-block bg-[#D0AC6E] text-[#1C3529] px-6 py-2 font-headline font-bold text-xs tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all">GET A QUOTE</a>
    <button onclick="document.getElementById('eastway-mobile-menu').classList.toggle('hidden')" class="md:hidden flex flex-col justify-center gap-1.5 p-1" aria-label="Toggle navigation">
      <span class="w-6 h-0.5 bg-[#F5F0E8] block"></span>
      <span class="w-6 h-0.5 bg-[#F5F0E8] block"></span>
      <span class="w-6 h-0.5 bg-[#F5F0E8] block"></span>
    </button>
  </div>
  <div id="eastway-mobile-menu" class="hidden md:hidden bg-[#0D1A13] border-t border-white/10 px-8 py-6">
    <div class="flex flex-col gap-5 font-headline font-bold uppercase tracking-wider text-sm">
      ${mobileLink('home',      'Home',      'index.html')}
      ${mobileLink('about',     'About',     'About.html')}
      ${mobileLink('services',  'Services',  'Services.html')}
      ${mobileLink('portfolio', 'Portfolio', 'Portfolio.html')}
      ${mobileLink('contact',   'Contact',   'Contact.html')}
      <a href="${base}Contact.html" class="bg-[#D0AC6E] text-[#1C3529] px-6 py-3 font-headline font-bold tracking-widest text-xs uppercase text-center mt-2 inline-block">GET A QUOTE</a>
    </div>
  </div>
</nav>`;
})();