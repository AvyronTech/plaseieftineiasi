## Cauza problemei

Eroarea apare pentru că deploy-ul rulează `wrangler deploy` direct pe `src/server.ts`. Asta ocolește build-ul Vite/TanStack Start, iar importurile virtuale generate de TanStack (`#tanstack-router-entry`, `tanstack-start-manifest:v`, etc.) nu există încă pentru Wrangler.

Avertismentul cu `error-capture.ts` e separat: `sideEffects: false` face ca importul bare să fie ignorat de bundler.

## Plan de rezolvare

1. Ajustez configurația Wrangler ca să folosească flow-ul corect de build/deploy pentru proiectul TanStack Start, nu compilarea directă a sursei.
2. Adaug scripturi clare în `package.json` pentru Cloudflare:
   - build prin Vite/TanStack
   - deploy prin Wrangler pe output-ul generat
3. Corectez avertismentul `sideEffects` astfel încât `src/lib/error-capture.ts` să nu mai fie ignorat.
4. Verific local configurația relevantă fără să modific partea vizuală a site-ului.

## Fișiere vizate

- `package.json`
- `wrangler.jsonc`
- posibil `src/server.ts`, doar dacă e necesar pentru importul `error-capture`

## Rezultat așteptat

Deploy-ul nu va mai încerca să rezolve manual importurile virtuale TanStack, iar eroarea cu cele 5 importuri nerezolvate va dispărea.