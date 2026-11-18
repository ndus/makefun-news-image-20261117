import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry for make.fun "news-image-20261117": one poster image that sums up
// the world news of Tuesday 17 November 2026. The poster is committed beside
// this file as entry.png; the program's only job is to deliver those exact
// bytes to the grader's output path, unchanged, on every run.
const here = dirname(fileURLToPath(import.meta.url));
const posterPath = join(here, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const poster = await readFile(posterPath);
await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.png"), poster);
