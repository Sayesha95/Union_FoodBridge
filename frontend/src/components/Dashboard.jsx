import React from 'react';
import { Utensils, Leaf, Scale, Building2, ShieldCheck, Clock, ArrowUpRight, TrendingUp } from 'lucide-react';

export default function Dashboard({ metrics, onExploreListings }) {
  const stats = [
    {
      title: 'Meals Rescued',
      value: metrics?.total_meals_rescued ? metrics.total_meals_rescued.toLocaleString() : '15,420',
      change: '+14% this week',
      icon: Utensils,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20'
    },
    {
      title: 'CO₂ Avoided',
      value: metrics?.total_co2_avoided_kg ? `${(metrics.total_co2_avoided_kg / 1000).toFixed(1)}t` : '38.5t',
      subtext: '2.5 kg CO₂ / meal',
      change: 'Landfill Methane Mitigated',
      icon: Leaf,
      color: 'text-green-400',
      bg: 'bg-green-500/10 border-green-500/20'
    },
    {
      title: 'Edible Food Diverted',
      value: metrics?.total_food_saved_tonnes ? `${metrics.total_food_saved_tonnes} T` : '4.6 T',
      change: 'Zero Food Waste Goal',
      icon: Scale,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20'
    },
    {
      title: 'Active NGO Partners',
      value: metrics?.active_ngo_partners || 54,
      change: 'Verified Shelters',
      icon: Building2,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20'
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Banner */}
      <div className="relative rounded-2xl glass-panel p-8 overflow-hidden border border-emerald-500/20">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Real-Time Environmental & Civic Impact</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Connecting Surplus Food with <span className="text-emerald-400">Verified Shelters</span> in Real-Time
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            Every rescued meal mitigates 2.5 kg of atmospheric CO₂ while feeding hungry families across Delhi NCR. Powered by AI freshness scoring and cryptographic QR handshakes.
          </p>
          
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreListings}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-600/25 flex items-center space-x-2"
            >
              <span>Explore Active Feed</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex items-center space-x-2 text-xs text-zinc-400 bg-zinc-900/60 px-3.5 py-2 rounded-xl border border-zinc-800">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Average Proximity Match: <strong className="text-white">12.4 Mins</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="glass-panel glass-panel-hover rounded-xl p-5 border border-[#1f2b1f] flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">{stat.title}</span>
                <div className={`p-2 rounded-lg border ${stat.bg}`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>

              <div className="mt-4">
                <div className="font-display font-bold text-3xl text-white tracking-tight">{stat.value}</div>
                <div className="flex items-center space-x-1.5 text-xs text-emerald-400 mt-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{stat.change}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Impact Activity Stream & System Flow Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Stream */}
        <div className="lg:col-span-2 glass-panel rounded-xl p-6 border border-[#1f2b1f]">
          <h3 className="font-display font-semibold text-lg text-white mb-4 flex items-center justify-between">
            <span>Live Redistribution Stream</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </h3>
          <div className="space-y-3">
            {[
              { time: '2 mins ago', donor: 'NSUT Campus Dining Hall', ngo: 'Akshaya Patra Foundation', servings: 180, status: 'QR Verified', type: 'Category A' },
              { time: '14 mins ago', donor: 'Taj Palace Banquet Kitchen', ngo: 'Robin Hood Army Janakpuri', servings: 350, status: 'Auto Split (3 NGOs)', type: 'Category B' },
              { time: '32 mins ago', donor: 'Haldiram Sweets & Kitchen', ngo: 'Feeding India Shelter', servings: 120, status: 'Completed', type: 'Category A' },
              { time: '1 hr ago', donor: 'Bikanervala Sweets Dwarka', ngo: 'Roti Bank Community Kitchen', servings: 90, status: 'Completed', type: 'Category A' }
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between p-3.5 rounded-lg bg-[#111711] border border-zinc-800/80 text-xs hover:border-emerald-500/30 transition-all">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    {activity.servings}
                  </div>
                  <div>
                    <div className="font-medium text-white">{activity.donor} → <span className="text-emerald-400">{activity.ngo}</span></div>
                    <div className="text-zinc-400 text-[11px]">{activity.servings} servings • {activity.time}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-0.5 rounded-md font-semibold text-[10px] ${
                    activity.type === 'Category B' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {activity.type}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-medium">
                    {activity.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blueprint System Architecture Card */}
        <div className="glass-panel rounded-xl p-6 border border-[#1f2b1f] flex flex-col justify-between">
          <div>
            <h3 className="font-display font-semibold text-lg text-white mb-2">System Blueprint</h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              FoodBridge coordinates automated multi-recipient batch splitting, Ola-style contact sharing, and cryptographic QR pickup handshakes.
            </p>

            <div className="space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-center space-x-2 p-2 rounded bg-zinc-900/60 border border-zinc-800">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span><strong>Gemini AI Freshness Score</strong>: Natural language & temperature decay curves</span>
              </div>
              <div className="flex items-center space-x-2 p-2 rounded bg-zinc-900/60 border border-zinc-800">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span><strong>Category A/B Rules</strong>: Cold-chain storage verification</span>
              </div>
              <div className="flex items-center space-x-2 p-2 rounded bg-zinc-900/60 border border-zinc-800">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span><strong>Ola Contact Sharing</strong>: Verified phone connection & call log tracking</span>
              </div>
              <div className="flex items-center space-x-2 p-2 rounded bg-zinc-900/60 border border-zinc-800">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <span><strong>QR Handshake</strong>: Cryptographic token validation at pickup</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-800 text-[11px] text-zinc-500 text-center">
            Cognitive Chaos Hackathon • Microsoft Azure & Gemini AI
          </div>
        </div>
      </div>
    </div>
  );
}
