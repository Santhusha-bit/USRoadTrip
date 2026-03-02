# 🗺️ USA All 50 States Road Trip Planner

An interactive React app for planning the optimal road trip across all 50 US states — featuring the shortest route, a 90-day travel plan, per-person cost breakdown, 25 must-see stops, and expert tips.

![USA Road Trip Planner](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **Optimal Route** — Near-TSP-optimal path visiting all 50 states (~13,000 road miles)
- **Complete State Sequence** — All 50 states in order with visual flow
- **7 Trip Phases** — Detailed 90-day breakdown with stops, miles, and highlights
- **Cost Breakdown** — Full per-person expense table with Budget / Mid-Range / Comfort tiers
- **25 Unmissable Stops** — Curated bucket list with descriptions
- **9 Pro Tips** — Expert advice on fuel, parks, timing, connectivity, and more
- **Sticky Navigation** — Tab-based section switching with blur backdrop

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/usa-road-trip-planner.git
cd usa-road-trip-planner

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
usa-road-trip-planner/
├── public/
│   └── favicon.svg
├── src/
│   ├── constants/
│   │   ├── colors.js          # Color palette
│   │   └── data.js            # All trip data (states, phases, costs, tips)
│   ├── components/
│   │   ├── UI.jsx             # Shared: SectionLabel, SectionTitle, Divider, etc.
│   │   ├── Hero.jsx           # Full-screen landing hero
│   │   ├── NavTabs.jsx        # Sticky navigation tabs
│   │   ├── Overview.jsx       # Route strategy + all 50 states sequence
│   │   ├── Phases.jsx         # 7 trip phases with timeline
│   │   ├── Costs.jsx          # Cost breakdown table + budget tiers
│   │   ├── Highlights.jsx     # 25 must-see destinations
│   │   ├── Tips.jsx           # 9 expert travel tips
│   │   ├── Footer.jsx         # Page footer
│   │   └── USARoadTripPlanner.jsx  # Root component
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

## 🗺️ The Route

The optimal route follows a near-TSP solution:

| Phase | Region | Miles |
|-------|--------|-------|
| 1 | New England & Mid-Atlantic | ~900 mi |
| 2 | The South & Appalachia | ~1,800 mi |
| 3 | Midwest & Great Lakes | ~1,400 mi |
| 4 | Heartland & Gulf Coast | ~2,200 mi |
| 5 | Northern Plains & Rockies | ~1,800 mi |
| 6 | Southwest & Pacific Coast | ~2,800 mi |
| ✈ | Alaska & Hawaii (flights) | ~4,200 air mi |

**Total: ~13,000 road miles + 2 flights · 90 days**

## 💰 Cost Summary (Per Person, Mid-Range)

| Item | Cost |
|------|------|
| Fuel | $813 |
| Accommodation | $4,950 |
| Food | $3,150 |
| Flights (AK+HI) | $1,000 |
| Attractions | $380 |
| Car/Maintenance | $800 |
| Insurance | $250 |
| Misc | $500 |
| **Total** | **~$11,843** |

## 🛠️ Tech Stack

- **React 18** — UI framework
- **Vite 5** — Build tool & dev server
- **Google Fonts** — Bebas Neue + DM Sans
- **Inline styles** — No CSS-in-JS library dependency

## 📄 License

MIT — free to use, modify, and distribute.

---

*Distances and costs are estimates. Plan for flexibility — the best moments are unplanned.* 🚗
