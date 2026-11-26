import { mkdirSync, writeFileSync } from "node:fs";

// What the Elevator Would Say — one line, in the elevator's own voice.
const LINE =
  "You hold the door for strangers but hit Close the second your ex walks in. I remember that.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
