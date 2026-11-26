# Istruzioni di Sara — Filo Verde

## 2026-11-25 · fase mockup · copy (fonte: CLIENTE/Sara, testi definitivi PROPOSTA da confermare)

Applicate su `mockup/` (pacchetto FILOVERDE.zip):

- Voce "Tree climbing" → "Arboricoltura" (nome della professione) in nav, footer, briciole, `<title>` e H1 di `tree-climbing.html`, link della card in homepage. URL `tree-climbing.html` invariato; restano "tree climbing" solo dove indica la tecnica (alt, titoli schede servizio).
- Home H1: "Ci prendiamo cura degli alberi e del tuo giardino".
- Home sottotitolo hero: dalla messa a dimora alle cure, abbattimento controllato solo senza alternative, poi aree verdi pubbliche e private.
- Card "Interventi sull'albero": "…abbattimento controllato, anche dove la piattaforma non arriva, fino alla rimozione del ceppo."
- "Come lavoriamo": osservare l'albero nel suo contesto; scegliere cosa tagliare nel rispetto dell'esemplare; progettare l'intervento (rigging al posto di "abbattimento sezionato"); ultimo punto "Si opera in sicurezza, come concordato" (buone pratiche, preventivo, cantiere pulito, smaltimento).
- Tree climbing, fase 04: "esecuzione della potatura o dell'abbattimento".
- Galleria: "Le nostre realizzazioni" → "Le nostre squadre all'opera".

## 2026-11-25 · fase mockup · foto (fonte: CLIENTE/Sara; foto da `assets/images/nuovefoto/`)

- Scheda "Fresatura ceppaie" (in `servizi.html`, `abbattimento-controllato.html`, `tree-climbing.html`): tolta `ceppaie.webp` (operatore con motosega), sostituita con `fresatura_ceppaie_scheda.webp` (ritaglio orizzontale di `fresanuovo.webp`). Nota: la foto mostra un miniescavatore, non la fresaceppi.
- `progettazione-giardini.html`: nuova sezione galleria "Giardini realizzati / Dal terreno nudo al giardino" (componente `galleria-fascia`, 4 foto `gallery_giardini_1-4.webp`). PROPOSTA: titolo e testi alternativi da confermare. CSS: modificatore `.galleria-fascia--quattro` (2×2 sotto 640px).
- Correzione: scheda fresatura ri-ritagliata con il soggetto più in alto. Pagina `fresatura-ceppaie.html`: foto interna `ceppi_fresa.webp` sostituita con `fresatura_ceppaie_int.webp` (da `fresanuovo1.webp`, 4:3, `ritratto--paesaggio`); `ceppi_fresa.webp` resta nella cartella, non più usata.
- Look&feel uniformato su tutte le foto nuove (6 file): esposizione portata alla media del set (~112), alte luci morbide, leggero viraggio caldo, blu del cielo desaturato (−22%), saturazione −5%. Script: scratchpad `grade.py` (non nel repo).
- Correzione: foto a destra in `fresatura-ceppaie.html` ora da `fresanuovo3.jpg` (ritaglio 4:3). Galleria `progettazione-giardini.html`: luminosità (media ~124) e saturazione (+6%, blu −14%) leggermente più alte.
- Correzione: foto a destra di "Alberi ad alto fusto" in `fresatura-ceppaie.html` allargata (ritaglio quadrato 1:1 di `fresanuovo3.jpg`), miniescavatore intero.
- `nuovefoto/giardinonuovo3.jpeg` e `fresanuovo3.jpg` convertite in `.webp` nella stessa cartella (originali jpg lasciati); `gallery_giardini_4.webp` e `fresatura_ceppaie_int.webp` del mockup rigenerate dai webp.
- Hero homepage: sfondo sostituito con `nuovaimghero.webp` → `home_hero_arboricoltore.webp` (+ `w1200/`), `object-position:66% 22%`. Alt aggiornato; didascalia "Potatura in tree climbing, Samarate (VA)" → "Arboricoltore Filoverde in tree climbing" (luogo dello scatto non noto, PROPOSTA). `home_hero.webp` resta nella cartella, non più usata.
- Hero homepage: didascalia → "Arboricoltore Filoverde".
- Contatti, form: nuovo campo facoltativo "Allega foto" (input file nativo, `accept="image/*"`, multiplo, max 5 foto / 10 MB ciascuna con validazione in `nav.js`), form `enctype="multipart/form-data"`. Limiti 5/10 MB = PROPOSTA. In sviluppo: il plugin del modulo WordPress deve gestire upload e allegati nell'email.
- Testo d'aiuto "Allega foto" (CLIENTE, Filippo Brusa: serve la pianta intera con il contesto, oltre ai dettagli del tronco): "Oltre ai dettagli del tronco, includi una foto della pianta intera con lo spazio intorno. Fino a 5 foto, massimo 10 MB ciascuna."
- `grazie.html` (thank you page dopo l'invio del form, già nel pacchetto) arricchita: sezione "Cosa succede adesso" in 3 passi (componente `indice`), pulsanti home/servizi, nota per inviare le foto dimenticate a info@filoverde.org, fascia "È urgente?" invariata. Tolto "di solito entro un giorno lavorativo" (tempo di risposta non indicato dal cliente). Testi = PROPOSTA.
