# ZeroRound

<p align="center">
  <img src="public/logo.png" alt="ZeroRound Logo" width="100" />
</p>

<h3 align="center">AI-Powered Interview Preparation Platform</h3>

<p align="center">
  Transform interview anxiety into confidence with personalized AI interview practice
</p>

## 🚀 Overview

ZeroRound is an innovative platform designed to help students and job seekers prepare for interviews with AI-powered practice sessions. The platform allows users to create custom interview scenarios, practice with AI interviewers, and receive detailed feedback to improve their performance.

### Key Features

- 🤖 **AI-Powered Interviews**: Experience realistic interviews conducted by advanced AI
- 🎯 **Personalized Practice**: Create custom interviews tailored to specific companies, roles, or skills
- 📝 **Detailed Feedback**: Receive comprehensive analysis of your performance with actionable suggestions
- 💬 **Conversational Skills Training**: Improve your ability to articulate thoughts clearly under pressure
- 📊 **Performance Tracking**: Monitor your progress and improvement over time
- 🔄 **24/7 Availability**: Practice whenever and wherever you want

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Firebase Functions
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **AI/ML**: Google Gemini AI via AI SDK
- **Voice/Speech**: Vapi AI
- **Animations**: Framer Motion, OGL
- **Forms**: React Hook Form, Zod
- **UI Components**: Radix UI, Lucide React
- **Deployment**: Vercel

## 🚦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Firebase account
- Google AI API key
- Vapi AI account

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ZeroRound.git
cd ZeroRound
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Environment setup:

Create a `.env.local` file in the root directory with the following variables:

```
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# Firebase Admin (for server)
FIREBASE_ADMIN_PROJECT_ID=your_firebase_project_id
FIREBASE_ADMIN_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_ADMIN_PRIVATE_KEY=your_firebase_private_key

# Google AI
GOOGLE_AI_API_KEY=your_google_ai_api_key

# Vapi AI
NEXT_PUBLIC_VAPI_API_KEY=your_vapi_api_key
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
ZeroRound/
├── app/                    # Next.js app router
│   ├── (auth)/             # Authentication routes
│   ├── (root)/             # Protected routes
│   ├── api/                # API routes
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── Animations/         # Animation components
│   ├── interview/          # Interview-related components
│   ├── landing/            # Landing page components
│   ├── shared/             # Shared components
│   └── ui/                 # UI components
├── context/                # React context providers
├── firebase/               # Firebase configuration
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and actions
│   ├── actions/            # Server actions
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
└── types/                  # TypeScript type definitions
```

## 🔍 Key Features Explained

### Custom Interview Creation

Users can create personalized interview scenarios by:
- Specifying job role, experience level, and tech stack
- Selecting focus areas (behavioral vs. technical)
- Adding custom questions or using AI-generated ones

### AI-Powered Interviews

The platform uses advanced AI to:
- Conduct realistic interview conversations
- Adapt questions based on user responses
- Provide a natural interview experience

### Comprehensive Feedback

After each interview, users receive:
- Overall performance score
- Breakdown by categories (communication, technical knowledge, etc.)
- Identified strengths and areas for improvement
- Actionable suggestions for enhancement

## 💼 Use Cases

- **Students**: Practice for internship and entry-level job interviews
- **Job Seekers**: Prepare for specific companies and roles
- **Career Changers**: Build confidence in interviewing for new industries
- **Professionals**: Refine skills for promotion interviews

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Author

- Biraj Sanghai - [Github](https://github.com/birajsanghai) - [Email](mailto:sanghaibiraj@gmail.com)

---

<p align="center">
  Made with ❤️
</p>