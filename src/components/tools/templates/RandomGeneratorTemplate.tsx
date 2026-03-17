"use client";

import { useState, useCallback } from "react";
import { useToolUI } from "@/lib/i18n/ToolUIContext";

/* ─── Word List ─── */
const WORDS = [
  "apple", "bridge", "castle", "dance", "eagle", "forest", "garden", "harbor",
  "island", "jungle", "knight", "lantern", "mountain", "nebula", "ocean",
  "palace", "quartz", "river", "sunset", "thunder", "umbrella", "valley",
  "whisper", "xenon", "yellow", "zephyr", "anchor", "breeze", "canvas",
  "dolphin", "ember", "falcon", "glacier", "horizon", "ivory", "jasmine",
  "karma", "lotus", "marble", "nectar", "oasis", "phoenix", "quill",
  "radiant", "silver", "tiger", "unity", "velvet", "willow", "crystal",
  "dream", "echo", "flame", "golden", "harvest", "indigo", "jewel",
  "kingdom", "lemon", "mystic", "noble", "orchid", "prism", "quiet",
  "ruby", "sapphire", "twilight", "utopia", "violet", "wonder", "azure",
  "bloom", "coral", "dusk", "eternal", "frost", "gravity", "haze",
  "impulse", "jade", "kindle", "lunar", "melody", "nova", "onyx",
  "pearl", "quest", "realm", "storm", "tempo", "ultra", "vivid",
  "wave", "zenith", "arrow", "blaze", "charm", "dawn", "elixir",
  "fable", "glow", "haven", "icon", "jolt", "keen", "leaf",
  "mist", "north", "orbit", "pulse", "rain", "spark", "trail",
  "unity", "verse", "wind", "axis", "beam", "cliff", "drift",
  "edge", "flint", "grain", "helm", "iris", "jump", "knot",
  "link", "maze", "nest", "oak", "pine", "quake", "ridge",
  "shade", "thorn", "urge", "vine", "web", "yard", "zinc",
  "atlas", "bold", "calm", "deep", "echo", "fair", "gale",
  "hush", "iron", "just", "kite", "lamp", "moon", "nail",
  "open", "path", "rise", "sail", "tide", "upon", "vast",
  "warm", "next", "year", "zone", "arch", "bank", "cape",
  "dome", "east", "fern", "gate", "hill", "isle", "jet",
  "king", "lake", "mill", "note", "oven", "peak", "raft",
  "sand", "tree", "ursa", "veil", "wolf", "xray", "yarn", "zero",
];

/* ─── Magic 8-Ball Responses ─── */
const EIGHT_BALL = [
  "It is certain.", "It is decidedly so.", "Without a doubt.",
  "Yes — definitely.", "You may rely on it.", "As I see it, yes.",
  "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.",
  "Reply hazy, try again.", "Ask again later.",
  "Better not tell you now.", "Cannot predict now.",
  "Concentrate and ask again.", "Don't count on it.",
  "My reply is no.", "My sources say no.",
  "Outlook not so good.", "Very doubtful.",
];

/* ─── Animals ─── */
const ANIMALS = [
  "Dog","Cat","Eagle","Dolphin","Tiger","Elephant","Wolf","Fox","Bear","Lion",
  "Penguin","Owl","Hawk","Shark","Whale","Octopus","Turtle","Rabbit","Deer","Horse",
  "Giraffe","Zebra","Koala","Panda","Gorilla","Cheetah","Leopard","Jaguar","Orca","Seal",
  "Otter","Beaver","Raccoon","Hedgehog","Squirrel","Moose","Bison","Rhino","Hippo","Crocodile",
  "Parrot","Flamingo","Peacock","Swan","Hummingbird","Toucan","Pelican","Stork","Falcon","Raven",
  "Cobra","Python","Iguana","Chameleon","Gecko","Frog","Salamander","Axolotl","Starfish","Jellyfish",
  "Crab","Lobster","Seahorse","Clownfish","Manta Ray","Hammerhead","Narwhal","Manatee","Platypus","Armadillo",
  "Sloth","Lemur","Capybara","Chinchilla","Ferret","Wombat","Quokka","Red Panda","Snow Leopard","Arctic Fox",
  "Bald Eagle","Golden Retriever","Siberian Husky","Persian Cat","Blue Whale","Humpback Whale","Great White Shark","Komodo Dragon","Poison Dart Frog","Monarch Butterfly",
  "Dragonfly","Mantis","Firefly","Ladybug","Bee","Ant","Tarantula","Scorpion","Pangolin","Okapi",
];

