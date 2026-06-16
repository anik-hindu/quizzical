# Quizzical 🧠

A general knowledge quiz app focused on **Science: Computers**, built with React and Vite as a solo capstone project after completing the [React Basics course on Scrimba](https://scrimba.com/learn/learnreact).

## 🔗 Live Demo

> **[▶ Play Quizzical](https://quizzical-anik.netlify.app/)**

## 📸 Preview

![App Preview](./src/assets/preview.gif)

---

## ✨ Features

- Fetches 5 questions from the [Open Trivia Database API](https://opentdb.com/) in the **Science: Computers** category
- Multiple-choice answers rendered per question
- Highlights correct and incorrect answers on submission
- Displays the user's final score after checking answers
- "Play again" option to fetch a fresh set of questions
- Clean, responsive UI

## 🛠️ Built With

- [React](https://react.dev/) — component-based UI
- [Vite](https://vitejs.dev/) — fast dev server and bundler
- JavaScript (ES6+)
- CSS3
- [Open Trivia Database API](https://opentdb.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js v18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/anik-hindu/quizzical.git

# Navigate into the project directory
cd quizzical

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy.

## 📁 Project Structure

```
quizzical/
├── src/
│   ├── components/     # Reusable React components
│   ├── App.jsx         # Root component
│   └── main.jsx        # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## 🎓 What I Learned

This project was built to practice and reinforce:

- Fetching data from a third-party API with `useEffect`
- Managing component state with `useState`
- Passing data between components via props
- Conditional rendering based on quiz state (start screen → quiz → results)
- Decoding HTML entities from API responses
- Shuffling and displaying multiple-choice answers

## 🙏 Acknowledgements

- [Scrimba](https://scrimba.com/) — for the React Basics course that made this project possible
- [Open Trivia Database](https://opentdb.com/) — for the free trivia API

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
