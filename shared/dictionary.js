

// dictionary.js - Fast Set-based word validation
const DICTIONARY_WORDS = [
  "about", "above", "actor", "acute", "adapt", "admit", "adopt", "adult",
  "after", "again", "agent", "agree", "ahead", "alarm", "album", "alert",
  "alien", "align", "alike", "alive", "allow", "alloy", "alone", "along",
  "alter", "amber", "amend", "ample", "anchor", "angel", "anger", "angle",
  "angry", "ankle", "apple", "apply", "arena", "argue", "arise", "armor",
  "arrow", "aside", "asset", "atlas", "audio", "audit", "avoid", "awake",
  "award", "aware", "bacon", "badge", "baker", "basic", "basin", "basis",
  "beach", "beard", "beast", "begin", "bench", "berry", "birth", "black",
  "blade", "blame", "blank", "blast", "blaze", "blend", "blind", "block",
  "bloom", "board", "boast", "bonus", "boost", "bound", "brain", "brand",
  "brass", "brave", "bread", "break", "breed", "brick", "bride", "brief",
  "bring", "brisk", "broad", "broke", "brown", "brush", "build", "bunch",
  "cabin", "cable", "camel", "canal", "candy", "canoe", "cargo", "catch",
  "cause", "cedar", "chain", "chair", "chalk", "champ", "chant", "chaos",
  "charm", "chart", "chase", "cheap", "check", "cheek", "cheer", "chess",
  "chest", "chief", "child", "chill", "china", "chips", "chord", "chunk"
  // Add as many words as needed
];

// Convert to a Set for instant O(1) validation lookups
const VALID_WORDS = new Set(DICTIONARY_WORDS.map(w => w.toLowerCase()));