# Visual Direction

> Aggiornato 2026-10-09. Dettaglio e motivazioni: [MOCKUP.md](MOCKUP.md).
> Implementazione: `mockup/assets/css/style.css`, blocco `:root`.

## Brand Tone
- Competenza tecnica e rispetto per gli alberi.
- Registro da operatore certificato, non da giardinaggio generalista.

## Palette

### Verde — MATERIALE (dal CSS di filoverde.org)
| Token | Hex |
|-------|-----|
| `--verde-800` (primario) | `#0B3F35` |
| `--verde-700` | `#125C4D` |
| `--verde-500` | `#1B947B` |

Derivati e neutri (INFERENZA): `#041A15`, `#07261F`, `#7FBCAC`, `#BFD9D1`, `#EDF3F0`, `#F7F4ED`, `#6B5A48`.

Il verde profondo è superficie dominante, non accento su bianco.

### Ottone — accento, APPROVATO 2026-10-09
| Token | Hex | Uso | Contrasto |
|-------|-----|-----|-----------|
| `--ottone-400` | `#D9B84A` | testo e segni su fondo scuro | 6,14:1 su `#0B3F35` |
| `--ottone-500` | `#C9A227` | riempimenti, corde, nodi, CTA | 4,89:1 su `#0B3F35`; 7,46:1 col testo `#041A15` |
| `--ottone-600` | `#8A6B12` | testo accento su fondo chiaro | 5,01:1 su bianco |
| `--ottone-700` | `#6B5210` | trama scura della corda | decorativo |
| `--ottone-100` | `#F3EAD0` | anelli di accrescimento, aloni | decorativo |

Ocra dorata: abbinamento classico col verde foresta, minerale e caldo senza la saturazione della terracotta. Richiama legno stagionato, ottone, targhe di certificazione.

**Il gradino cambia col fondo**: 400 sullo scuro, 600 sul chiaro. Serve a restare sopra AA in entrambi i casi.

Sostituisce l'ambra `#E07A3F` della versione precedente, che sul verde scuro stava a **3,95:1**, sotto la soglia AA di 4,5 per il testo piccolo (gli occhielli). Scelta fatta dopo verifica dei contrasti su dieci candidati.

Alternative valutate e scartate: **lichene** `#B9C86B` (il più aderente al mestiere, ma analogo al verde: stacca poco e appiattisce le CTA) e **crema** `#EFE7D4` (elegante ma toglie energia alla pagina).

## Tipografia — due famiglie, tre ruoli

| Ruolo | Famiglia | Dove |
|-------|----------|------|
| Display | **Petrona** 500 | solo `h1`, `h2` e citazione |
| Interfaccia | **Archivo** 500/600 | `h3`, `h4`, occhielli, bottoni, menu, cifre |
| Testo | **Archivo** 400 | testo corrente |

Petrona è un serif umanista caldo, di radice calligrafica ma non decorativo: organico ed elegante senza scivolare nel fantasy, e pienamente leggibile anche ai corpi grandi. Sta in contrasto col grotesque geometrico di Archivo.

Sostituisce Caveat Brush, che era troppo manoscritto per un sito rivolto ad aziende ed enti pubblici.


### Scala tipografica
Passo 1.25 verso l'alto, 1.14 verso il basso. Ogni gradino ha un ruolo dichiarato.

| Token | Ruolo |
|-------|-------|
| `--t-micro` .75rem | tag, didascalia hero, legale |
| `--t-xs` .8125rem | note |
| `--t-sm` .9375rem | interfaccia, didascalie |
| `--t-etichetta` 1rem (16px) | **tutte** le etichette: occhielli di sezione, anni della timeline, firma della citazione, titoletti di contatti e footer, breadcrumb |
| `--t-body` ~1.0625rem | testo corrente |
| `--t-lead` → 1.375rem | paragrafo d'apertura |
| `--t-h4` → 1.1875rem | titolo minore |
| `--t-h3` → 1.5rem | titolo di scheda |
| `--t-h2` → 3rem | titolo di sezione (display) |
| `--t-h1` → 4.5rem | titolo di pagina (display) |
| `--t-cifra` → 3.25rem | numeri in evidenza |

Tre sole interlinee: `1.08` display, `1.35` titoli e testi d'apertura, `1.68` testo corrente.

## Spazio

Scala a passo 4px, più quattro spazi semantici usati ovunque al posto di valori arbitrari:

