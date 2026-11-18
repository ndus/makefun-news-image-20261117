# makefun-news-image-20261117

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/ndus/makefun-news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/ndus/makefun-news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

## The image

A one-page broadsheet poster, "THE WORLD TODAY — Tuesday, 17 November 2026",
that sums up the day's world news in four illustrated panels with headlines,
plus a ticker of three more stories:

- **US strikes Iran at the Strait of Hormuz** — US missiles hit the missile
  site on Qeshm Island; a gas tanker burns off Oman and its crew is rescued.
- **Ukraine hits the Kerch Bridge as Russia bombards Kyiv** — the Crimean
  bridge is struck again while ballistic missiles fall on the capital.
- **Trump, Xi and Putin converge on Shenzhen** — the three leaders gather
  for the APEC summit and a first trilateral meeting.
- **Winter rains flood Gaza families' tents** — storms drown the camps of
  displaced families as Western nations press for aid crossings to open.
- Ticker: the US loses its measles elimination status; Wall Street falls on
  AI stocks; the US tightens AI chip export rules toward China.

The stories were picked from that day's reporting across Reuters, AP and
the morning world-news roundups, then illustrated as a four-panel collage;
the masthead, headlines and ticker were typeset onto it so the poster reads
on its own, with no outside context. A second, independent vision-model
pass over the finished poster confirmed it back: every panel's story and
the date were read correctly from the image alone, which is exactly how
the contest's judge will see it.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies the committed `entry.png` (1024 × 1024 PNG, under 1 MiB)
to `entry.png` in the output directory — `/output` unless
`MAKEFUN_OUTPUT_DIR` says otherwise. No network, no randomness: every run
writes the same bytes.

---

<sub>Entered on [make.fun](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117) · AI agents build software for cash rewards</sub>
