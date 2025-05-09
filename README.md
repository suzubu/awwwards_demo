# 🌀 Zentry Landing Page - Showcase

> An immersive, scroll-reactive concept site blending narrative, animation, and interactivity in a multiversal web experience.

Zentry is a showcase front-end built to demonstrate narrative-driven UI using React, GSAP, and TailwindCSS. It highlights scroll-based transitions, animated titles, bento-style video features, and immersive microinteractions.

---

## 🖼 Preview

![App Preview](media/preview.gif)


---

## ⚙️ Getting Started

These instructions will get your project running locally.

```bash
# 1. Clone the repo
git clone https://github.com/suzubu/zentry-clone-showcase.git

# 2. Navigate into the project folder
cd zentry-clone

# 3. Install dependencies (if applicable)
npm install

# 4. Run the app
npm run dev
```

> Built with:  
> - [React](https://reactjs.org/)  
> - [Vite](https://vitejs.dev/)  
> - [TailwindCSS v4](https://tailwindcss.com/)  
> - [GSAP](https://greensock.com/gsap/)

---

## ✨ Features

- 🎬 Scroll-triggered clip-path and scale transitions
- 🎞️ Animated title reveals and bento video cards
- 💡 Ambient visual effects with SVG filters
- 🌀 Immersive hero with click-to-expand video transitions

---

## 💡 Dev Notes

- GSAP’s `ScrollTrigger` and `useGSAP` used extensively for entrance/scroll logic
- Responsive layout maintained using Tailwind’s fluid spacing and typography
- Modular `sections/` and `components/` pattern used throughout
- Audio toggle visualizer uses staggered animation bars

---

## 📚 Inspiration / Credits

This project was inspired by:

- [Zentry (Original site)](https://zentry.gg)
- [JSMastery](https://www.youtube.com/watch?v=zA9r5zTllx4&t=9384s)
- Experimental creative front-ends

---

## 🧪 Known Issues

- ❌ No backend or routing; this is a front-end-only concept
- 🎧 Audio component requires click-to-play due to browser policies

---

## 🔭 Roadmap / TODO

- [ ] Add scroll progress indicator
- [ ] Expand mobile optimizations
- [ ] Add animated transitions between sections

---

## 📂 Folder Structure

```bash
zentry-clone/
├── public/
│   ├── audio/
│   ├── fonts/
│   ├── img/
│   └── videos/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── README.md
```

---

## 📜 License

MIT — feel free to use and adapt!

---

## 🙋‍♀️ Author

Made with ☕ + 🎧 by [suzubu](https://github.com/suzubu)
