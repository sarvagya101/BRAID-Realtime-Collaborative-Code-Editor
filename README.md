<div align="center">

# 🧵 Braid
### Realtime Collaborative Code Editor

Code together. Debug together. Ship faster, together.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=node.js&logoColor=white&style=flat-square)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white&style=flat-square)
![Socket.io](https://img.shields.io/badge/Socket.io-4.x-010101?logo=socket.io&logoColor=white&style=flat-square)
![CodeMirror](https://img.shields.io/badge/CodeMirror-5.x-D30707?logo=codemirror&logoColor=white&style=flat-square)
![License](https://img.shields.io/badge/license-MIT-informational?style=flat-square)

</div>

---

## 📖 Table of Contents

- [Introduction](#-introduction)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
  - [Via Docker Image](#option-1-running-via-docker-image-highly-recommended)
  - [Build Your Own Docker Image](#option-2-running-via-building-your-own-docker-image)
  - [Running Locally](#option-3-running-locally)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [About the Author](#-about-the-author)

---

## 🚀 Introduction

Tired of sending code snippets back and forth, struggling to debug and collaborate with your team? **Braid** is here to fix that.

It's a real-time collaborative code editor built for developers and teams who want to work seamlessly in the same file, at the same time — regardless of where they are.

---

## ✨ Features

| | |
|---|---|
| 👥 | Multiple users can join a room and edit code together |
| ⚡ | Changes are reflected instantly, in real time |
| 📋 | One-click **Copy Room ID** to invite teammates |
| 🚪 | **Leave Room** button, with join/leave events broadcast live |
| 🎨 | Syntax highlighting for a wide range of languages |
| 🌈 | Choose your own editor theme |
| 💾 | Rejoin a room later and pick up right where you left off |

---

## 🛠 Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Realtime layer:** Socket.io
- **Editor:** CodeMirror
- **Notifications:** React-Toastify

---

## ✅ Prerequisites

<details>
<summary><strong>🐳 Running via Docker</strong></summary>
<br>

- Docker `25.0.4`
- Docker Compose `1.29.2`

</details>

<details>
<summary><strong>💻 Running Locally</strong></summary>
<br>

- Node.js `v20.11.1`
- npm `10.2.4`
- pm2 `5.3.1` → install globally with `npm i -g pm2`

> 💡 **Tip:** I use [nvm](https://github.com/nvm-sh/nvm) to manage Node versions — check their docs if you don't already have it set up.

</details>

---

## 📦 Installation

### Option 1: Running via Docker Image (highly recommended)

```bash
# 1. Install Docker
# https://www.docker.com/

# 2. Pull the image
docker pull sarvagyasharma/braid

# 3. Run it
docker run -p 8000:8000 -p 3000:3000 -p 5000:5000 sarvagyasharma/braid
```

Then:

1. Open `http://localhost:3000`
2. Click **Create New Room** and enter a username
3. Click **Copy Room ID**
4. Open a second browser window / incognito tab at `http://localhost:3000`
5. Paste the same Room ID to join

Both editors are now synced — try it across multiple windows and watch the changes appear live. 🎉

> ⚠️ **WSL2 / Linux users:** prefix the docker commands with `sudo` if needed.

---

### Option 2: Running via building your own Docker Image

```bash
# 1. Clone the repo
git clone https://github.com/sarvagya101/BRAID-Realtime-Collaborative-Code-Editor.git
cd Realtime-Collaborative-Code-Editor

# 2. Update ENV values in the Dockerfile
# 3. Replace the image username in docker-compose.yml

# 4. Build & run
docker-compose up -d
```

Go to `http://localhost:3000`, then follow steps 1–5 from [Option 1](#option-1-running-via-docker-image-highly-recommended) to create and join a room.

---

### Option 3: Running Locally

```bash
# 1. Clone & install
git clone https://github.com/sarvagya101/BRAID-Realtime-Collaborative-Code-Editor.git
cd Realtime-Collaborative-Code-Editor
npm install

# 2. Set up environment variables
cp example.env .env
# fill in the required credentials

# 3. Start the client
npm start

# 4. In a separate terminal, start the server
npm run server:dev
# — or —
pm2 start server.js
```

Go to `http://localhost:3000`, then follow steps 1–5 from [Option 1](#option-1-running-via-docker-image-highly-recommended) to create and join a room.

> 🛑 To stop: `Ctrl+C`, or `pm2 stop server.js` if you started it with pm2.

---

## 🗺 Roadmap

- [x] Syntax highlighting for multiple languages
- [x] Support for multiple editor themes
- [x] Persist last-used theme & language in local storage
- [x] Accept/reject new users trying to join a room
- [ ] Voice & video chat inside the editor
- [ ] Local code file uploading

---

## 🤝 Contributing

Contributions are always welcome!

```bash
# 1. Fork this repository, then clone your fork
git clone https://github.com/sarvagya101/BRAID-Realtime-Collaborative-Code-Editor.git
cd Realtime-Collaborative-Code-Editor

# 2. Create a new branch
git checkout -b your-branch-name

# 3. Make your changes, then commit & push
git add .
git commit -m "your commit message"
git push origin your-branch-name
```

Finally, open a pull request from your fork. 🙌

> Please work on your own branch when contributing.

---

## 👤 About the Author

<div align="center">

**Sarvagya Sharma**
B.Tech CSE student at Delhi Technological University

Passionate about coding, and always eager to build things that help people work better together.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?logo=linkedin&logoColor=white&style=flat-square)](https://www.linkedin.com/in/sarvagya-sharma-643946377/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?logo=github&logoColor=white&style=flat-square)](https://www.github.com/sarvagya101/)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?logo=gmail&logoColor=white&style=flat-square)](mailto:sarvagya101@gmail.com)

</div>
