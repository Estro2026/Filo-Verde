# Mockup — Filo Verde

**Stato:** `WAITING_FOR_APPROVAL`
**Data:** 2026-10-08
**File:** `mockup/` (5 pagine HTML + `mockup/assets/css/style.css` + `mockup/assets/js/nav.js`)
**Immagini:** `assets/images/` — vedi [asset-inventory.md](asset-inventory.md)

---

## 1. Perimetro

5 pagine, secondo la sitemap approvata in [../02-ux/SITEMAP.md](../02-ux/SITEMAP.md):

| Pagina | File | Obiettivo |
|--------|------|-----------|
| Home | `index.html` | Qualificare il visitatore e indirizzarlo ai due percorsi |
| Tree climbing | `tree-climbing.html` | Spiegare la tecnica e giustificarne la scelta |
| Servizi | `servizi.html` | Coprire l'offerta completa, raccogliere richieste |
| Chi siamo | `chi-siamo.html` | Autorevolezza: qualifiche, certificazioni, approccio |
| Contatti | `contatti.html` | Conversione: telefono e form |

**Divergenza rilevata — CLIENTE vs sito attuale:** il sito online ha una pagina **Gallery** e non ha una pagina **Tree climbing**. La sitemap di progetto prevede il contrario. Nel mockup i contenuti della gallery sono distribuiti in Tree climbing e Chi siamo. **Da confermare.**

---

## 2. Direzione visiva

### Colore — MATERIALE (estratto dal CSS del sito attuale)

| Token | Hex | Origine | Uso |
|-------|-----|---------|-----|
| `--verde-800` | `#0B3F35` | sito attuale (colore dominante) | superfici primarie, header, hero |
| `--verde-700` | `#125C4D` | sito attuale | fasce CTA |
| `--verde-500` | `#1B947B` | sito attuale | accento, bottoni, link di sezione |
| `--verde-900` | `#07261F` | INFERENZA (scurimento di 800) | footer, overlay |
| `--verde-200` | `#BFD9D1` | INFERENZA | testo secondario su fondo scuro |
| `--verde-050` | `#EEF3F0` | INFERENZA | hover, tag |
| `--sabbia` | `#F6F4EF` | PROPOSTA | sezioni alternate, stacca dal bianco |
| `--corteccia` | `#6B5A48` | PROPOSTA | neutro caldo, definito ma non ancora impiegato |

Il verde profondo è la **superficie dominante**, non un accento su fondo bianco: differenzia dai competitor, che lavorano quasi tutti in chiaro.

### Tipografia

- **Titoli:** Fraunces, serif variabile (assi opsz, wght, SOFT, WONK). PROPOSTA.
- **Testo:** Inter 400/500/600. PROPOSTA. Grotesque neutro, in contrasto col serif dei titoli.
- Scala fluida con `clamp()`, nessun breakpoint tipografico manuale.

### Scelte di art direction

Per evitare il registro generico (cfr. `anti-ai-generic-style`):

- **Il "filo"** — una linea verticale sottile con nodi, che struttura i blocchi elenco. Deriva dal nome del cliente, non è decorazione.
- **Indice numerato dei servizi** (`01`–`06`) in luogo della solita griglia di card con icona: registro tecnico, coerente con l'arboricoltura certificata e con il target aziende/PA.
- **Raggio di 3px**, non pill. Bordi netti.
- **Hero asimmetrico** con immagine verticale 4:5 e didascalia che dichiara luogo e tipo di intervento: prova di lavoro, non stock.
- **Nessuna icona generica** (foglie, check circolari, mani che tengono germogli).

---

## 3. Contenuti

Il copy riusa **verbatim** i testi del sito attuale dove disponibili (descrizione attività, promesse di servizio, qualifiche di Filippo Brusa, citazione di Confucio, claim sulle certificazioni).

Copy nuovo — **PROPOSTA, da validare col cliente:**

- H1 home: «Ci prendiamo cura degli alberi ad alto fusto, per tutto il loro ciclo di vita.»
- Blocco «Come lavoriamo» (3 voci) in home.
- Intera pagina Tree climbing: quando serve, cosa facciamo, processo in 5 passi.
- Segmentazione committenti in 4 blocchi (aziende, enti pubblici, condomini, privati).
- Microcopy dei form e testi di aiuto.

