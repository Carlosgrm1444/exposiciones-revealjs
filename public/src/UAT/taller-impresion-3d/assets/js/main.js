(() => {
  const atmosphere = document.createElement("div");
  atmosphere.className = "slide-atmosphere";
  document.body.prepend(atmosphere);

  const palettes = [
    {
      name: "nika-core",
      background:
        "radial-gradient(circle at 14% 18%, rgba(77,223,255,0.36), transparent 25%), radial-gradient(circle at 82% 16%, rgba(42,125,255,0.30), transparent 27%), radial-gradient(circle at 64% 76%, rgba(155,195,255,0.16), transparent 24%), linear-gradient(135deg, #030d20 0%, #072146 54%, #0e3264 100%)",
    },
    {
      name: "electric-navy",
      background:
        "radial-gradient(circle at 18% 16%, rgba(155,195,255,0.34), transparent 22%), radial-gradient(circle at 78% 20%, rgba(77,223,255,0.24), transparent 24%), radial-gradient(circle at 66% 78%, rgba(42,125,255,0.18), transparent 25%), linear-gradient(135deg, #020913 0%, #0a1a36 50%, #12305a 100%)",
    },
    {
      name: "azure-future",
      background:
        "radial-gradient(circle at 16% 18%, rgba(77,223,255,0.34), transparent 24%), radial-gradient(circle at 80% 15%, rgba(42,125,255,0.28), transparent 26%), radial-gradient(circle at 66% 74%, rgba(182,219,255,0.12), transparent 24%), linear-gradient(135deg, #031022 0%, #072347 50%, #0c3b72 100%)",
    },
    {
      name: "midnight-tech",
      background:
        "radial-gradient(circle at 16% 18%, rgba(77,223,255,0.22), transparent 22%), radial-gradient(circle at 80% 14%, rgba(42,125,255,0.24), transparent 24%), radial-gradient(circle at 68% 78%, rgba(155,195,255,0.14), transparent 25%), linear-gradient(135deg, #03070f 0%, #0a1830 50%, #122946 100%)",
    },
    {
      name: "cobalt-pulse",
      background:
        "radial-gradient(circle at 18% 20%, rgba(77,223,255,0.30), transparent 23%), radial-gradient(circle at 76% 16%, rgba(42,125,255,0.34), transparent 26%), radial-gradient(circle at 70% 72%, rgba(105,168,255,0.18), transparent 24%), linear-gradient(135deg, #050d1b 0%, #10264b 52%, #1a3d73 100%)",
    },
    {
      name: "deep-ink",
      background:
        "radial-gradient(circle at 20% 18%, rgba(155,195,255,0.28), transparent 23%), radial-gradient(circle at 80% 16%, rgba(77,223,255,0.20), transparent 24%), radial-gradient(circle at 62% 78%, rgba(42,125,255,0.18), transparent 24%), linear-gradient(135deg, #010611 0%, #061733 50%, #0a2648 100%)",
    },
    {
      name: "neon-haze",
      background:
        "radial-gradient(circle at 14% 18%, rgba(77,223,255,0.38), transparent 22%), radial-gradient(circle at 84% 16%, rgba(42,125,255,0.30), transparent 25%), radial-gradient(circle at 66% 76%, rgba(188,223,255,0.16), transparent 24%), linear-gradient(135deg, #02101d 0%, #082740 52%, #114070 100%)",
    },
    {
      name: "polar-blue",
      background:
        "radial-gradient(circle at 16% 18%, rgba(115,206,255,0.36), transparent 23%), radial-gradient(circle at 78% 16%, rgba(62,146,255,0.28), transparent 25%), radial-gradient(circle at 64% 74%, rgba(207,234,255,0.16), transparent 24%), linear-gradient(135deg, #041321 0%, #0a2f52 50%, #0f4b7b 100%)",
    },
  ];

  const applyAtmosphere = (indexh = 0, indexv = 0) => {
    const key = indexh * 5 + indexv;
    const palette = palettes[key % palettes.length];

    atmosphere.dataset.theme = palette.name;
    atmosphere.style.opacity = "0";
    atmosphere.style.transform = `scale(${1.04 + ((key % 4) * 0.01)})`;
    atmosphere.style.background = palette.background;
    atmosphere.style.filter = `saturate(${1.18 + (key % 3) * 0.08}) contrast(${1.02 + (key % 2) * 0.03})`;

    requestAnimationFrame(() => {
      atmosphere.style.opacity = "1";
    });
  };

  applyAtmosphere(0, 0);

  Reveal.initialize({
    hash: true,
    slideNumber: true,
    controls: true,
    progress: true,
    center: true,
    transition: "fade",
    backgroundTransition: "fade",
    controlsTutorial: false,
    width: 1280,
    height: 720,
    margin: 0.04,
    autoAnimateEasing: "cubic-bezier(0.2, 0.9, 0.2, 1)",
    autoAnimateDuration: 0.6,
    plugins: [RevealHighlight, RevealNotes],
  });

  const updateForSlide = (event) => {
    applyAtmosphere(event.indexh ?? 0, event.indexv ?? 0);
  };

  Reveal.on("slidechanged", updateForSlide);
  Reveal.on("ready", updateForSlide);
  updateForSlide(Reveal.getIndices());

  document.body.classList.add("presentation-ready");
})();
