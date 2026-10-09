# Asset Inventory — Immagini

**Fonte:** https://www.filoverde.org/ (sito attuale, Wix) — MATERIALE
**Data estrazione:** 2026-10-08
**Formato di consegna:** WebP

---

## Nomenclatura

Convenzione decisa dal cliente il 2026-10-09: **CLIENTE**.

```
assets/images/<categoria>/<soggettoqualificatorenn>.webp
```

Regole sui caratteri — **vincolanti**:

- solo `a-z` e `0-9`;
- **nessun separatore di alcun tipo**: niente trattino, niente underscore, niente punto se non quello dell'estensione;
- **nessuno spazio**;
- **nessun carattere speciale**: niente accenti (`à è é ì ò ù`), niente `- _ ( ) [ ] & + , ; # @ ' " ~`;
- tutto minuscolo;
- estensione sempre `.webp` minuscola.

Espressione di controllo: `^[a-z0-9]+\.webp$`

Regole sulla struttura:

- `<categoria>`: `foto` | `logo` — nessun file sciolto nella radice di `assets/images/`;
- il nome descrive il contenuto, non l'uso in pagina (una foto può cambiare sezione, non nome);
- `nn` progressivo a due cifre in coda, solo per varianti dello stesso soggetto;
- i marchi di terzi conservano il nome del marchio: `logo<marchio>.webp`;
- i nomi hash originali del CDN non vanno mai conservati.

### Verifica

```bash
find assets/images -type f | while read -r f; do basename "$f" | grep -qE '^[a-z0-9]+\.webp$' || echo "NON CONFORME: $f"; done
```

Stato al 2026-10-09: **23 file, tutti conformi.**

> **Nota tecnica (INFERENZA).** Senza separatore i motori di ricerca non riescono a distinguere le parole nel nome file, che quindi non contribuisce alla SEO immagini — Google raccomanda il trattino proprio per questo. L'impatto è contenuto perché il peso SEO principale resta su `alt`, didascalie e testo circostante, tutti già presenti nel mockup. Scelta del cliente, applicata.

---

## Parametri di conversione

| Tipo | Lato lungo max | Qualità | Note |
|------|----------------|---------|------|
| Foto | 1800–2000 px | 74–82 | nessun upscale: `scale=min(N,iw)` |
| Ritratto | 1600 px | 82 | |
| Logo / marchi | 600–900 px | 90–95 | alfa preservato (`yuva420p`) |

Totale cartella: ~10 MB. **Da ottimizzare in sviluppo** con `srcset` + varianti responsive (i file attuali sono master, non i file serviti).

---

## Inventario

### `assets/images/foto/`

| File | Soggetto | Uso nel mockup |
|------|----------|----------------|
| `treeclimbingabbattimento01.webp` | Operatore su fune sul fusto | Hero home, scheda servizi |
| `treeclimbingpinomare01.webp` | Climber su pino, vista costa (orizz.) | Entry point home, galleria |
| `treeclimbingpinomare02.webp` | Stesso soggetto, taglio verticale | Galleria |
| `treeclimbingchiomaalta01.webp` | Operatore in chioma alta | Galleria |
| `potaturaaltofusto01.webp` | Due operatori su grande quercia | Scheda potatura |
| `abbattimentocontrollato01.webp` | Fusto sezionato calato con funi | Scheda abbattimento |
| `fresaturaceppaia01.webp` | Fresa per ceppaie in azione | Scheda fresatura |
| `troncochiomadalbasso01.webp` | Fusto dal basso verso la chioma | Monitoraggio fitosanitario |
| `chiomacontrolucetramonto01.webp` | Rami di cedro in controluce | Galleria |
| `alberoaltofustoparco01.webp` | Grande albero isolato | Galleria |
| `parcoprivatomanutenzione01.webp` | Parco con cedro e vialetto | Entry point home |
| `giardinopratomanutenzione01.webp` | Prato curato con alberature | Manutenzione programmata |
| `messaadimoraimpianto01.webp` | Nuovo impianto lungo vialetto | Messa a dimora |
| `progettazioneverdeaiuola01.webp` | Aiuola contemporanea con acero | Progettazione |
| `giardinoolivoaiuola01.webp` | Olivo e aiuola mediterranea | Chi siamo |
| `giardinoterrazzalago01.webp` | Terrazza sul lago | Chi siamo |
| `teamarboricoltoreritratto01.webp` | Ritratto operatore in imbrago | Chi siamo |