### Affermazioni da verificare prima della pubblicazione

- «Tagli di ritorno, mai capitozzature» — buona pratica arboricolturale, ma è un impegno: confermare.
- Riferimento ai «lavori in quota» senza citare la norma: valutare se esplicitare il d.lgs. 81/08 come fa Formazione 3T.
- Numeri in home (2015 / 2021 / 2022) presi da Chi siamo del sito attuale.

### Dato incoerente sul sito attuale

L'indirizzo compare come **Via Achille Grandi, 12** (title e SEO) e **Via Achille Gramsci, 12** (corpo della pagina Contatti). Nel mockup ho usato **Grandi**. **Da confermare al cliente.**

---

## 4. Benchmark competitor

| Competitor | Osservazione | Principio trasferibile | Applicato |
|------------|--------------|------------------------|-----------|
| Formazione 3T | Credenziali in apertura («arboricoltori dal 1997»), richiami normativi espliciti, tre pilastri di valore, griglia di offerte con link «scopri» | Le credenziali datate valgono più degli aggettivi, soprattutto verso PA e aziende | Blocco date 2015/2021/2022 in home; fascia certificazioni |
| Arboteam | Payoff identitario («Quelli degli alberi»), telefono ed email sempre in testata | Contatto diretto sempre a portata | Telefono nella testata di ogni pagina e fascia CTA a chiusura |
| Effetto Terra | — | — | **Non valutabile:** `effettoterra.it` è una bottega di commercio equo e solidale, non un operatore del verde. Il brief probabilmente intende un'altra azienda omonima. **Chiedere al cliente l'URL corretto.** |

Nessun elemento distintivo dei competitor è stato replicato.

---

## 5. Responsive

Mobile-first, breakpoint in `em`:

| Breakpoint | Cambiamenti |
|------------|-------------|
| `< 64em` | Menu a pannello con toggle, etichetta «Chiama» nascosta (resta il numero) |
| `≥ 40em` | Form su 2 colonne, griglie a 2, galleria a 3 |
| `≥ 48em` | Entry point affiancati, footer a 3 colonne, CTA su riga |
| `≥ 64em` | Hero e blocco «filo» a 2 colonne, griglie a 3, contatti affiancati |

Le colonne non collassano tutte in verticale: le griglie di dati restano a 2 colonne già da 40em. Target touch ≥ 44–48px. Nessuna dimensione in `px` per il testo.

---

## 6. Accessibilità (verificato nel markup, non ancora collaudato)

- Skip link, landmark (`header`/`main`/`footer`/`nav`), un solo `h1` per pagina, gerarchia senza salti.
- `aria-current="page"`, `aria-expanded`/`aria-controls` sul toggle, chiusura con `Esc`.
- Tutte le immagini hanno `alt`; le decorative hanno `alt=""`.
- `:focus-visible` con outline a 3px.
- `prefers-reduced-motion` rispettato.
- Form: `label` sempre associata, `autocomplete`, `aria-describedby` per i testi di aiuto.

**Da collaudare:** contrasti effettivi (in particolare `--verde-500` su `--verde-800` per le etichette), navigazione da tastiera reale, screen reader.

---

## 7. Note per lo sviluppo

- Header, footer e form sono identici su tutte le pagine: in sviluppo devono diventare **componenti condivisi**, non duplicati.
- Form non funzionante (`action="#"`): serve endpoint, validazione server, anti-spam e invio email.
- Mappa contatti: placeholder. Da caricare **dopo il consenso cookie**.
- Gestione cookie/privacy: le pagine legali esistono sul sito attuale, vanno riportate.
- Immagini: servono `srcset`/`sizes` e varianti responsive (vedi asset-inventory).
- Font da Google Fonts: in produzione valutare self-hosting per GDPR.

---

## 8. Cosa manca per chiudere