| Token | Valore | Uso |
|-------|--------|-----|
| `--spazio-sezione` | 4.5 → 8.5rem | sopra e sotto **ogni** sezione: sezioni di contenuto, hero, fascia CTA, testata delle pagine interne, parte alta del footer |
| `--spazio-blocco` | 2.5 → 4rem | fra blocchi dentro una sezione |
| `--spazio-elemento` | 1.5rem | fra elementi contigui |
| `--gap-griglia` | 1.25 → 2rem | fra celle di griglia |
| `--padding-carta` | 1.5 → 2.25rem | dentro schede e recensioni |

Nessuno stile in linea nel markup: tutte le eccezioni di spaziatura della versione precedente sono diventate classi.

## Hero

A tutta immagine, alta quanto la viewport meno la barra (`100svh - --altezza-testata`), con doppio gradiente (verticale per la leggibilità del titolo, orizzontale per staccare la colonna di testo). Contenuto allineato in basso a sinistra. Foto: tree climbing su pino con la costa, l'immagine più riconoscibile del repertorio.

La didascalia sta in basso a destra, su **una sola riga** (`white-space: nowrap` con ellissi), al corpo più piccolo della scala. Su mobile passa a sinistra.

### Stacco fra hero e sezione successiva

Hero e card successive sono entrambe fotografiche e a tutta larghezza, quindi senza intervento si leggono come una sola striscia di foto. Lo stacco e' una **dissolvenza**: il fondo della hero sfuma fino al verde scuro opaco (`rgb(4,26,21)`) e le card partono dallo stesso verde in alto, che si apre sulla foto nel primo 30% dell'altezza. I due bordi coincidono, quindi la giunzione non si vede. Nessun angolo arrotondato, nessun titolo, card a tutta larghezza come nella prima versione.\n\nLa soluzione con angolo a foglia, sezione sabbia e card sfalsate e' stata provata e scartata dal cliente.

## Linguaggio grafico

Deliberatamente ridotto rispetto alla versione precedente, che ne aveva troppo. Restano tre motivi, ciascuno in un solo punto.

| Elemento | Dove | Come |
|----------|------|------|
| **Foglia** | solo come *forma* di schede, immagini, bottoni e CTA del menu | due angoli opposti arrotondati e due vivi (`--foglia`). Al passaggio gli angoli si **scambiano**, non si solleva nulla |
| **Corda** | solo l'elenco verticale "come lavoriamo", una volta per pagina | due capi sottili (3px) in sfumatura ottone-verde con torsione diagonale chiara. Si tende dall'alto allo scroll. I nodi sono anelli vuoti centrati sulla corda |
| **Anello di accrescimento** | solo la numerazione dei servizi | due cerchi concentrici dietro la cifra, si dilatano al passaggio |

La **foglia stilizzata** torna sopra la citazione, unico uso figurativo rimasto.

**Rimossi**: foglioline accanto alle voci di menu, negli occhielli e dentro le recensioni; corda sui bordi dati, sulle voci d'indice, sulle schede e nei blocchi contatti; sottolineatura a mano nell'H1.

**Freccia**: chevron (angolo aperto) da 1,6px, disegnato in un viewBox 8×14 con il tracciato esattamente al centro, quindi centrato per costruzione in qualsiasi contenitore. Nell'indice servizi, dove sta dentro un disco, resta ferma al passaggio (il disco si riempie): spostarla la farebbe uscire dal centro. Altrove avanza di 3px. Nell'indice servizi non sta più sotto il titolo ma in una colonna propria a destra, dentro un disco che si riempie d'ottone al passaggio.

**Superfici**: tag e mappa sono passati da `--verde-050` (verde pallido, leggibile come azzurrino) a `--sabbia`; l'hover delle voci d'indice fa lo stesso.

## Motion
- Ingresso allo scroll: 18px di traslazione e dissolvenza, scaglionati di 100ms nelle griglie.
- La corda verticale si tende dall'alto quando la sezione entra in campo (1,2s).
- Al passaggio: angoli a foglia che si scambiano, anelli che si dilatano, freccia che avanza di 4px, saturazione delle foto da 0.94 a 1.06.
- **Niente** sollevamenti, ombre al passaggio, zoom sulle immagini, sottolineature che scorrono.
- Tutto neutralizzato sotto `prefers-reduced-motion: reduce`; la pagina resta leggibile senza JavaScript.

