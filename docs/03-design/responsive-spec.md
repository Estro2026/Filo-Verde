# Responsive & Device Specification

## 1. Obiettivo

Definire il comportamento del progetto su:

- desktop;
- laptop;
- schermi zoomati;
- tablet;
- mobile;
- dispositivi touch;
- browser principali;
- orientamenti differenti;
- condizioni di riduzione movimento.

Questo documento deve essere usato sia in fase di progettazione sia in fase di QA.

## 2. Breakpoint

### Desktop large
-

### Desktop standard
-

### Laptop
-

### Tablet landscape
-

### Tablet portrait
-

### Mobile large
-

### Mobile small
-

Non usare breakpoint solo per abitudine: definirli in base al comportamento reale del layout.

## 3. Schermi zoomati

Controllare esplicitamente:

- zoom browser;
- viewport ridotta su desktop;
- laptop con scaling elevato;
- titoli;
- form;
- card;
- colonne;
- menu;
- CTA;
- immagini;
- sezioni full viewport;
- elementi sticky;
- overflow;
- elementi sovrapposti.

### Regole

- Il titolo hero deve restare gerarchicamente più grande degli altri titoli.
- I titoli delle sezioni devono mantenere una gerarchia coerente.
- Non trasformare automaticamente layout orizzontali in stack verticali se c'è ancora spazio sufficiente.
- Non sovrapporre testo e immagini.
- Non invertire colonne senza una motivazione UX.
- Mantenere la struttura originale dei componenti quando possibile.
- Evitare form troppo stretti.
- Evitare elementi tagliati o fuori viewport.

## 4. Desktop

### Layout
-

### Grid
-

### Max width
-

### Spaziature
-

### Tipografia
-

### Navigazione
-

### Interazioni
-

## 5. Tablet

### Layout
-

### Colonne
-

### Navigazione
-

### Form
-

### Card
-

### Immagini
-

### Motion
-

### Touch
-

## 6. Mobile

### Ordine dei contenuti
-

### Hero
-

### Navigazione
-

### CTA
-

### Form
-

### Card
-

### Immagini
-

### Tabelle
-

### FAQ
-

### Footer
-

### Elementi sticky
-

## 7. Touch

Verificare:

- target cliccabili sufficientemente grandi;
- distanza tra touch target;
- assenza di interazioni dipendenti solo da hover;
- swipe;
- scroll;
- drag;
- carousel;
- menu;
- accordion;
- modal;
- form;
- tastiera virtuale;
- select;
- date picker.

### Touch target critici
-

## 8. Hover fallback

Per ogni interazione hover definire:

- comportamento desktop;
- alternativa touch;
- comportamento focus;
- comportamento click/tap;
- stato persistente se necessario.

## 9. Orientamento

### Portrait
-

### Landscape
-

### Cambio orientamento
-

Verificare che il cambio orientamento non rompa:

- modali;
- form;
- carousel;
- menu;
- sticky;
- video;
- elementi full-screen.

## 10. Browser

### Chrome
-

### Safari
-

### Firefox
-

### Edge
-

### iOS Safari
-

### Android Chrome
-

### Problemi specifici
-

## 11. Viewport

Verificare:

- `100vh`;
- dynamic viewport;
- browser chrome mobile;
- notch;
- safe area;
- elementi fixed;
- sticky;
- modali full-screen.

## 12. Tipografia responsive

Per ogni livello indicare:

- Desktop:
- Laptop / zoom:
- Tablet:
- Mobile:
- Min:
- Max:
- Line-height:
- Clamp:

### Gerarchia obbligatoria

1. Hero title
2. Section title
3. Subheading
4. Card title
5. Body
6. Label / meta

## 13. Immagini responsive

Definire:

- aspect ratio;
- crop;
- focal point;
- object-fit;
- object-position;
- mobile crop;
- responsive source;
- lazy loading;
- dimensioni;
- densità pixel;
- fallback.

## 14. Video responsive

- aspect ratio;
- autoplay;
- poster;
- mobile fallback;
- object-fit;
- controls;
- mute;
- loop;
- lazy loading;
- performance;
- background video;
- reduced motion.

## 15. Form responsive

Controllare:

- larghezza;
- numero colonne;
- label;
- placeholder;
- textarea;
- select;
- checkbox;
- radio;
- errori;
- success state;
- tastiera mobile;
- autofill;
- focus;
- scroll automatico.

## 16. Componenti responsive

Per ogni componente indicare:

- Desktop:
- Laptop / zoom:
- Tablet:
- Mobile:
- Touch:
- Eccezioni:

### Header
-

### Hero
-

### Card
-

### Carousel
-

### Form
-

### FAQ
-

### Modal
-

### Footer
-

## 17. Motion responsive

Per ogni animazione verificare:

- desktop;
- touch;
- mobile;
- performance;
- durata;
- intensità;
- scroll;
- `prefers-reduced-motion`;
- fallback.

## 18. Mobile Friendly

Verificare:

- leggibilità;
- touch target;
- zoom non necessario per leggere;
- assenza di horizontal scroll;
- form usabili;
- CTA raggiungibili;
- menu comprensibile;
- immagini correttamente adattate;
- contenuti prioritari visibili;
- performance accettabile;
- keyboard usability.

## 19. Accessibilità responsive

- focus visibile;
- ordine DOM coerente;
- ordine visuale coerente;
- keyboard;
- screen reader;
- touch;
- zoom;
- reflow;
- contrasto;
- orientation;
- reduced motion.

## 20. Reflow

Verificare il comportamento con:

- zoom 200%;
- zoom 300%;
- zoom 400%;
- larghezze ridotte;
- testi lunghi;
- traduzioni più lunghe.

Nessun contenuto essenziale deve diventare inutilizzabile o irraggiungibile.

## 21. Testi lunghi

Testare:

- titoli lunghi;
- CTA lunghe;
- nomi prodotto;
- breadcrumb;
- menu;
- card;
- form;
- errori;
- traduzioni.

## 22. Edge case

- viewport molto bassa;
- viewport molto stretta;
- testo ingrandito;
- immagini mancanti;
- JavaScript disabilitato;
- connessione lenta;
- tastiera aperta;
- landscape mobile;
- contenuti CMS più lunghi del previsto.

## 23. Matrice di test

| Area | Desktop | Zoom | Tablet | Mobile | Touch | Safari | Chrome | Firefox | Edge |
|---|---|---|---|---|---|---|---|---|---|
| Header | | | | | | | | | |
| Hero | | | | | | | | | |
| Form | | | | | | | | | |
| Card | | | | | | | | | |
| Navigation | | | | | | | | | |
| Motion | | | | | | | | | |
| Footer | | | | | | | | | |

## 24. Problemi rilevati

### Critici
-

### Medi
-

### Minori
-

## 25. Decisioni da approvare

-

## 26. Regola finale

Un componente non è considerato completato finché non è stato verificato almeno su:

- desktop;
- schermo zoomato;
- tablet;
- mobile;
- touch;
- browser principali.

Le variazioni responsive devono preservare gerarchia, comprensione e funzione del componente, non solo farlo "entrare nello schermo".