| Elemento | Stato |
|----------|-------|
| Logo vettoriale | MANCANTE — bloccante per la produzione |
| Foto cantieri aziende / enti pubblici | MANCANTE — bloccante per il posizionamento B2B |
| Recensioni / testimonianze | MANCANTE — il blocco non è stato inserito |
| Area geografica di intervento | **Trasferta possibile, nessun limite di zona** (CLIENTE, indicato in chat il 2026-10-09). Il sito attuale cita solo la Lombardia nella meta description: non va riportato come limite. Il mockup non elenca zone; la mappa mostra solo la sede (Samarate, coordinate 45.63385, 8.78600) e il testo spiega la trasferta. Copy del blocco: PROPOSTA. Da confermare con il cliente se esistono limiti di distanza o costi di trasferta da dichiarare |
| P. IVA e dati societari | DA CONFERMARE |
| Indirizzo corretto (Grandi / Gramsci) | **Grandi** risulta anche nei dati strutturati del sito (`streetAddress: 12 Via Achille Grandi`) e nel titolo; Gramsci compare solo nel corpo di Contatti. Da confermare con il cliente |
| URL corretto del competitor "Effetto Terra" | DA CONFERMARE |
| Pagina Gallery vs Tree climbing | DA CONFERMARE |

---

## 9. Nota su `mockup-plan.md`

`docs/03-design/mockup-plan.md` descrive un sistema di gestione clienti con palette blu `#2A5B8C`, obiettivi GDPR e dashboard analitiche. **Non riguarda Filo Verde** e non è stato usato come fonte. Stesso problema in `docs/03-design/information-architecture.md`, che contiene ragionamento di processo invece del documento. Da rigenerare o rimuovere.

---

`WAITING_FOR_APPROVAL`

---

## 10. Servizi del sito attuale: confronto con il mockup

Dal sorgente del sito attuale (pagina Servizi) risultano **8 servizi con titolo e testo propri**, piu ricchi di quanto il mockup riporta. Il mockup usa 6 voci, alcune con titolo diverso e una sola riferita a un servizio che li' non c'e'. **MATERIALE.**

| Servizio nel sito attuale | Nel mockup |
|---|---|
| Abbattimento e potatura alberi con tecnica Tree Climbing | presente (Tree climbing) |
| Abbattimento controllato | presente |
| Fresatura ceppaie | presente |
| Potatura e consolidamento alberature ad alto fusto | presente solo come "Potatura" |
| Progettazione e realizzazione giardini | presente come "Progettazione del verde" |
| Manutenzione ordinaria e straordinaria di aree verdi | presente |
| **Installazione e manutenzione impianti di irrigazione** | **assente** |
| **Trattamenti fitosanitari e cura delle piante** | presente come "Monitoraggio fitosanitario" (titolo inventato, il servizio reale comprende trattamenti e concimazione) |

Da allineare dopo approvazione: aggiungere l'irrigazione, usare i titoli del cliente, riprendere i testi originali.

---

## 11. Informative privacy e cookie

Nel mockup i link puntano alle pagine del **sito attuale** (MATERIALE): `https://www.filoverde.org/informativa-sulla-privacy` e `https://www.filoverde.org/informativa-sui-cookie`, entrambe verificate (HTTP 200). Compaiono nel footer di tutte le pagine e nella casella di consenso dei due form (Servizi e Contatti), in nuova scheda.

In sviluppo vanno **riportate come pagine interne** del nuovo sito: il dominio non resta su Wix, quindi i link attuali smetterebbero di funzionare. I testi vanno rivisti dal cliente, perche descrivono i servizi e i cookie del sito Wix (analytics, form, eventuale mappa) e non quelli del nuovo.

---

## 12. Responsive e mobile: stato verificato (2026-10-09)

Verifica fatta su tutte e 5 le pagine a **320, 375, 390, 430, 600, 768, 820, 1024, 1180, 1280, 1440 e 1920px**, in un browser reale con un server locale, non solo leggendo il codice. In piu: telefono in orizzontale (812x375) e controllo visivo su 375, 768 e 1024.

**Esito:** nessun overflow orizzontale, nessun elemento che esce dallo schermo, tutti i bersagli di tocco a 44px o piu, corpo del testo mai sotto 12px.

### Breakpoint

