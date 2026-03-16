import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useApp } from '../contexts/AppContext';
import { TrendingUp, Activity, Users } from 'lucide-react';

const SENTIMENT_COLORS = {
  positive: '#10b981',
  neutral: '#6b7280',
  negative: '#ef4444',
};

const TOPIC_COLORS = ['#06b6d4', '#8b5cf6', '#f59e0b', '#10b981', '#ef4444', '#3b82f6', '#ec4899'];

const CustomTooltip = ({ active, payload, isDark }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className={`px-3 py-2 rounded-lg text-xs shadow-lg ${isDark ? 'bg-slate-700 text-slate-100' : 'bg-white text-gray-800 border border-gray-100'}`}>
        <p className="font-semibold">{payload[0].name}</p>
        <p>{payload[0].value}{payload[0].name === 'Articles' ? '' : '%'}</p>
      </div>
    );
  }
  return null;
};

export function SentimentPanel() {
  const { t, isDark } = useApp();

  // Using aggregated sentiment data - in a real app, this would come from your analytics backend
  const sentimentData = [
    { name: t.positive, value: 45, color: SENTIMENT_COLORS.positive },
    { name: t.neutral, value: 35, color: SENTIMENT_COLORS.neutral },
    { name: t.negative, value: 20, color: SENTIMENT_COLORS.negative },
  ];

  const trendingTopics = [
    { topic: 'AI', count: 42, color: TOPIC_COLORS[0] },
    { topic: 'Tesla', count: 35, color: TOPIC_COLORS[1] },
    { topic: 'Bitcoin', count: 28, color: TOPIC_COLORS[2] },
    { topic: 'NASA', count: 24, color: TOPIC_COLORS[3] },
    { topic: 'Cybersecurity', count: 19, color: TOPIC_COLORS[4] },
    { topic: 'iCloud', count: 15, color: TOPIC_COLORS[5] },
    { topic: 'Quantum', count: 12, color: TOPIC_COLORS[6] },
  ];

  const engagementData = [
    { name: 'Mon', views: 1200, comments: 85 },
    { name: 'Tue', views: 1900, comments: 120 },
    { name: 'Wed', views: 1400, comments: 95 },
    { name: 'Thu', views: 2200, comments: 160 },
    { name: 'Fri', views: 1800, comments: 130 },
    { name: 'Sat', views: 2800, comments: 200 },
    { name: 'Sun', views: 3100, comments: 240 },
  ];

  const total = sentimentData.reduce((s, d) => s + d.value, 0);
  const textColor = isDark ? '#e2e8f0' : '#374151';
  const mutedColor = isDark ? '#64748b' : '#9ca3af';

  const panelBase = isDark
    ? 'bg-slate-800/80 border-slate-700/50 backdrop-blur-md'
    : 'bg-white/80 border-white/60 backdrop-blur-md';

  return (
    <div className="space-y-4 w-full">
      {/* Sentiment Distribution */}
      <div className={`rounded-2xl border shadow-lg p-4 ${panelBase}`}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
            <Activity size={13} className="text-white" />
          </div>
          <h3 className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-gray-800'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t.sentimentDistribution}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <ResponsiveContainer width="50%" height={110}>
            <PieChart>
              <Pie
                data={sentimentData}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={50}
                paddingAngle={3}
                dataKey="value"
              >
                {sentimentData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} strokeWidth={0} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip isDark={isDark} />} />
            </PieChart>
          </ResponsiveContainer>

          <div className="flex-1 space-y-2">
            {sentimentData.map(d => (
              <div key={d.name} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
                <span className="text-xs flex-1 truncate" style={{ color: textColor }}>{d.name}</span>
                <span className="text-xs font-semibold" style={{ color: d.color }}>
                  {Math.round(d.value / total * 100)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Topics */}
      <div className={`rounded-2xl border shadow-lg p-4 ${panelBase}`}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
            <TrendingUp size={13} className="text-white" />
          </div>
          <h3 className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-gray-800'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t.trendingTopics}
          </h3>
        </div>

        <div className="space-y-2">
          {trendingTopics.map((topic, i) => (
            <div key={topic.topic} className="flex items-center gap-2">
              <span className="text-xs font-bold w-4" style={{ color: mutedColor }}>{i + 1}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-xs font-medium" style={{ color: textColor }}>{topic.topic}</span>
                  <span className="text-xs" style={{ color: mutedColor }}>{topic.count}k</span>
                </div>
                <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-gray-100'}`}>
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${(topic.count / 42) * 100}%`, background: topic.color }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audience Engagement */}
      <div className={`rounded-2xl border shadow-lg p-4 ${panelBase}`}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
            <Users size={13} className="text-white" />
          </div>
          <h3 className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-gray-800'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t.audienceEngagement}
          </h3>
        </div>

        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={engagementData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <XAxis dataKey="name" tick={{ fill: mutedColor, fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: mutedColor, fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip isDark={isDark} />} />
            <Bar dataKey="views" fill="#06b6d4" radius={[3, 3, 0, 0]} name="Views" />
            <Bar dataKey="comments" fill="#8b5cf6" radius={[3, 3, 0, 0]} name="Comments" />
          </BarChart>
        </ResponsiveContainer>

        <div className="flex items-center gap-4 mt-1">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-cyan-500" />
            <span className="text-xs" style={{ color: mutedColor }}>Views</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-violet-500" />
            <span className="text-xs" style={{ color: mutedColor }}>Comments</span>
          </div>
        </div>
      </div>

      {/* Live Stats */}
      <div className={`rounded-2xl border shadow-lg p-4 ${panelBase}`}>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-xs font-semibold text-emerald-400">LIVE</span>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-2">
          {[
            { label: 'Articles Today', value: '247', color: 'text-cyan-500' },
            { label: 'Trending Now', value: '12', color: 'text-violet-500' },
            { label: 'Active Readers', value: '8.4k', color: 'text-emerald-500' },
            { label: 'Avg. Sentiment', value: '+0.42', color: 'text-amber-500' },
          ].map(stat => (
            <div key={stat.label} className={`rounded-xl p-2.5 ${isDark ? 'bg-slate-700/50' : 'bg-gray-50/80'}`}>
              <div className={`text-base font-bold ${stat.color}`} style={{ fontFamily: 'Poppins, sans-serif' }}>{stat.value}</div>
              <div className="text-xs mt-0.5" style={{ color: mutedColor }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
