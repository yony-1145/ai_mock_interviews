
# 🧠 AI Mock Interview Platform

AI を活用したモック面接プラットフォームです。  
Next.js、TypeScript、Tailwind CSS、Firebase で構築されています。 
エンジニアの就職・転職活動に役立つように設計されています。

This is a Next.js-based web application that allows users to practice mock interviews with an AI-powered assistant.

- **Live App**: [https://ai-mock-interviews-zeta-eight.vercel.app/product](https://ai-mock-interviews-zeta-eight.vercel.app/product)
- **GitHub Repo**: [https://github.com/yony-1145/ai_mock_interviews](https://github.com/yony-1145/ai_mock_interviews)

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

## 🏗️ アーキテクチャ

**画像準備中**

---

## ✨ 主な機能

- Google/Emailによる認証（Firebase Auth）
- 技術スタックに基づいた模擬質問の生成
- Text to Speechを使用した面接セッション（Vapi）
- 作成した面接の保存（Firestore）
- フィードバックの作成（Gemini API）
- フィードバックの記録と表示
- AIチャットボットによる質問応答
- レスポンシブUI対応（スマートフォン対応）

---

## 📦 ディレクトリ構成（抜粋）

```
ai_mock_interviews-main/
├── src/
│   ├── app/              # Next.js のルーティング構成
│   ├── components/       # UI コンポーネント
│   ├── lib/              # 各種ロジック（認証、FireStore 操作など）
│   ├── constants/        # 定数定義
│   ├── types/            # TypeScript 型定義
├── public/
├── styles/
├── .env.local.example    # 環境変数の例
├── next.config.js
├── tailwind.config.ts
├── README.md
```

---

## ⚙️ 環境構築手順

1. **リポジトリをクローン**

```bash
git clone https://github.com/your-username/ai-mock-interviews.git
cd ai-mock-interviews
```

2. **依存パッケージのインストール**

```bash
npm install
```

3. **環境変数ファイルの作成**

`.env.local` をプロジェクトルートに作成し、以下を設定してください。

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
```

4. **開発サーバーを起動**

```bash
npm run dev
```

http://localhost:3000 にアクセスして動作を確認できます。

---

## 🛠 今後の開発予定

- [ ] 日本語対応（使用APIの変更　Vapi→Azure Speech Service）**開発中**
- [ ] フィードバックページのUI強化

---

学習者・転職希望者の不安を解消し、自信を持って面接に臨めるようサポートするためのツールです。ぜひご活用ください！