> `giardinoterrazzalago01.webp` era `ba6e5ea8916b4c5d8e6a6e147ae3ff26.webp` (da `docs/00-input/.../MATERIALE/`), rinominato secondo la convenzione. La copia con nome hash nella radice di `assets/images/` è stata rimossa: era un duplicato byte-identico e il JPEG originale resta in `docs/00-input/sito-web/MATERIALE/`.

### `assets/images/logo/`

| File | Soggetto | Proprietà |
|------|----------|-----------|
| `logofiloverdebianco.webp` | Marchio Filoverde, versione bianca | Cliente |
<!-- nota sotto la tabella -->

> **`logofiloverdebianco.webp`** è stato rigenerato il 2026-10-09 dal file `logofiloverdebianco.jpg` fornito dal cliente. Quel JPEG conteneva il wordmark bianco appiattito su fondo bianco (luminanza del tracciato 222 su 255), quindi senza canale alfa sarebbe comparso come un rettangolo chiaro sull'header verde. L'alfa è stata ricostruita dalla differenza di luminanza e il colore forzato a bianco puro; WebP lossless, 604×330, 11,5 KB. Il JPEG di partenza è ancora in cartella perché bloccato da un altro processo al momento della pulizia: **va rimosso**, viola la convenzione solo-WebP.
| `logofiloverdeverde.webp` | Marchio Filoverde, versione verde | Cliente |
| `logoeuropeantreeworker.webp` | Certificazione EAC | Terzi |
| `logosiaarboricoltura.webp` | Società Italiana di Arboricoltura | Terzi |
| `logoassociazionearboricoltori.webp` | Associazione Arboricoltori | Terzi |
| `logoclimbcare.webp` | Rete di impresa Climbcare | Terzi |

---

## Criticità aperte

1. **Qualità del logo** — i marchi Filoverde sono ricavati da PNG Wix già ricompressi e croppati. Il brief segnala il logo in alta qualità tra i materiali mancanti: **serve il vettoriale (SVG/AI/EPS)** prima della produzione.
2. **Uso dei marchi di terzi** — EAC, SIA, Associazione Arboricoltori e Climbcare sono presenti sul sito attuale, ma l'autorizzazione all'uso va confermata per iscritto dal cliente.
3. **Copertura fotografica insufficiente** — mancano foto di: cantieri aziendali e per enti pubblici (il target primario del progetto), interventi in condominio, team al completo, mezzi e attrezzature. Le foto attuali raccontano soprattutto il privato e la costa.
4. **Nessuna foto specifica per il target aziende/PA**, che è l'obiettivo dichiarato del progetto.
5. **Peso dei file** — master non ottimizzati per la produzione: in sviluppo servono `srcset`/`sizes` e varianti a 480/960/1440 px.

---

## Varianti responsive e favicon (2026-10-09)

**Varianti delle foto.** Stessi nomi file, in sottocartelle per larghezza: `foto/w640/` (16 foto) e `foto/w1024/` (10 foto). Create solo dove l'originale e' abbastanza grande (640 se larga almeno 800px, 1024 se almeno 1250px). Qualita' WebP 76. La regola sui nomi resta `^[a-z0-9]+\.webp$`, ora applicata anche dentro le sottocartelle. Gli originali restano i master.

| Foto | Originale | w1024 | w640 |
|---|---|---|---|
| 10 foto fra 1250 e 2000px | si | si | si |
| 6 foto fra 800 e 1250px | si | no | si |
| `treeclimbingpinomare02` (720px) | si | no | no |

**Favicon.** Cartella `assets/favicon/` (non e' un'immagine di contenuto, quindi fuori da `assets/images/`). File `favicon.ico`, `favicon16.png`, `favicon32.png`, `favicon192.png`, `favicon512.png`, `appletouchicon.png`.

**Pulizia.** Rimosso il file `logofiloverdebianco.jpg` che era rimasto bloccato: la cartella `logo/` ora contiene solo WebP.

**Criticita' nuova.** La foto `treeclimbingpinomare01.webp`, usata come sfondo della hero, e' larga 1373px: sotto la risoluzione adatta a schermi molto larghi.