/* ─── Countries ─── */
const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan",
  "Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia",
  "Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada",
  "Chad","Chile","China","Colombia","Comoros","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic",
  "Denmark","Djibouti","Dominican Republic","Ecuador","Egypt","El Salvador","Estonia","Ethiopia","Fiji","Finland",
  "France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Guatemala","Guinea","Guyana",
  "Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel",
  "Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kuwait","Laos","Latvia","Lebanon",
  "Libya","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mexico",
  "Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nepal","Netherlands",
  "New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Panama",
  "Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saudi Arabia",
  "Senegal","Serbia","Singapore","Slovakia","Slovenia","Somalia","South Africa","South Korea","Spain","Sri Lanka",
  "Sudan","Sweden","Switzerland","Syria","Taiwan","Tanzania","Thailand","Togo","Trinidad and Tobago","Tunisia",
  "Turkey","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam",
  "Yemen","Zambia","Zimbabwe",
];

/* ─── Quotes ─── */
const QUOTES = [
  "The only way to do great work is to love what you do. — Steve Jobs",
  "Innovation distinguishes between a leader and a follower. — Steve Jobs",
  "Stay hungry, stay foolish. — Steve Jobs",
  "Life is what happens when you're busy making other plans. — John Lennon",
  "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
  "It is during our darkest moments that we must focus to see the light. — Aristotle",
  "The only impossible journey is the one you never begin. — Tony Robbins",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "In the middle of every difficulty lies opportunity. — Albert Einstein",
  "The best time to plant a tree was 20 years ago. The second best time is now. — Chinese Proverb",
  "Your time is limited, don't waste it living someone else's life. — Steve Jobs",
  "Not everything that is faced can be changed, but nothing can be changed until it is faced. — James Baldwin",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. — Zig Ziglar",
  "The mind is everything. What you think you become. — Buddha",
  "An unexamined life is not worth living. — Socrates",
  "Everything you've ever wanted is on the other side of fear. — George Addair",
  "Do what you can, with what you have, where you are. — Theodore Roosevelt",
  "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
  "Act as if what you do makes a difference. It does. — William James",
];

/* ─── Usernames ─── */
const USERNAME_ADJECTIVES = [
  "Swift","Bold","Silent","Cosmic","Neon","Cyber","Turbo","Ultra","Epic","Mystic",
  "Shadow","Thunder","Crystal","Golden","Silver","Iron","Quantum","Pixel","Stellar","Frozen",
];
const USERNAME_NOUNS = [
  "Wolf","Fox","Eagle","Tiger","Phoenix","Dragon","Knight","Ninja","Wizard","Ranger",
  "Falcon","Raven","Storm","Blaze","Frost","Shadow","Spark","Nova","Viper","Hawk",
];

/* ─── Emoji List ─── */
const EMOJIS = [
  "😀", "😂", "🥰", "😎", "🤔", "🎉", "🔥", "💡", "🌈", "⭐",
  "🚀", "💎", "🎵", "🌺", "🦊", "🐱", "🐶", "🦄", "🌍", "☕",
  "🍕", "🎨", "📚", "🏆", "💪", "🌟", "🎯", "🧩", "🎸", "🌙",
  "🍀", "🦋", "🐻", "🌻", "🔮", "🎭", "🏔️", "🌊", "🍎", "✨",
];

/* ─── Helpers ─── */
function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomPick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
function randomHexColor(): string {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
}

/* ─── Generator Types ─── */
interface GeneratorResult {
  text: string;
  color?: string;
}

/* ─── Generators ─── */
const generators: Record<
  string,
  (options: { uppercase?: boolean; quantity?: number; names?: string; teams?: number }) => GeneratorResult
