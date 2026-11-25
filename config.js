/* Priya & Vivek · Wedding & Cocktail Invitation */
(() => {
  const dec11 = "Friday, 11 December 2026";
  const dec12 = "Saturday, 12 December 2026";
  const home = "Osho Homes, near C2 Palam Vihar, Gurugram 122017";
  const arrival = "The Riyasat · 1st Floor · Amar Vilas, Wazirpur, New Delhi";
  const palaceQuery = "The Riyasat Rajwada Palace Amar Vilas Wazirpur New Delhi";

  window.WEDDING_CONFIG = {
    bgm: "assets/audio/wedding-flute.m4a",
    wedding: {
      dateISO: "2026-12-12T10:00:00+05:30",
    },
    events: [
      { name: "Cocktail & Mehndi Night", icon: "sangeet", date: dec11, time: "7:00 PM onwards",
        venue: "At home", address: home, mapsQuery: home, accent: "#6B3674" },
      { name: "Haldi", icon: "haldi", date: dec12, time: "10:00 AM",
        venue: "At home", address: home, mapsQuery: home, accent: "#865619" },
      { name: "Reception of Barat", icon: "reception", date: dec12, time: "8:00 PM",
        venue: "Rajwada Palace", address: arrival, mapsQuery: palaceQuery, accent: "#7A1F3D" },
    ],
    venue: {
      name: "Rajwada Palace",
      address: arrival,
      mapsQuery: palaceQuery,
    },
    theme: {
      maroon: "#6D1A33", maroonDeep: "#4A0F22", gold: "#C9A24B",
      goldSoft: "#E5C878", ivory: "#F4EBDB", inkOnIvory: "#3A2230",
    },
    frames: {
      count: 181, loPath: "assets/frames/lo/", hiPath: "assets/frames/hi/",
      prefix: "f_", ext: ".webp",
    },
    sanctum: {
      count: 121, path: "assets/frames2/", prefix: "s_", ext: ".webp",
      heading: "The Hidden Moment", eyebrow: "A sacred moment awaits",
      hint: "Scroll gently to unfold this hidden moment",
      veilText: "A sacred moment awaits",
    },
  };
})();
