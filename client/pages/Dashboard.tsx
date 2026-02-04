import { useState } from "react";
import {
  Brain,
  BookOpen,
  TrendingUp,
  Zap,
  Plus,
  Clock,
  Target,
  Trophy,
  ChevronRight,
  MoreVertical,
} from "lucide-react";
import Layout from "@/components/Layout";

export default function Dashboard() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  // Mock Data
  const stats = [
    { icon: BookOpen, label: "Total Notes", value: "42", change: "+12%" },
    { icon: Brain, label: "Study Streak", value: "7 days", change: "+2 days" },
    { icon: TrendingUp, label: "Avg. Score", value: "92%", change: "+5%" },
    { icon: Zap, label: "Focus Time", value: "12h 30m", change: "+1h 15m" },
  ];

  const subjects = [
    {
      id: 1,
      name: "Mathematics",
      color: "from-blue-500 to-cyan-400",
      progress: 75,
      notes: 18,
      lastUpdate: "2 hours ago",
    },
    {
      id: 2,
      name: "Physics",
      color: "from-purple-500 to-pink-400",
      progress: 62,
      notes: 12,
      lastUpdate: "1 day ago",
    },
    {
      id: 3,
      name: "Chemistry",
      color: "from-green-500 to-emerald-400",
      progress: 88,
      notes: 15,
      lastUpdate: "3 hours ago",
    },
    {
      id: 4,
      name: "Biology",
      color: "from-orange-500 to-rose-400",
      progress: 55,
      notes: 8,
      lastUpdate: "5 days ago",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      title: "Created note: Photosynthesis Basics",
      subject: "Biology",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Completed lecture recording: Quantum Mechanics",
      subject: "Physics",
      time: "5 hours ago",
    },
    {
      id: 3,
      title: "Generated summary: Integral Calculus",
      subject: "Mathematics",
      time: "1 day ago",
    },
    {
      id: 4,
      title: "Unlocked achievement: 100 notes milestone",
      subject: "General",
      time: "2 days ago",
    },
  ];

  return (
    <Layout hasSidebar={true} showAuthButtons={false}>
      <div className="p-6 lg:p-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">
            Welcome back, Student! 👋
          </h1>
          <p className="text-foreground/70">
            Here's your study overview for today
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="glass rounded-xl p-6 card-hover"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-green-600">
                    {stat.change}
                  </span>
                </div>
                <p className="text-foreground/70 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Subjects Grid */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Your Subjects</h2>
              <button className="btn-primary text-sm gap-2 inline-flex items-center">
                <Plus className="w-4 h-4" />
                Add Subject
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjects.map((subject, idx) => (
                <div
                  key={subject.id}
                  className={`glass rounded-xl p-6 card-hover cursor-pointer transition-all ${selectedSubject === subject.name ? "ring-2 ring-primary" : ""}`}
                  onClick={() => setSelectedSubject(subject.name)}
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`px-3 py-1 rounded-lg bg-gradient-to-r ${subject.color} text-white text-xs font-semibold`}
                    >
                      {subject.name}
                    </div>
                    <button className="p-1 rounded-lg hover:bg-foreground/10 transition-colors">
                      <MoreVertical className="w-4 h-4 text-foreground/60" />
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-foreground/70">
                          Progress
                        </span>
                        <span className="text-xs font-semibold">
                          {subject.progress}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${subject.color}`}
                          style={{ width: `${subject.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-foreground/60">
                    <span>{subject.notes} notes</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {subject.lastUpdate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Quick Stats */}
          <div className="space-y-6">
            {/* Study Goals */}
            <div className="glass rounded-xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">Today's Goal</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-foreground/70">
                      Study Time
                    </span>
                    <span className="text-sm font-semibold">45/60 min</span>
                  </div>
                  <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-primary to-secondary"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-foreground/70">
                      Notes Created
                    </span>
                    <span className="text-sm font-semibold">2/5</span>
                  </div>
                  <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
                    <div className="h-full w-2/5 bg-gradient-to-r from-primary to-secondary"></div>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 btn-primary text-sm">
                Continue Studying
              </button>
            </div>

            {/* Achievements */}
            <div className="glass rounded-xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">Achievements</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20">
                  <div>
                    <p className="text-sm font-semibold">🔥 7-Day Streak</p>
                    <p className="text-xs text-foreground/60">
                      3 more days to go
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                  <div>
                    <p className="text-sm font-semibold">⭐ Perfect Study</p>
                    <p className="text-xs text-foreground/60">
                      100% focus achieved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
          <div className="glass rounded-xl overflow-hidden">
            <div className="divide-y divide-border/50">
              {recentActivity.map((activity, idx) => (
                <div
                  key={activity.id}
                  className="p-6 flex items-center justify-between hover:bg-foreground/5 transition-colors"
                  style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
                >
                  <div className="flex-1">
                    <p className="font-semibold mb-1">{activity.title}</p>
                    <p className="text-sm text-foreground/60">
                      {activity.subject} • {activity.time}
                    </p>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-foreground/10 transition-colors">
                    <ChevronRight className="w-5 h-5 text-foreground/60" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