| Larghezza | Cambiamenti principali |
|---|---|
| < 40em (640px) | un'unica colonna; bottoni a tutta larghezza; marchi in griglia 2x2; indice servizi compatto |
| 40em | form e griglie a 2 colonne |
| 48em (768px) | card della home affiancate; riga di foto in una sola fila; footer a 3 colonne |
| 56em (896px) | blocco "Come lavoriamo" a due colonne |
| 64em (1024px) | compare la barra desktop; griglie a 3-4 colonne; contatti affiancati |
| altezza < 30rem, orizzontale | hero con meno aria e titolo ridotto |

L'occhiello di sezione e fluido: 16px da circa 680px in su, fino a 13px su telefono, cosi' l'occhiello della hero resta su una riga.

### Touch

- Effetti `:hover` solo con mouse (`@media (hover:hover)`): su touch non restano "incollati" dopo il tocco.
- Rinforzo al tocco con `:active` dove manca l'hover.
- Bersagli da 44px su logo, voci del menu, link del footer, breadcrumb, link social, link "indicazioni", pulsante menu.
- I marchi delle certificazioni restano a colori su touch: senza hover non potrebbero mai colorarsi.
- `viewport-fit=cover` con margini di sicurezza per notch e barra inferiore; `theme-color` verde.

### Immagini responsive

Le foto sono servite con `srcset` e `sizes` in tre larghezze: **640, 1024 e originale**. Cartelle `foto/w640/` e `foto/w1024/`, stessi nomi file. Peso complessivo: originali circa 9,9 MB, versioni a 640px circa 2 MB, a 1024px circa 2,5 MB. Un telefono scarica di norma la versione da 640 o 1024.
Le dimensioni `width`/`height` dichiarate nell'HTML sono state riallineate ai file reali (prima erano spesso sbagliate, con rischio di salti di layout).

### Limite noto: foto della hero

`treeclimbingpinomare01` e' larga solo **1373px**: cosi' arriva dal sito attuale, non e' stata ridotta. A schermi da 1920px viene ingrandita. Serve l'originale dal cliente.

### Correzioni emerse dalla verifica

| Problema | Soluzione |
|---|---|
| Galleria di Tree climbing: cella vuota accanto alla quarta foto su telefono | galleria a colonne che conserva le proporzioni, nessun buco con qualsiasi numero di foto |
| Contatti su telefono: scheda mappa attaccata al form sotto | spazio fra le due colonne anche quando si impilano |
| Titolo delle card della home poco leggibile su zone chiare | sfumatura piu' decisa al centro della card |
| Menu mobile ancorato alla riga invece che allo schermo | pannello ancorato all'header, a tutta larghezza e scorrevole |

## 13. Mappa

La mappa di Contatti e' un'**anteprima con caricamento a richiesta**: finche' non si preme "Mostra la mappa" non viene contattato nessun servizio esterno, quindi non serve un banner cookie solo per lei. Al click si carica l'incorporamento di OpenStreetMap sul punto della sede (45.63385, 8.78600). Resta visibile il link "Indicazioni stradali" verso Google Maps, che apre l'app di navigazione e non carica nulla nella pagina.

In sviluppo: se si preferisce una mappa sempre visibile va deciso insieme al consenso cookie; la richiesta di OpenStreetMap espone l'indirizzo IP del visitatore a un terzo.

## 14. Favicon

