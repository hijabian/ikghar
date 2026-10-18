(function () {
  if (document.getElementById('ikghar-prefooter')) return;

  var pages = [
    { href: 'homes-in-pakistan-for-pakistani-families-in-texas.html', title: 'Homes in Pakistan for Pakistani Families in Texas' },
    { href: 'buy-house-in-pakistan-from-texas.html', title: 'Buy a House in Pakistan from Texas' },
    { href: 'affordable-houses-in-pakistan-for-pakistanis-in-texas.html', title: 'Affordable Houses in Pakistan for Pakistanis in Texas' },
    { href: 'buy-home-in-islamabad-from-texas.html', title: 'Buy a Home in Islamabad from Texas' },
    { href: 'buy-house-in-rawalpindi-from-texas.html', title: 'Buy a House in Rawalpindi from Texas' },
    { href: 'affordable-homes-islamabad-overseas-pakistanis-texas.html', title: 'Affordable Homes in Islamabad for Overseas Pakistanis' },
    { href: 'affordable-houses-rawalpindi-overseas-pakistanis-texas.html', title: 'Affordable Houses in Rawalpindi for Overseas Pakistanis' },
    { href: 'houses-for-sale-pakistan-overseas-pakistanis-texas.html', title: 'Houses for Sale in Pakistan for Overseas Pakistanis' },
    { href: 'how-to-buy-house-in-pakistan-from-texas.html', title: 'How to Buy a House in Pakistan from Texas' },
    { href: 'small-affordable-houses-pakistan-pakistanis-texas.html', title: 'Small Affordable Houses in Pakistan' }
  ];

  var style = document.createElement('style');
  style.textContent = [
    '#ikghar-prefooter{background:#e8f5ef;border-top:1px solid rgba(11,93,59,0.1);padding:3rem 1.5rem 2.5rem;}',
    '#ikghar-prefooter .pf-inner{max-width:1140px;margin:0 auto;}',
    '#ikghar-prefooter .pf-label{font-size:0.78rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#c9a227;margin-bottom:0.5rem;}',
    '#ikghar-prefooter .pf-title{font-family:"Playfair Display",Georgia,serif;font-size:1.45rem;color:#083d27;margin-bottom:1.5rem;}',
    '#ikghar-prefooter .pf-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:0.75rem 1.5rem;}',
    '#ikghar-prefooter .pf-grid a{font-size:0.92rem;color:#0b5d3b;text-decoration:none;line-height:1.4;padding:0.35rem 0;border-bottom:1px solid transparent;transition:border-color 0.2s,color 0.2s;}',
    '#ikghar-prefooter .pf-grid a:hover{color:#083d27;border-bottom-color:#c9a227;}',
    '@media(max-width:600px){#ikghar-prefooter{padding:2rem 1.25rem;}#ikghar-prefooter .pf-title{font-size:1.25rem;}}'
  ].join('');
  document.head.appendChild(style);

  var section = document.createElement('section');
  section.id = 'ikghar-prefooter';
  section.setAttribute('aria-label', 'Explore more housing guides');

  var linksHtml = pages.map(function (p) {
    return '<a href="' + p.href + '">' + p.title + '</a>';
  }).join('');

  section.innerHTML =
    '<div class="pf-inner">' +
      '<div class="pf-label">Explore More</div>' +
      '<div class="pf-title">Housing Guides for Pakistani Families</div>' +
      '<div class="pf-grid">' + linksHtml + '</div>' +
    '</div>';

  var footer = document.querySelector('footer');
  if (footer && footer.parentNode) {
    footer.parentNode.insertBefore(section, footer);
  } else {
    document.body.appendChild(section);
  }
})();