## Logo
Presenza misurata: header `clamp(34px, 3.6vw, 46px)` con barra alta `clamp(62px, 6.2vw, 80px)`, footer `clamp(52px, 6vw, 76px)`.

Asset in uso: `logo/logofiloverdebianco.webp`, 604×330, alfa ricostruita dal JPEG fornito dal cliente (vedi [asset-inventory.md](asset-inventory.md)).

## Elementi mancanti
- Logo vettoriale in alta qualità (bloccante per la produzione).
- Brand guidelines formali del cliente.
- Recensioni reali: la sezione in home è impaginata ma con testi segnaposto.
- Materiale fotografico per il target aziende / enti pubblici.

**Nota di implementazione.** Le etichette sono `<p class="etichetta">`: le regole dei paragrafi (`.intro p`, `.filo__testo p`) le escludono con `:not(.etichetta)`, altrimenti ne sovrascrivono corpo, interlinea e colore per specificita. I `<figure>` (recensioni, citazione) vanno sempre azzerati con `margin:0`: i browser danno loro 40px laterali e 1em verticale.

## Riga di foto giustificata

Usata in Chi siamo (sezione "Uno sguardo attento alla natura"). Componente `.riga-foto`: ogni foto prende una larghezza proporzionale al proprio rapporto d aspetto (`--ar`, larghezza su altezza), quindi a parita di proporzione tutte hanno la stessa altezza, nessuna viene ritagliata e non restano celle vuote. Sostituisce la griglia a 3 colonne con la prima foto su 2 colonne, che lasciava la terza sola in una seconda riga con due celle vuote (sezione alta 1455px, ora 983px).

Da 768px in su la riga e unica. Sotto, la prima foto occupa tutta la larghezza e le altre due stanno affiancate alla stessa altezza. Rapporti attuali: paesaggio 1.3333, ritratto .75, alta .5801; cambiando foto va aggiornata la classe del figure. La galleria a griglia (`.galleria`) resta in uso in Tree climbing.

---

## Aggiornamenti 2026-10-09 (seconda parte)

**Menu su telefono: icona al posto della scritta.** Una "F" disegnata con tre tratti (asta, braccio alto, braccio medio), la lettera iniziale del marchio come il favicon. Da aperto asta e braccio alto ruotano di 45 gradi in versi opposti e formano una X, il braccio medio si ritira. Pulsante da 48px con forma a foglia, che gli angoli scambiano all'apertura. Etichetta accessibile "Apri il menu" / "Chiudi il menu" aggiornata dallo script. Sostituisce la versione con tre rami e una foglia, dove la foglia e' stata tolta su richiesta.

**Favicon.** La "f" iniziale del marchio, bianca e piena, su quadrato verde con angoli arrotondati. La lettera e' ricavata dal logo: maschera ingrandita, ispessita e levigata per restare leggibile a 16px. Versione Apple a quadrato pieno.

**Marchi su telefono e tablet piccolo (sotto 768px).** Tessere 2x2 bianche con bordo e angoli a foglia, logo centrato fino a 92px di altezza, al posto di una fila di loghi piccoli con molto vuoto intorno. Vale per Home e Chi siamo. Su touch i marchi restano a colori.

**Galleria di Tree climbing su telefono: disposizione a "F".** Le sette foto compongono la lettera: braccio alto con due foto, asta a sinistra con quattro, braccio medio con una. Griglia a sei colonne con altezze proporzionali alla larghezza dello schermo, quindi la forma regge su tutti i telefoni. Da 640px in su torna la disposizione a colonne. La scelta delle foto segue la forma: le verticali nell'asta, la panoramica nel braccio alto, quella piu' luminosa nel braccio medio.

**Card di servizio.** Interamente cliccabili tramite il link del titolo; la freccia avanza al passaggio del mouse; anello di focus attorno a tutta la card da tastiera.

---

## Galleria "Le nostre realizzazioni" a F (tutte le larghezze)

Le foto della pagina Tree climbing compongono una lettera F, non solo su telefono.

| Larghezza | Griglia | Foto | Forma |
|---|---|---|---|
| da 640px | 12 colonne | 8 | braccio alto a tutta larghezza con due panoramiche; asta larga meta (foto verticale a doppia altezza + due foto impilate); braccio medio lungo 3/4 del braccio alto; piede dell asta con due foto |
| sotto 640px | 6 colonne | 7 (l ottava e nascosta) | braccio alto con due foto, asta a sinistra con quattro, braccio medio con una |

