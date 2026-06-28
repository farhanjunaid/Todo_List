# TodoFlow

A clean, modern task manager built with React. Add, edit, complete, and filter your tasks — all saved automatically in your browser.

## Features

- Add, edit, and delete tasks
- Mark tasks as complete with a single click
- Filter by **All**, **Active**, or **Completed**
- Live progress bar and task counts
- One-click "Clear completed"
- Tasks persist locally via `localStorage`
- Responsive, mobile-friendly design

## Tech Stack

- **React 18** (functional components + hooks)
- **Create React App** build tooling
- **Font Awesome** icons
- Plain CSS with custom properties (no UI framework)

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Header.jsx
│   ├── TodoForm.jsx
│   ├── TodoFilters.jsx
│   ├── TodoList.jsx
│   ├── TodoItem.jsx
│   ├── EditTodoForm.jsx
│   └── EmptyState.jsx
├── hooks/
│   └── useTodos.js    # Todo state + localStorage logic
├── styles/
│   ├── global.css     # Base + theme tokens
│   └── App.css        # Component styles
├── App.jsx
└── index.jsx
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
```

The optimized output is generated in the `build/` folder, ready to deploy.

## License

MIT