> = {
  "random-color": () => {
    const c = randomHexColor();
    return { text: c, color: c };
  },
  "random-hex-color": () => {
    const c = randomHexColor();
    return { text: c, color: c };
  },
  "random-letter": ({ uppercase }) => {
    const code = randomInt(0, 25);
    const letter = String.fromCharCode((uppercase ? 65 : 97) + code);
    return { text: letter };
  },
  "random-word": () => ({ text: randomPick(WORDS) }),
  "random-sentence": () => {
    const len = randomInt(5, 12);
    const words = Array.from({ length: len }, () => randomPick(WORDS));
    words[0] = words[0][0].toUpperCase() + words[0].slice(1);
    return { text: words.join(" ") + "." };
  },
  "random-paragraph": () => {
    const sentences = randomInt(3, 6);
    const parts: string[] = [];
    for (let i = 0; i < sentences; i++) {
      const len = randomInt(5, 12);
      const words = Array.from({ length: len }, () => randomPick(WORDS));
      words[0] = words[0][0].toUpperCase() + words[0].slice(1);
      parts.push(words.join(" ") + ".");
    }
    return { text: parts.join(" ") };
  },
  "random-date": () => {
    const start = new Date(2000, 0, 1).getTime();
    const end = new Date(2030, 11, 31).getTime();
    const d = new Date(randomInt(start, end));
    return { text: d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", weekday: "long" }) };
  },
  "random-ip": () => {
    const parts = Array.from({ length: 4 }, () => randomInt(0, 255));
    return { text: parts.join(".") };
  },
  "random-mac": () => {
    const parts = Array.from({ length: 6 }, () =>
      randomInt(0, 255).toString(16).padStart(2, "0").toUpperCase()
    );
    return { text: parts.join(":") };
  },
  "yes-or-no": () => ({ text: Math.random() < 0.5 ? "YES" : "NO" }),
  "random-team": ({ names, teams }) => {
    const nameList = (names ?? "")
      .split(/[,\n]+/)
      .map((n) => n.trim())
      .filter(Boolean);
    if (nameList.length === 0) return { text: "Enter names above (comma or newline separated)" };
    const numTeams = teams ?? 2;
    // Shuffle
    for (let i = nameList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [nameList[i], nameList[j]] = [nameList[j], nameList[i]];
    }
    const teamResults: string[][] = Array.from({ length: numTeams }, () => []);
    nameList.forEach((name, i) => teamResults[i % numTeams].push(name));
    return {
      text: teamResults
        .map((t, i) => `Team ${i + 1}: ${t.join(", ")}`)
        .join("\n"),
    };
  },
  "magic-8-ball": () => ({ text: randomPick(EIGHT_BALL) }),
  "random-emoji": () => ({ text: randomPick(EMOJIS) }),
  "random-animal": () => ({ text: randomPick(ANIMALS) }),
  "random-country": () => ({ text: randomPick(COUNTRIES) }),
  "random-quote": () => ({ text: randomPick(QUOTES) }),
  "random-username": () => {
    const adj = randomPick(USERNAME_ADJECTIVES);
    const noun = randomPick(USERNAME_NOUNS);
    const num = randomInt(1, 999);
    return { text: `${adj}${noun}${num}` };
  },
  "random-passphrase": ({ quantity }) => {
    const count = quantity ?? 4;
    const words = Array.from({ length: count }, () => randomPick(WORDS));
    return { text: words.join("-") };
  },
  "random-mac-address": () => {
    const parts = Array.from({ length: 6 }, () =>
      randomInt(0, 255).toString(16).padStart(2, "0").toUpperCase()
    );
    return { text: parts.join(":") };
  },
  "spin-wheel": ({ names }) => {
    const nameList = (names ?? "")
      .split(/[,\n]+/)
      .map((n) => n.trim())
      .filter(Boolean);
    if (nameList.length === 0) return { text: "Enter options above (comma or newline separated)" };
    return { text: "🎯 " + randomPick(nameList) };
  },
  "lottery-numbers": ({ quantity }) => {
    const count = quantity ?? 6;
    const max = 49;
    const nums = new Set<number>();
    while (nums.size < count) nums.add(randomInt(1, max));
    return { text: Array.from(nums).sort((a, b) => a - b).join("  ") };
  },
  "bingo-caller": () => {
    const n = randomInt(1, 75);
    const letter = n <= 15 ? "B" : n <= 30 ? "I" : n <= 45 ? "N" : n <= 60 ? "G" : "O";
    return { text: `${letter}-${n}` };
  },
};

export default function RandomGeneratorTemplate({
  config,
}: {
  config: Record<string, unknown>;
}) {
  const { generatorId, label } = config as {
    generatorId: string;
    label?: string;
  };

  const [result, setResult] = useState<GeneratorResult | null>(null);
  const [history, setHistory] = useState<GeneratorResult[]>([]);
  const [copied, setCopied] = useState(false);
  const [uppercase, setUppercase] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [names, setNames] = useState("");
  const [teams, setTeams] = useState(2);
  const [animating, setAnimating] = useState(false);
  const ui = useToolUI();

  const gen = generators[generatorId];

  const handleGenerate = useCallback(() => {
    if (!gen) return;

    if (generatorId === "yes-or-no") {
      setAnimating(true);
      let count = 0;
      const interval = setInterval(() => {
        setResult(gen({ uppercase, quantity, names, teams }));
        count++;
        if (count > 8) {
          clearInterval(interval);
          const final = gen({ uppercase, quantity, names, teams });
          setResult(final);
          setHistory((prev) => [final, ...prev].slice(0, 10));
          setAnimating(false);
        }
      }, 100);
      return;
    }

    if (quantity > 1) {
      const results = Array.from({ length: quantity }, () =>
        gen({ uppercase, quantity, names, teams })
      );
      const combined: GeneratorResult = {
        text: results.map((r) => r.text).join("\n"),
        color: results[0]?.color,
      };
      setResult(combined);
      setHistory((prev) => [combined, ...prev].slice(0, 10));
    } else {
      const r = gen({ uppercase, quantity, names, teams });
      setResult(r);
      setHistory((prev) => [r, ...prev].slice(0, 10));
    }
  }, [gen, generatorId, uppercase, quantity, names, teams]);

  const handleCopy = useCallback(async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [result]);

  const showQuantity = ![
    "yes-or-no",
    "magic-8-ball",
    "random-team",
    "spin-wheel",
    "bingo-caller",
    "random-quote",
    "random-animal",
    "random-country",
  ].includes(generatorId);

  const showUppercase = generatorId === "random-letter";
  const showTeamOptions = generatorId === "random-team";
  const showNamesInput = generatorId === "spin-wheel";

  return (
    <div className="mx-auto w-full max-w-xl space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
        <div className="px-6 py-5 space-y-5">
          {!gen && (
            <div
              className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400"
              role="alert"
            >
              Generator &quot;{generatorId}&quot; not found.
            </div>
          )}

          {/* Options */}
          <div className="flex flex-wrap items-end gap-3">
            {showQuantity && (
              <div>
                <label
                  htmlFor="quantity"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {ui.quantity}
                </label>
                <input
                  id="quantity"
                  type="number"
                  min={1}
                  max={100}
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))
                  }
                  aria-label={ui.quantity}
                  className="w-24 rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                />
              </div>
            )}

            {showUppercase && (
              <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  checked={uppercase}
                  onChange={(e) => setUppercase(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                  {ui.uppercase}
              </label>
            )}

            {showTeamOptions && (
              <>
                <div className="flex-1 min-w-[200px]">
                  <label
                    htmlFor="team-names"
                    className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Names (comma or newline separated)
                  </label>
                  <textarea
                    id="team-names"
                    rows={3}
                    value={names}
                    onChange={(e) => setNames(e.target.value)}
                    placeholder="Alice, Bob, Charlie, Diana..."
                    aria-label="Team member names"
                    className="w-full resize-y rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="num-teams"
                    className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Teams
                  </label>
                  <input
                    id="num-teams"
                    type="number"
                    min={2}
                    max={20}
                    value={teams}
                    onChange={(e) =>
                      setTeams(Math.max(2, Math.min(20, parseInt(e.target.value) || 2)))
                    }
                    aria-label="Number of teams"
                    className="w-20 rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                  />
                </div>
              </>
            )}

            {showNamesInput && (
              <div className="w-full">
                <label
                  htmlFor="wheel-names"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Options (comma or newline separated)
                </label>
                <textarea
                  id="wheel-names"
                  rows={3}
                  value={names}
                  onChange={(e) => setNames(e.target.value)}
                  placeholder="Pizza, Burgers, Sushi, Tacos..."
                  aria-label="Wheel options"
                  className="w-full resize-y rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                />
              </div>
            )}
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={!gen || animating}
            aria-label={label ?? ui.generate}
            className="w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-40 dark:focus:ring-offset-gray-900"
          >
            {animating ? "..." : label ?? ui.generate}
          </button>

          {/* Result */}
          {result && (
            <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 dark:border-gray-700 dark:from-blue-950/40 dark:to-indigo-950/40" aria-live="polite" aria-atomic="true">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  {result.color && (
                    <div
                      className="mb-3 h-16 w-16 rounded-lg border border-gray-200 shadow-sm dark:border-gray-600"
                      style={{ backgroundColor: result.color }}
                      aria-label={`Color swatch: ${result.color}`}
                    />
                  )}
                  <p
                    className={`font-medium text-gray-900 dark:text-white whitespace-pre-wrap ${
                      generatorId === "yes-or-no" || generatorId === "random-emoji"
                        ? "text-4xl text-center"
                        : generatorId === "random-letter"
                          ? "text-6xl text-center font-mono"
                          : "text-lg"
                    } ${animating ? "animate-pulse" : ""}`}
                  >
                    {result.text}
                  </p>
                </div>
                <button
                  onClick={handleCopy}
                  aria-label="Copy result"
                  className="shrink-0 rounded-md bg-blue-600 px-3 py-2 text-sm text-white transition hover:bg-blue-700"
                >
                  {copied ? "✓" : ui.copy}
                </button>
              </div>
            </div>
          )}

          {/* History */}
          {history.length > 1 && (
            <div>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {ui.history}
              </h3>
              <div className="space-y-1.5">
                {history.slice(1).map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-md bg-gray-50 px-3 py-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {item.color && (
                      <div
                        className="h-4 w-4 shrink-0 rounded-sm border border-gray-200 dark:border-gray-600"
                        style={{ backgroundColor: item.color }}
                      />
                    )}
                    <span className="truncate">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
