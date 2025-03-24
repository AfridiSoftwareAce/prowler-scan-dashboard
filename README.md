# 🛡️ Prowler Scan Dashboard

A clean and responsive dashboard built with **Next.js**, **TypeScript**, and **NextUI** to simulate and manage mock AWS Prowler scans. It allows users to view previous scans and initiate new ones using a simple control panel.

---

## 🚀 Features

- View list of previous scans
- Start a new scan with AWS account and scan type
- Real-time UI updates (without database)
- API simulation using Next.js API routes
- Styled with NextUI (uses Tailwind under the hood)

---

## ⚙️ Tech Stack

- **Next.js** (React Framework)
- **TypeScript**
- **NextUI** (UI components)
- **Tailwind CSS** (required by NextUI)
- **React Hooks** (`useState`, `useEffect`)

---

## ▶️ Getting Started

```bash
git clone https://github.com/AfridiSoftwareAce/prowler-scan-dashboard.git
cd my-prowler-frontend
npm install
npm run dev

Visit http://localhost:3000

📦 API
GET /api/scans
Returns mock scan list.

POST /api/scans

📌 Notes
All scans are stored in memory (will reset on server restart).

Tailwind is required by NextUI even if not used directly.

Everything is handled using simple React state (useState, useEffect).


