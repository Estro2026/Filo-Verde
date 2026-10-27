# Controllo qualità mockup: Filo Verde

> Generato automaticamente il 2026-10-20 da `_SYSTEM/tools/mockup-qa`. Non modificare a mano: si rigenera a ogni esecuzione. Etichetta: RICERCA (misure su pagine reali); gli indici di genericità sono INFERENZA euristica.

**Esito: NON SUPERATO** · punteggio 93/100 · 12 pagine · BLOCKER 0 · HIGH 1 · MEDIUM 3 · LOW 1
Per superare il controllo: nessun BLOCKER, nessun HIGH e punteggio di almeno 85. (axe-core non installato: il controllo accessibilità è quello interno, più limitato)

| Area | Punteggio |
|---|---|
| Collegamenti | 100 |
| Coerenza stile | 100 |
| Accessibilità | 98 |
| Responsive | 100 |
| Originalità | 65 |

## Problemi, dal più grave

### 1. [HIGH] 3 formule di copy da cliché o testi segnaposto
Area: Originalità · Segnale euristico di aspetto generico: va valutato con l'art director, non è un errore tecnico.
Dove:
- chi-siamo.html: «partner di fiducia»
- index.html: «Nome Cognome»
- servizi.html: «elevati»
Correzione: Sostituire con scelte derivate da brand, contenuto e riferimenti del radar; documentare il perché.

### 2. [MEDIUM] 2 testi sotto il contrasto minimo in 1 pagine (1 coppie di colori)
Area: Accessibilità · Contrasto calcolato su colore del testo e sfondo effettivo (immagini e gradienti esclusi).
Dove:
- index.html: span.collegamento «Tree climbing» 4.09:1 (serve 4.5:1)
Correzione: Scurire il testo o schiarire lo sfondo fino a 4,5:1 (3:1 per testi grandi).

### 3. [MEDIUM] Effetto vetro (backdrop-filter) su 12 elementi
Area: Originalità · Segnale euristico di aspetto generico: va valutato con l'art director, non è un errore tecnico.
Correzione: Sostituire con scelte derivate da brand, contenuto e riferimenti del radar; documentare il perché.

### 4. [MEDIUM] Trio di card con icona + titolo + testo in 8 pagine (schema molto abusato)
Area: Originalità · Segnale euristico di aspetto generico: va valutato con l'art director, non è un errore tecnico.
Dove:
- abbattimento-controllato.html: div.griglia.scaglionato
- fresatura-ceppaie.html: div.griglia.scaglionato
- impianti-irrigazione.html: div.griglia.scaglionato
- manutenzione-aree-verdi.html: div.griglia.scaglionato
Correzione: Sostituire con scelte derivate da brand, contenuto e riferimenti del radar; documentare il perché.

### 5. [LOW] 1 pagine con livelli di titolo saltati
Area: Accessibilità · Es. da h2 a h4.
Dove:
- contatti.html
Correzione: Rispettare la gerarchia h1 → h2 → h3.

## Pagine controllate

- abbattimento-controllato.html
- chi-siamo.html
- contatti.html
- fresatura-ceppaie.html
- impianti-irrigazione.html
- index.html
- manutenzione-aree-verdi.html
- potatura-consolidamento.html
- progettazione-giardini.html
- servizi.html
- trattamenti-fitosanitari.html
- tree-climbing.html
