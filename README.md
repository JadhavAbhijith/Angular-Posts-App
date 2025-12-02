# 📘 Angular Posts App 

A simple Angular application built using **Angular 20 (Standalone Components + Vite)** that fetches posts from an API, displays them in a table, allows adding new posts, and handles success & error feedback through popup modals.

This project was developed as part of a **Frontend Intern Assignment**.

---

## 🚀 Live Demo  
🔗 **Hosted on GitHub Pages:**  
https://jadhavabhijith.github.io/Angular-Posts-App/

---

## 🛠️ Features

### ✅ Fetch and Display Posts
- Loads **all posts** from the public API:  
  `https://jsonplaceholder.typicode.com/posts`
- Shows them in a clean tabular format.

### ✅ Add New Post
- Opens a form to add:
  - Title  
  - Description  
- Auto-assigns the next ID (e.g., after 100 → 101)
- New posts are added **at the bottom** of the table.

### ✅ Form Validation
- Title and Description **cannot be empty**.
- If empty → shows an error popup.

### ✅ API Integration (GET & POST)
- Uses Angular's `HttpClient` via `provideHttpClient()`
- Handles server errors gracefully.

### ✅ Popup Alerts
- **Success Popup:** “Post added successfully!”
- **Error Popup:** for empty fields or API failure.

### ✅ Modern Angular Architecture
- Built using **Standalone Components**
- Uses **Vite** for fast development & builds
- No NgModules  
- Uses `app.config.ts`, `provideHttpClient()`, `provideRouter()`

---

## 📦 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Angular 20** | Framework |
| **Standalone Components** | Modern architecture |
| **TypeScript** | Main language |
| **Vite Builder** | Fast dev server & builds |
| **HttpClient** | API requests |
| **EventEmitter** | Component communication |
| **GitHub Pages** | Hosting |

---

## 🏗️ How the App Works (Simple Explanation)

1. When the app loads, it fetches **all posts** from the API.
2. These posts are displayed in a table.
3. Clicking **Add Post** opens a form.
4. User enters Title + Description.
5. Form validates input:
   - If empty → error popup.
6. Data is sent to the API using POST.
7. API always returns ID = 101 (fake API),  
   so the app generates its own ID starting from the last post's ID + 1.
8. New post appears **at the bottom** of the table.
9. A success popup confirms the addition.

---

## 🔧 Installation & Setup

### 1️⃣ Clone the repository:

git clone https://github.com/YOUR_USERNAME/angular-posts-app.git

cd angular-posts-app

npm install

ng serve

Open : http://localhost:4200

---

🚀 Deployment (GitHub Pages)

Build the project:

ng build --base-href /angular-posts-app/

Deploy:

npx angular-cli-ghpages --dir=dist/frontend-posts-app/browser


Then enable GitHub Pages:

Repo → Settings → Pages → Select gh-pages branch