La "f" del marchio (ritagliata dal logo bianco, con la "i" adiacente rimossa) su quadrato verde `#0B3F35` con angoli arrotondati. File in `assets/favicon/`: `favicon.ico` (48px), `favicon16.png`, `favicon32.png`, `favicon192.png`, `favicon512.png` e `appletouchicon.png` (180px, a quadrato pieno perche' iOS arrotonda da solo). Derivato dal logo in WebP del cliente: se arriva il logo vettoriale, il favicon va rigenerato da quello.

---

## 15. Pagine dei servizi (2026-10-09)

**Fonte:** i testi e le immagini degli otto servizi sono quelli del sito attuale (MATERIALE), estratti dal sorgente della pagina Servizi. Testi riportati **parola per parola**, con due soli interventi: "obbiettivo" corretto in "obiettivo" e "La Filoverde" in "la Filoverde" a meta' frase.

| # | Servizio | Pagina | Immagine (dal sito attuale) |
|---|---|---|---|
| 1 | Abbattimento e potatura alberi con tecnica Tree Climbing | `tree-climbing.html` (gia' esistente) | `treeclimbingabbattimento01` |
| 2 | Abbattimento controllato | `abbattimento-controllato.html` | `abbattimentocontrollato01` |
| 3 | Fresatura ceppaie | `fresatura-ceppaie.html` | `fresaturaceppaia01` |
| 4 | Potatura e consolidamento alberature ad alto fusto | `potatura-consolidamento.html` | `treeclimbingchiomaalta01` |
| 5 | Progettazione e realizzazione giardini | `progettazione-giardini.html` | `progettazioneverdeaiuola01` |
| 6 | Manutenzione ordinaria e straordinaria di aree verdi | `manutenzione-aree-verdi.html` | `giardinopratomanutenzione01` |
| 7 | Installazione e manutenzione impianti di irrigazione | `impianti-irrigazione.html` | `messaadimoraimpianto01` |
| 8 | Trattamenti fitosanitari e cura delle piante | `trattamenti-fitosanitari.html` | `giardinoolivoaiuola01` |

**Struttura di ogni pagina:** breadcrumb Home / Servizi / nome, titolo, etichetta di categoria, testo originale con foto accanto, pulsanti "Richiedi un preventivo" e "Tutti i servizi", blocco "Altri servizi" con tre card collegate, fascia di contatto.

**Raggruppamento** (mio, per leggibilita'): *Alberi ad alto fusto* (servizi 1-4) e *Giardini e piante* (5-8). Il sito attuale li presenta in un'unica lista.

### Collegamenti
- **Home**: l'indice numerato passa da 6 voci inventate a 8 voci reali, ognuna porta alla propria pagina.
- **Servizi**: due gruppi da quattro card, interamente cliccabili. Sostituiscono le sei card precedenti, i cui titoli non coincidevano con quelli del cliente (risolve la sezione 10).
- **Tree climbing**: le tre card (Potatura, Abbattimento controllato, Fresatura) portano alle pagine dedicate. Il testo introduttivo e' ora quello originale del servizio.
- **Footer** di tutte le pagine: nuova colonna "Servizi" con gli otto link.
- **Menu**: la voce "Servizi" resta evidenziata nelle pagine di servizio.

### Da decidere
- **Menu a tendina.** Con otto servizi un sottomenu "Servizi" nella barra sarebbe l'accesso piu' diretto. Non l'ho fatto: richiede un pattern accessibile da disegnare (e una versione a fisarmonica su telefono).
- **Pagine corte.** Fresatura ceppaie ha solo due paragrafi originali e Impianti di irrigazione tre: le pagine sono essenziali per non inventare contenuti. Servono dal cliente descrizioni piu' ricche, esempi di lavori, foto specifiche.
- **Foto.** Ogni pagina usa la foto che il sito attuale associa al servizio; alcune non mostrano il servizio in modo evidente (per l'irrigazione c'e' un impianto di piante, non un impianto d'acqua).

**Larghezza delle card nella pagina Servizi.** Le quattro card di ogni gruppo stavano su quattro colonne e a 1440px erano larghe 274px, con titoli su tre o quattro righe. Ora: colonna singola sotto 896px (card larghe fino a 816px, foto 16:9), due colonne da 896px in su (da 395px a 1024px fino a 579px a 1440px, foto 16:10). I titoli arrivano al massimo a due righe. Una variante orizzontale (foto a sinistra) e stata provata e scartata: lasciava al testo solo 303px a 1152px.

**Aggiornamento 2026-10-09:** la sezione "Il nostro approccio" di Chi siamo non usa piu' la riga di foto giustificata (sezione 12) ma una forma a C; vedi `VISUAL-DIRECTION.md`. L'icona del menu su telefono e' ora una "F".

**Aggiornamento 2026-10-09 (sera):** la forma a C di Chi siamo e' stata sostituita da un albero, poi da un germoglio e infine da un quadrifoglio di quattro foto uguali; la F di Tree climbing su telefono ha l'asta piu' corta. Dettagli in `VISUAL-DIRECTION.md`. L'indirizzo del footer e' un link a Google Maps.
