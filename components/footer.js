(function () {
  const scriptSrc = document.currentScript.getAttribute('src');
  const base = scriptSrc.replace('components/footer.js', '');

  const html = `
<footer class="bg-[#0A1510] w-full py-16 px-12">
  <div class="max-w-7xl mx-auto">
    <div class="text-3xl font-black text-[#F5F0E8] mb-8 font-headline uppercase tracking-tighter">EASTWAY</div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
      <div>
        <h5 class="text-[#D0AC6E] font-headline font-bold uppercase tracking-widest text-xs mb-6">Get in Touch</h5>
        <ul class="space-y-4 font-['Inter'] text-sm text-[#F5F0E8]">
          <li class="flex items-center gap-2"><span class="material-symbols-outlined text-sm">mail</span> projects@eastwaygroup.ca</li>
          <li class="flex items-center gap-2"><span class="material-symbols-outlined text-sm">call</span> +1 (416) 800 6696</li>
          <li class="flex items-center gap-2"><span class="material-symbols-outlined text-sm">schedule</span> Mon – Fri: 8am – 5pm</li>
          <li class="flex items-center gap-2">
            <a href="https://www.instagram.com/eastwaygroup.ca/?hl=en" target="_blank" rel="noopener" class="flex items-center gap-2 hover:text-[#D0AC6E] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h5 class="text-[#D0AC6E] font-headline font-bold uppercase tracking-widest text-xs mb-6">Head Office</h5>
        <p class="font-['Inter'] text-sm text-[#F5F0E8]/70 leading-relaxed">
          599 Denison St. Unit 3<br/>
          Markham, Ontario<br/>
          Canada
        </p>
      </div>
      <div>
        <h5 class="text-[#D0AC6E] font-headline font-bold uppercase tracking-widest text-xs mb-6">Navigation</h5>
        <ul class="space-y-2 font-['Inter'] text-sm text-[#F5F0E8]/70">
          <li><a href="${base}index.html" class="hover:text-[#D0AC6E] transition-colors">Home</a></li>
          <li><a href="${base}About.html" class="hover:text-[#D0AC6E] transition-colors">About</a></li>
          <li><a href="${base}Services.html" class="hover:text-[#D0AC6E] transition-colors">Services</a></li>
          <li><a href="${base}Portfolio.html" class="hover:text-[#D0AC6E] transition-colors">Portfolio</a></li>
          <li><a href="${base}Contact.html" class="hover:text-[#D0AC6E] transition-colors">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="font-['Inter'] text-xs text-[#F5F0E8]/40 uppercase tracking-widest">&copy; 2026 EASTWAY CONSTRUCTION. ALL RIGHTS RESERVED.</div>
      <div class="flex gap-8">
        <a class="font-['Inter'] text-xs text-[#F5F0E8]/40 hover:text-[#D0AC6E] transition-colors uppercase tracking-widest" href="#">Privacy Policy</a>
        <a class="font-['Inter'] text-xs text-[#F5F0E8]/40 hover:text-[#D0AC6E] transition-colors uppercase tracking-widest" href="#">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
`;

  const root = document.getElementById('footer-root');
  if (root) root.outerHTML = html;
})();