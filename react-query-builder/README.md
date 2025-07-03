Here's the updated `README.md` with the **License section removed**, keeping the rest intact and tailored for your npm package `pran-the-query-builder`:

---

### ✅ Final `README.md` (No License Section)

````markdown
# Pran the Query Builder

A customizable, lightweight, and developer-friendly **React Query Builder** component for building rule-based filters using AND/OR logic. Built with Tailwind CSS, Vite, and TypeScript.

![Demo Screenshot](demo-screenshot.png)

---

## 📦 Package Info

- **Name:** `pran-the-query-builder`
- **Version:** 1.0.0
- **Description:** My custom React Query Builder component
- **Keywords:** react, query-builder, filter, rules
- **Repo:** [GitHub](https://github.com/)

---

## ✨ Features

- ✅ Build nested conditions with AND / OR groups
- ✅ JSON output of user-defined filters
- ✅ Tailwind CSS-based styling
- ✅ Lightweight and fast (Vite + React 18)
- ✅ TypeScript support with type definitions
- ✅ Simple integration into existing projects

---

## 🚀 Installation

```bash
npm install pran-the-query-builder
# or
yarn add pran-the-query-builder
````

---

## ⚙️ Usage

```tsx
import React from 'react';
import QueryBuilder from 'pran-the-query-builder';

function App() {
  return (
    <div className="p-4">
      <QueryBuilder />
    </div>
  );
}

export default App;
```

---

## 📤 Example Output (JSON)

```json
{
  "condition": "AND",
  "rules": [
    {
      "field": "age",
      "operator": ">",
      "value": 18
    },
    {
      "condition": "OR",
      "rules": [
        { "field": "status", "operator": "=", "value": "active" },
        { "field": "status", "operator": "=", "value": "pending" }
      ]
    }
  ]
}
```

---

## 🧱 Project Structure

* `src/` – Main component files
* `dist/` – Compiled output for npm
* `tailwind.config.js` – Tailwind theme setup
* `vite.config.ts` – Vite bundler config

---

## 🛠 Scripts

| Command           | Description             |
| ----------------- | ----------------------- |
| `npm run dev`     | Start dev server (Vite) |
| `npm run build`   | Build for production    |
| `npm run preview` | Preview built app       |
| `npm run lint`    | Run ESLint              |

---

## 📚 Tech Stack

* React 18
* TypeScript
* Vite
* Tailwind CSS
* clsx

---

## 🔗 Repository

[GitHub](https://github.com/)

Feel free to fork, improve, and submit pull requests!

```

---

Let me know if you'd like me to:

- Save this into your ZIP as `README.md`
- Auto-fill missing parts (e.g. GitHub URL, author name)
- Add examples with `fields`, `onChange`, or drag-drop setup
```
