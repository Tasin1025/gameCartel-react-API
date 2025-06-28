# 🎮 GameCartel

**GameCartel** is a modern, fully responsive game discovery app built with **React**, **TypeScript**, and **Chakra UI**. It lets users browse, filter, and search games across multiple platforms with a sleek UI and powerful functionality.

This project applies industry best practices in frontend architecture, state management, and code organization. Designed with scalability, reusability, and developer productivity in mind.

---

## 🚀 Features

- 🔍 **Search and Explore**: Search games by title, filter by genre, platform, and sort by relevance, name, or release date.
- 🎮 **Cross-Platform Support**: Browse games from various devices (PC, PlayStation, Xbox, etc.).
- ⚡ **Instant UI with SPA**: Fully single-page experience—no reloads!
- 🌓 **Dark / Light Mode**: Switch between themes using Chakra UI's built-in support.
- ⏳ **Loading Animations**: Friendly loading indicators while fetching from APIs.
- ✅ **Forms & Validation**: Built with React Hook Form and Zod for clean, type-safe validation.
- ♻️ **Reusable Components**: Clean and modular component design using TypeScript.
- 🧠 **State Management**: Efficient local and shared state handling.
- 🎨 **Styling**: Styled using Chakra UI (CSS-in-JS), with support for CSS modules or vanilla CSS if needed.
- 🧹 **Best Practices**: Clean code, proper folder structure, type safety, and consistent linting.
- ⚙️ **Productivity First**: Built with VSCode shortcuts and code quality in mind.
- 🌐 **Backend Integration**: Easily extendable to fetch real-time data from a backend or external APIs.
- 🚀 **Deployed**: Production-ready build with optimized performance.

---

## 🛠️ Tech Stack

- **React + TypeScript**
- **Chakra UI** – UI components and theme system
- **React Hook Form** – Form handling
- **Zod** – Schema validation
- **Axios / Fetch** – API communication
- **Vite** – Frontend tooling
- **React Router** – Page routing
- **API** – rawg.io API used

---

## 📦 Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/Tasin1025/gameCartel-react-API
cd gamecartel

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

Clone this repository to your local machine.
Run npm install to install the required dependencies.
Get a RAWG API key at https://rawg.io/apidocs. You'll have to create an account first.
Add the API key to src/services/api-client.ts
Run npm run dev to start the web server.
