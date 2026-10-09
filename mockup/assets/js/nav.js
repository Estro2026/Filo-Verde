// Navigazione mobile e animazioni d'ingresso. Nessuna dipendenza.
(function () {
  var bottone = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav-principale');

  if (bottone && nav) {
    // Un solo punto aggiorna stato visivo, aria-expanded ed etichetta del pulsante.
    var imposta = function (aperto) {
      nav.setAttribute('data-aperto', String(aperto));
      bottone.setAttribute('aria-expanded', String(aperto));
      bottone.setAttribute('aria-label', aperto ? 'Chiudi il menu' : 'Apri il menu');
    };
    var chiudi = function () { imposta(false); };

    bottone.addEventListener('click', function () {
      imposta(bottone.getAttribute('aria-expanded') !== 'true');
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && bottone.getAttribute('aria-expanded') === 'true') {
        chiudi();
        bottone.focus();
      }
    });

    var mq = window.matchMedia('(min-width: 64em)');
    mq.addEventListener('change', function (e) {
      if (e.matches) chiudi();
    });
  }

  // Ingresso progressivo degli elementi allo scroll.
  var statici = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var elementi = document.querySelectorAll('[data-reveal], .scaglionato');
  if (!elementi.length) return;

  if (statici || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(elementi, function (el) { el.classList.add('e-visibile'); });
    return;
  }

  var osservatore = new IntersectionObserver(function (voci) {
    voci.forEach(function (voce) {
      if (!voce.isIntersecting) return;
      voce.target.classList.add('e-visibile');
      osservatore.unobserve(voce.target);
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

  Array.prototype.forEach.call(elementi, function (el) { osservatore.observe(el); });
})();

// Mappa: l'iframe esterna si crea solo dopo il click, cosi' nessun servizio
// di terzi viene contattato prima della scelta dell'utente.
(function () {
  var mappa = document.querySelector('[data-mappa]');
  if (!mappa) return;
  var bottone = mappa.querySelector('[data-mappa-carica]');
  if (!bottone) return;

  bottone.addEventListener('click', function () {
    var iframe = document.createElement('iframe');
    iframe.src = mappa.getAttribute('data-src');
    iframe.title = 'Mappa con la sede di Filoverde a Samarate';
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer';
    var indicazioni = mappa.querySelector('.collegamento');
    mappa.textContent = '';
    mappa.classList.add('mappa--attiva');
    mappa.appendChild(iframe);
    if (indicazioni) {
      var riga = document.createElement('div');
      riga.className = 'mappa__azioni mappa__azioni--sotto';
      riga.appendChild(indicazioni);
      mappa.appendChild(riga);
    }
  });
})();
