"use client"

import { SignIn } from "@clerk/clerk-react"
import { Calendar, Sparkles } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl animate-bounce delay-700"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo/Brand Section */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/30 border border-cyan-400/30">
              <Calendar className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-2">
            Smart Classroom
          </h1>
          <p className="text-slate-300 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            AI-Powered Scheduling System
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </p>
        </div>

        {/* Clerk Sign In Component */}
        <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-cyan-500/10 p-2">
          <SignIn 
            appearance={{
              elements: {
                formButtonPrimary: 
                  "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25",
                card: "bg-transparent shadow-none",
                headerTitle: "text-white",
                headerSubtitle: "text-slate-300",
                socialButtonsBlockButton: 
                  "bg-slate-700/50 border border-slate-600/50 text-white hover:bg-slate-600/50",
                socialButtonsBlockButtonText: "text-white",
                formFieldLabel: "text-slate-300",
                formFieldInput: 
                  "bg-slate-800/50 border-slate-600/50 text-white placeholder-slate-500 focus:border-cyan-500",
                footerActionLink: "text-cyan-400 hover:text-cyan-300",
                identityPreviewText: "text-white",
                identityPreviewEditButton: "text-cyan-400",
                formFieldInputShowPasswordButton: "text-slate-400",
                dividerLine: "bg-slate-600",
                dividerText: "text-slate-400",
                footer: "hidden",
                phoneInputBox: "hidden",
                formFieldInputGroup: "bg-slate-800/50",
              },
              variables: {
                colorPrimary: "#06b6d4",
                colorBackground: "transparent",
                colorText: "white",
                colorTextSecondary: "#cbd5e1",
                colorInputBackground: "rgba(30, 41, 59, 0.5)",
                colorInputText: "white",
                borderRadius: "0.75rem",
              },
            }}
            routing="path"
            path="/login"
            signUpUrl="/signup"
            forceRedirectUrl="/"
          />
        </div>

        {/* Footer */}
        <p className="mt-8 text-slate-500 text-sm">
          © 2026 Smart Classroom Scheduler. All rights reserved.
        </p>
      </div>
    </div>
  )
}
