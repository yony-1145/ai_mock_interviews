
# 🧠 AI Mock Interview Platform

AI Mock Interview Platformは、ユーザーがAIエージェントと模擬面接を行えるNext.jsアプリケーションです。  
Googleまたはメールでログインし、技術スタック・職種・レベルに応じた質問を生成・練習・保存できます。

This is a Next.js-based web application that allows users to practice mock interviews with an AI-powered assistant.

---

## 🛠 Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS + Shadcn/ui**
- **Firebase (Auth, Firestore)**
- **Vercel**
- **ai-sdk + Gemini API**

---

## ✨ Features

- Google/Emailによる認証
- 技術スタックに基づいた模擬質問の生成
- AIチャットボットによる質問応答
- 面接履歴の保存と再閲覧
- レスポンシブ対応

---

## 🔗 Links

- **Live App**: [https://ai-mock-interviews-zeta-eight.vercel.app/product](https://ai-mock-interviews-zeta-eight.vercel.app/product)
- **GitHub Repo**: [https://github.com/yony-1145/ai_mock_interviews](https://github.com/yony-1145/ai_mock_interviews)

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/yony-1145/ai_mock_interviews.git
cd ai_mock_interviews
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file and add the following:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

OPENAI_API_KEY=your_openai_key
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## 📌 Notes

- FirebaseやAI APIのキーは `.env.local` に設定してください。
- デプロイにはVercelを使用しています。

---

## 📄 License

MIT
