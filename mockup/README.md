# Filoverde – pacchetto per il montaggio

Versione statica del sito: 12 pagine più la pagina di ringraziamento, CSS e JS condivisi, font locali, immagini e video. È la base di riferimento per il montaggio in WordPress.

## Struttura

```
index.html                  Home
tree-climbing.html          Servizio di punta
servizi.html                Elenco servizi (con modulo)
  abbattimento-controllato.html
  fresatura-ceppaie.html
  potatura-consolidamento.html
  progettazione-giardini.html
  manutenzione-aree-verdi.html
  impianti-irrigazione.html
  trattamenti-fitosanitari.html
chi-siamo.html
contatti.html               Contatti (con modulo)
grazie.html                 Pagina di ringraziamento dopo l'invio (noindex)
assets/
  css/style.css             Unico foglio di stile (token in :root)
  css/fonts.css             @font-face dei font locali
  fonts/                    Archivo e Petrona, woff2 (latin e latin-ext)
  js/nav.js                 Menu mobile, reveal, mappa su consenso, modulo, video
  images/foto/              Fotografie (WebP)
  images/logo/              Logo Filoverde e marchi delle certificazioni
  video/                    Video della galleria Tree climbing (MP4) e anteprime *_poster.webp
  favicon/
```

Tutti i percorsi sono relativi e partono dalla radice (`assets/...`).

## Anteprima su Netlify

- **Pubblicazione:** trascina la cartella in app.netlify.com (Deploys). Non serve nessuna build: la configurazione è in `netlify.toml`.
- **Modulo:** su Netlify porta a `grazie.html` ma non invia dati. È solo un'anteprima del flusso.

## Montaggio in WordPress

**Impostazioni di base**
- **Tema:** conviene un tema a blocchi o un tema leggero. In alternativa un child theme che carichi `style.css`, `fonts.css` e `nav.js` (con `wp_enqueue_style` e `wp_enqueue_script` nel footer).
- **Classi CSS:** sono in italiano e in stile BEM (`testata`, `scheda__media`, `galleria-fascia__riga`…). Mantenerle permette di riusare `style.css` senza modifiche.
- **Font:** sono locali, nessuna chiamata a Google Fonts (conformità GDPR). Mantieni il `preload` di `archivo-normal-latin.woff2` nell'`<head>`.

**SEO**
- **Dati strutturati:** Home e Contatti contengono `LocalBusiness` in JSON-LD (indirizzo, telefono, P.IVA, coordinate), senza URL di dominio.
- **Plugin SEO:** il dominio non è ancora deciso, quindi `canonical`, Open Graph, sitemap e robots.txt non sono inclusi. Li genera il plugin SEO (Yoast o Rank Math) in WordPress.

**Immagini**
- **Foto:** sono già ricompresse e ogni `<img>` ha `width`/`height` uguali al file reale. Caricale nella libreria media, così WordPress genera da solo i formati ridotti e `srcset`.
- **Attributi:** lascia `loading="lazy"` sotto la piega e `fetchpriority="high"` solo sulla foto di testata.

**Video (galleria Tree climbing)**
- **Comportamento attuale:** `autoplay muted loop playsinline` più un'immagine `poster`. `nav.js` li mette in pausa fuori schermo e li fa ripartire quando tornano visibili (`data-autoplay`).

**Modulo contatti**
- **Comportamento attuale:** i moduli di `contatti.html` e `servizi.html` hanno `action="grazie.html"` e l'attributo `data-form-contatto`. `nav.js` controlla i campi obbligatori e poi porta a `grazie.html`. **I dati non vengono inviati:** è solo il flusso di interfaccia.
- **In WordPress:** ricostruiscilo con un plugin (Contact Form 7, WPForms o Gravity Forms) riprendendo le classi `form`, `campo` e `privacy`. Imposta il redirect alla pagina "Grazie" e rimuovi il blocco del modulo da `nav.js`.

**Mappa**
- **Contatti:** la mappa si carica solo dopo il clic. Non sostituirla con un embed caricato automaticamente.

**Menu e collegamenti**
- **Menu:** la voce attiva usa `aria-current="page"`. In WordPress va resa dinamica, ad esempio con un filtro su `nav_menu_link_attributes`.
- **Link legali:** privacy e cookie puntano a filoverde.org; aggiornali se gli URL cambiano.

## Da completare

- **Campo foto nel modulo:** da chiedere al cliente se vuole un campo "Allega una foto della pianta". La nota è anche nel codice di `contatti.html`.
- **Foto dettagliate:** alcune restano tra 300 e 450 KB, per lo più foto con molto fogliame (`fresaturaceppi_hero`, `confucio_citazione`, `potatura_consolidamento_altofusto`, `chisiamo_hero`). In WordPress verranno servite in formato ridotto tramite `srcset`.

## Verifica eseguita

- **Collegamenti interni:** controllati 542 riferimenti (pagine, ancore, CSS, JS, immagini, poster, video, font, action dei moduli): nessuno rotto.
- **Riferimenti vecchi:** nessun riferimento residuo a `/mockup/`, `../` o Google Fonts.
