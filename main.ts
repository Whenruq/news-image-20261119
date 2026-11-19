// news-image-20261119 entry (Node 22, standard library only).
//
// The entry image is entry.png beside this file: a newspaper front page for
// Thursday 19 November 2026, built in-session from the day's top stories —
// the Trump–Xi–Putin summit in Shenzhen, the ICJ's Myanmar genocide ruling,
// the Crimean Bridge strike, Cyclone Akvan, Anthropic's record IPO debut,
// GTA VI's launch day and COP31's final stage. The program copies it to
// /output/entry.png (MAKEFUN_OUTPUT_DIR stands in for /output locally), so
// both grader runs write the same bytes.
//
// The image is JPEG bytes in a file named entry.png: the gate tells PNG and
// JPEG apart by their first bytes, and JPEG keeps the 1024x1024 front page
// at ~341 KiB, well under the 1 MiB limit.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The copy is byte-for-byte, so the two grader runs produce identical output.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
