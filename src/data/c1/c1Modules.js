// Реєстр модулів telc Deutsch C1 Beruf. Щоб додати новий Übungstest,
// достатньо дописати ще один об'єкт у масив variants потрібного Teil.
import { lesen1, lesen2, lesen3, sprachbausteine } from './uebungstest1Lesen';
import { horen1, horen2, horen3 } from './uebungstest1Horen';
import { lesenTeil1, lesenTeil2, lesenTeil3, lesenTeil4, lesenSchreiben } from './dtbLesen';
import { horenTeil1, horenTeil2, horenTeil3, horenTeil4 } from './dtbHoren';

// type: 'gaps' — пропуски зі спільним списком варіантів (a–h)
//       'gapsOwn' — у кожного пропуску власні 4 варіанти (Sprachbausteine)
//       'match' — зіставити питання з буквою (тексти/твердження)
//       'abc' — вибір a/b/c
//       'notes' — вільні нотатки до «слайдів» + самооцінка 0/1/2
const c1Modules = [
  {
    id: 'lesen',
    icon: '📖',
    title: 'Leseverstehen',
    meta: '90 Min. zusammen mit Sprachbausteine · 48 Punkte',
    parts: [
      { id: 'teil1', title: 'Teil 1 — Textrekonstruktion', type: 'gaps', points: 2, time: '~15 Min.', variants: [lesen1] },
      { id: 'teil2', title: 'Teil 2 — Selektives Lesen', type: 'match', points: 2, time: '~15 Min.', variants: [lesen2] },
      { id: 'teil3', title: 'Teil 3 — Detailverstehen', type: 'abc', points: 2, time: '~30 Min.', variants: [lesen3] },
    ],
  },
  {
    id: 'sprachbausteine',
    icon: '✏️',
    title: 'Sprachbausteine',
    meta: 'ca. 25 Min. · 22 Punkte',
    parts: [
      { id: 'teil1', title: 'Sprachbausteine — 22 Lücken', type: 'gapsOwn', points: 1, time: '~25 Min.', variants: [sprachbausteine] },
    ],
  },
  {
    id: 'horen',
    icon: '🎧',
    title: 'Hörverstehen',
    meta: 'ca. 40 Min. · 48 Punkte · Jeder Text wird einmal abgespielt',
    parts: [
      { id: 'teil1', title: 'Teil 1 — Globalverstehen', type: 'match', points: 1, time: '~8 Min.', variants: [horen1] },
      { id: 'teil2', title: 'Teil 2 — Detailverstehen', type: 'abc', points: 2, time: '~9 Min.', variants: [horen2] },
      { id: 'teil3', title: 'Teil 3 — Informationstransfer', type: 'notes', points: 2, time: '~20 Min.', variants: [horen3] },
    ],
  },
  // ===== DTB C1 (Deutsch-Test für den Beruf) — матеріали з групи =====
  {
    id: 'dtb-lesen',
    icon: '📖',
    title: 'DTB C1 — Lesen',
    meta: 'Lesen 45 Min. + Lesen und Schreiben 20 Min. · 3 Punkte pro Aufgabe · Varianten aus der Lerngruppe',
    parts: [
      { id: 'teil1', title: 'Teil 1 — Informationen zum Arbeitsmarkt (1–5)', type: 'match', points: 3, time: '~10 Min.', variants: lesenTeil1 },
      { id: 'teil2', title: 'Teil 2 — Willkommensmappe (6–9)', type: 'abc', points: 3, time: '~10 Min.', variants: lesenTeil2 },
      { id: 'teil3', title: 'Teil 3 — Forum (10–13)', type: 'match', points: 3, time: '~10 Min.', variants: lesenTeil3 },
      { id: 'teil4', title: 'Teil 4 — Protokoll (14–18)', type: 'abc', points: 3, time: '~15 Min.', variants: lesenTeil4 },
      { id: 'teil5', title: 'Lesen und Schreiben — Beschwerde (19–20)', type: 'abc', points: 3, time: '~5 Min. + Brief', variants: lesenSchreiben },
    ],
  },
  {
    id: 'dtb-horen',
    icon: '🎧',
    title: 'DTB C1 — Hören',
    meta: 'Hören ca. 20 Min. · 3 Punkte pro Aufgabe · Jeder Text wird einmal abgespielt · Varianten aus der Lerngruppe',
    parts: [
      { id: 'teil1', title: 'Teil 1 — Gespräche (22–27)', type: 'abc', points: 3, time: '~6 Min.', variants: horenTeil1 },
      { id: 'teil2', title: 'Teil 2 — Meinungen zuordnen (28–31)', type: 'match', points: 3, time: '~5 Min.', variants: horenTeil2 },
      { id: 'teil3', title: 'Teil 3 — Besprechung (32–35)', type: 'abc', points: 3, time: '~6 Min.', variants: horenTeil3 },
      { id: 'teil4', title: 'Teil 4 — Anrufbeantworter (36–40)', type: 'abc', points: 3, time: '~5 Min.', variants: horenTeil4 },
    ],
  },
];

export function findPart(moduleId, partId) {
  const mod = c1Modules.find((m) => m.id === moduleId);
  if (!mod) return {};
  return { mod, part: mod.parts.find((p) => p.id === partId) };
}

export default c1Modules;
