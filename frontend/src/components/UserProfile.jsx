import { UserButton as ClerkUserButton, useUser } from "@clerk/clerk-react"
import { LogOut, Settings, User } from "lucide-react"

export function UserProfile() {
  const { isSignedIn, user, isLoaded } = useUser()

  if (!isLoaded) {
    return (
      <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-xl animate-pulse">
        <div className="w-10 h-10 bg-slate-600 rounded-full"></div>
        <div className="flex-1">
          <div className="h-4 bg-slate-600 rounded w-24 mb-1"></div>
          <div className="h-3 bg-slate-700 rounded w-32"></div>
        </div>
      </div>
    )
  }

  if (!isSignedIn) {
    return null
  }

  return (
    <div className="flex items-center gap-3 p-3 bg-slate-700/20 backdrop-blur-sm rounded-xl border border-slate-600/30 hover:bg-slate-700/30 transition-all duration-300">
      <ClerkUserButton 
        appearance={{
          elements: {
            avatarBox: "w-10 h-10 ring-2 ring-cyan-500/30 hover:ring-cyan-400/50 transition-all duration-300",
            userButtonPopoverCard: "bg-slate-800/95 backdrop-blur-xl border border-slate-600/50 shadow-2xl",
            userButtonPopoverActionButton: "hover:bg-slate-700/50 text-slate-200",
            userButtonPopoverActionButtonText: "text-slate-200",
            userButtonPopoverActionButtonIcon: "text-slate-400",
            userButtonPopoverFooter: "hidden",
          },
          variables: {
            colorPrimary: "#06b6d4",
          }
        }}
        afterSignOutUrl="/login"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white truncate">
          {user?.firstName || user?.username || "User"}
        </p>
        <p className="text-xs text-slate-400 truncate">
          {user?.primaryEmailAddress?.emailAddress || ""}
        </p>
      </div>
    </div>
  )
}