Le altezze sono frazioni della larghezza del contenitore (unita `cqw`, `container-type:inline-size`), quindi la lettera mantiene le proporzioni a ogni schermo; sul telefono hanno un tetto in rem. La foto verticale occupa due righe e resta quasi senza ritaglio (proporzione 0,47 contro 0,45 originale).

**Ottava foto.** Per una F di buone proporzioni su desktop servono otto foto: ho aggiunto `treeclimbingabbattimento01`, gia presente nella libreria e nel sito attuale. Su telefono resta nascosta per non allungare la lettera.

**Misure verificate:** a 1440px la F e alta 1333px con la foto piu stretta di 286px; a 640px e alta 684px con la foto piu stretta di 135px; nessuna foto sovrapposta o fuori schermo a 320, 375, 430, 600, 640, 768, 1024, 1440, 1920.

**Spazi vuoti.** Le zone libere a destra dell asta (fra i bracci e sotto il braccio medio) fanno parte della forma della lettera. Si potrebbe usarle per il titolo della sezione o per una didascalia: non l ho fatto per non spostare il testo dall intestazione.

---

## Forme nelle composizioni di foto (stessa logica a ogni larghezza)

Le due composizioni di foto del sito formano una figura che ha senso per Filoverde, e la forma resta riconoscibile da 320px a 1920px.

| Pagina | Sezione | Forma | Foto | Perche' |
|---|---|---|---|---|
| Tree climbing | Le nostre realizzazioni | **F** | 8 (5 su telefono) | iniziale del marchio, come favicon e icona del menu |
| Chi siamo | Il nostro approccio | **Quadrifoglio** | 4 | foglie della stessa dimensione, tutte ben visibili; compatto |

**Cronologia delle scelte per Chi siamo.** Una "C" (da "Chi siamo") e' stata scartata: non ha legame con il marchio. Un abete di quattro foto e' stato scartato come troppo ingombrante su desktop (576x778px, sezione di circa 1050px). Un germoglio (due foglie e uno stelo) e' stato scartato perche' lo stelo risultava troppo piccolo (73x167px su desktop, 47x109px su telefono). Il quadrifoglio ha quattro foto uguali, tutte di almeno 134px per lato.

### Forma a quadrifoglio (Chi siamo)

Quattro foto uguali in una griglia 2x2 con rapporto 1:1. Ogni foto ha la forma a foglia del marchio con due angoli opposti arrotondati all'80% e due vivi che fanno da punte: in alto a sinistra e in basso a destra la punta e' sulla diagonale discendente, nelle altre due sulla diagonale ascendente. Le basi convergono al centro e le punte guardano all'esterno, come in un quadrifoglio. Larghezza massima 32rem. Il raggio all'80% (invece del 100%) lascia visibile circa il 72% di ogni foto contro il 57% di una lente piena.

| Posizione | Foto |
|---|---|
| In alto a sinistra | `alberoaltofustoparco01` (un albero isolato in un parco) |
| In alto a destra | `progettazioneverdeaiuola01` (aiuola con graminacee e acero) |
| In basso a sinistra | `messaadimoraimpianto01` (vialetto con nuovi impianti) |
| In basso a destra | `troncochiomadalbasso01` (un fusto visto dal basso) |

| Larghezza | Lato di ogni foto | Insieme | Sezione |
|---|---|---|---|
| 320px | 134px | 280x280 | 684px |
| 375px | 162px | 335x335 | 715px |
| 768px | 250px | 512x512 | 904px |
| 1024px | 209px | 429x429 | 650px |
| 1440px | 250px | 512x512, a destra del testo | 784px |

**Limite:** gli angoli esterni delle foto restano tagliati dalla forma. Le immagini sono scelte con il soggetto al centro.

### F di Tree climbing su telefono

L'asta era formata da quattro foto in colonna e risultava troppo lunga (877px a 375px). Ora ha cinque foto in quattro righe: braccio alto con due foto, asta con una foto verticale a doppia altezza piu' il piede, braccio medio con una foto. Altezza 533px a 375px. Le foto escluse su telefono (tre, compresa l'ottava) restano visibili da 640px in su, dove la F ha otto foto.

## Indirizzo del footer

L'indirizzo "Via Achille Grandi, 12, 21017 Samarate (VA)" e' ora un link a Google Maps (scheda del luogo) in tutte le 12 pagine, in nuova scheda. L'anteprima della mappa in Contatti e il suo link "Indicazioni stradali" restano come prima.
