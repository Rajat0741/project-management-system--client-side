# Project Management System - Features

This full-stack application is split into two repositories:
- **Client (Frontend):** [Project Management System - Client](https://github.com/Rajat0741/Project-management-system-client) *(Assuming standard naming)*
- **Server (Backend):** [Project Management System - Server](https://github.com/Rajat0741/Project-management-system-server.git)

## 🔐 Authentication & Security
- **JWT Auth:** Secure sessions with access (15m) and refresh (7d) tokens using HTTP-only cookies.
- **Verification & Recovery:** Automated email verification and secure password reset workflows.
- **RBAC:** Project-level roles (`admin`, `project_admin`, `member`) controlling access and endpoints.

## 📊 Projects & Team Collaboration
- **Workspaces:** Create, update, delete, and filter projects with real-time card and overview dashboards.
- **Member Management:** Invite members by email, manage role permissions, and handle self-serve project exits.
- **Project Notes:** Real-time collaborative note-taking partitioned inside each project workspace.

## ✅ Task & Subtask Tracking
- **Task Lifecycle:** Organize tasks into `Todo`, `In Progress`, and `Done` states with rich descriptions.
- **Subtasks:** Break down complex tasks into deeply trackable sub-items.
- **Delegation:** Assign tasks/subtasks, filter by assignees, and track progress visually.

## 📂 File Management
- **Cloud Storage:** Upload avatars and task attachments (up to 10MB) seamlessly via ImageKit.
- **Robust Downloads:** Download single files or bulk-download all task attachments as a client-side packaged ZIP.

## 🎨 UI/UX Details
- **Experience:** Responsive design, persistent Dark/Light mode toggles, and seamless animations (Aceternity UI/Motion).
- **Optimistic Updates:** Instant UI feedback powered by TanStack React Query.
- **Loaders & Notifications:** Comprehensive Sonner toasts and dedicated cold-start loaders for backend wake-ups.

## 🛠️ Combined Tech Stack
- **Frontend:** React 19, TypeScript, Vite, TanStack Router/Query, Tailwind CSS, shadcn/ui.
- **Backend:** Node.js, Express v5, MongoDB, Mongoose, Mailgen, imagekit.
