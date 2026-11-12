Web fonts for link.axelano.space (self-hosted, no third-party request).

Outfit 600/800, Inter 400/600 and JetBrains Mono 400: SIL Open Font License 1.1
  Inter           Copyright 2016 The Inter Project Authors (https://github.com/rsms/inter)
  Outfit          Copyright 2021 The Outfit Project Authors (https://github.com/Outfitio/Outfit-Fonts)
  JetBrains Mono  Copyright 2020 The JetBrains Mono Project Authors (https://github.com/JetBrains/JetBrainsMono)
  License text: https://openfontlicense.org

Each file is a subset of the matching @fontsource "latin" woff2 (same glyph shapes and OpenType features):
Basic Latin plus a few typographic marks. A character outside the subset falls back to the system font.

  pyftsubset <source>.woff2 --flavor=woff2 --layout-features='*' --glyph-names --notdef-outline \
    --name-IDs=0,1,2,3,4,5,6,13,14 \
    --unicodes='U+0020-007E,U+00A0,U+00A9,U+00B7,U+2013,U+2014,U+2018,U+2019,U+201C,U+201D,U+2022,U+2026' \
    --output-file=<name>-v1.woff2

(needs fonttools and brotli). Changing a file means a new name (-v2): /fonts is served with a one-year immutable cache.
