"use client";
import React, { useState } from 'react';

export default function LandingPage() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="bg-[#FFFDF9] min-h-screen text-[#3A1F1F] font-sans relative overflow-x-hidden selection:bg-[#FF8F00] selection:text-white">
      
      {/* ==========================================================
          1. TEMPLE EMBROIDERY CORNER MOTIFS (Pure SVG Artwork)
         ========================================================== */}
      {/* Top-Left Corner Decoration */}
      <div className="absolute top-0 left-0 w-32 h-32 text-[#7A1F1F]/20 pointer-events-none z-10 hidden sm:block">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M0,0 L40,0 C40,20 20,40 0,40 Z" fill="currentColor" fillOpacity="0.03" />
          <path d="M0,10 C25,10 25,25 10,25" />
          <path d="M10,0 C10,25 25,25 25,10" />
          <circle cx="15" cy="15" r="3" fill="currentColor" />
          <path d="M0,30 Q30,30 30,0" strokeWidth="0.75" strokeDasharray="2,2" />
        </svg>
      </div>

      {/* Top-Right Corner Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 text-[#7A1F1F]/20 pointer-events-none z-10 hidden sm:block">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M100,0 L60,0 C60,20 80,40 100,40 Z" fill="currentColor" fillOpacity="0.03" />
          <path d="M100,10 C75,10 75,25 90,25" />
          <path d="M90,0 C90,25 75,25 75,10" />
          <circle cx="85" cy="15" r="3" fill="currentColor" />
          <path d="M100,30 Q70,30 70,0" strokeWidth="0.75" strokeDasharray="2,2" />
        </svg>
      </div>

      {/* Tailwind Custom Keyframes Injection for Halo & Float */}
      <style jsx global>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: subtle-float 4s ease-in-out infinite;
        }
        .animate-halo {
          animation: slow-spin 25s linear infinite;
        }
      `}</style>

      {/* ==========================================================
          2. HEADER / NAVBAR
         ========================================================== */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-20">
        <div className="flex items-center gap-3">
          {/* Brand Logo Display */}
          <span className="text-2xl font-black text-[#7A1F1F] tracking-tight font-serif flex items-center gap-2">
             Manvi
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5C3A3A]">
          <a href="#features" className="hover:text-[#FF8F00] transition">Features</a>
          <a href="#about" className="hover:text-[#FF8F00] transition">Sacred Offerings</a>
          <a href="#cta" className="hover:text-[#FF8F00] transition">Join Community</a>
        </nav>
        <a href="#login-block" className="border border-[#7A1F1F]/30 text-[#7A1F1F] px-5 py-2 rounded-full font-medium hover:bg-[#7A1F1F]/5 transition text-sm">
          Access Portal
        </a>
      </header>

      {/* ==========================================================
          3. HERO SPLIT-SCREEN LAYOUT
         ========================================================== */}
      <main className="max-w-7xl mx-auto px-6 pt-8 pb-20 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: ANIMATED LOGO & CONTENT */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Logo Container with Halo and Float effects */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center mb-4">
              {/* Backside Glowing Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8F00] to-[#D4AF37] rounded-full blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Sacred Rotating Radiance Halo */}
              <svg className="absolute w-full h-full text-[#D4AF37]/40 animate-halo" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1" strokeDasharray="3, 3" fill="none" />
                <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10, 5" fill="none" />
              </svg>
              
              {/* Central Floating Logo Graphics */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-[#7A1F1F] to-[#5C3A3A] rounded-full flex items-center justify-center shadow-xl border-2 border-[#D4AF37] animate-float">
                <img 
                  src="/images/manvi-logo.png" 
                  alt="Manvi Sacred Emblem" 
                  className="w-16 h-16 object-contain filter drop-shadow"
                  onError={(e) => {
                    // Fallback visual gracefully rendering if local file asset is missing
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      const fallback = document.createElement('span');
                      fallback.className = 'text-4xl';
                      fallback.innerText = '🪔';
                      e.currentTarget.parentElement.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>

            {/* Typography Content */}
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 bg-[#FF8F00]/10 text-[#FF8F00] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#FF8F00]/20">
                 Your Daily Spiritual Companion
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#3A1F1F] leading-tight">
                Your Spiritual World <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8F00] to-[#7A1F1F]">
                  One Tap Away
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#5C3A3A] max-w-xl leading-relaxed font-light">
                Discover historical temples, streamline authentic puja arrangements, acquire certified samagri, and orchestrate sacred family pilgrimage itineraries.
              </p>
            </div>

            {/* Feature Checkmarks */}
            <div className="grid grid-cols-2 gap-3 max-w-md pt-2 color-[#3A1F1F] text-sm font-medium">
              {[
                " Temple Discovery", " Online Puja Booking", 
                " Authentic Samagri", " Organized Tirth Yatras"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-medium text-[#3A1F1F]">
                  <span className="text-[#FF8F00]">✓</span> {item}
                </div>
              ))}
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#features" className="bg-[#7A1F1F] text-white px-8 py-3.5 rounded-xl font-medium text-center shadow-lg hover:bg-[#5C3A3A] transition border border-[#D4AF37]/30">
                Explore Divine Features
              </a>
              <a href="#about" className="border border-[#7A1F1F]/20 text-[#7A1F1F] px-8 py-3.5 rounded-xl font-medium text-center bg-white/50 backdrop-blur-sm hover:bg-[#7A1F1F]/5 transition">
                Learn More
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: MODERN GLASSMORPHISM LOGIN CARD */}
          <div id="login-block" className="lg:col-span-5 relative">
            {/* Background Saffron Light Orb */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#FF8F00]/10 to-[#D4AF37]/10 rounded-3xl blur-xl opacity-70 -z-10"></div>
            
            <div className="bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-xl border border-white/60 relative">
              
              {/* Subtly Decorated Header inside Card */}
              <div className="text-center space-y-2 mb-8">
                <span className="inline-flex items-center">
                 <img
                   src="/images/Manvi-logo.png"
                   alt="Manvi Logo"
                    className="w-10 h-10 object-contain"
                 />
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#3A1F1F]">Welcome Back</h3>
                <p className="text-xs text-[#5C3A3A]">Enter your details to synchronize your sacred journey records</p>
              </div>

              {/* Login Action Form */}
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#5C3A3A]">Mobile Number</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-sm text-[#7A1F1F]/60">+91</span>
                    <input 
                      type="tel" 
                      placeholder="Enter 10-digit number" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      className="w-full pl-14 pr-4 py-3 bg-[#FFFDF9]/60 border border-[#7A1F1F]/20 rounded-xl focus:outline-none focus:border-[#FF8F00] transition text-sm placeholder-[#7A1F1F]/30"
                      maxLength={10}
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#5C3A3A]">Secure Password</label>
                    <a href="#" className="text-xs text-[#FF8F00] hover:underline">Forgot?</a>
                  </div>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FFFDF9]/60 border border-[#7A1F1F]/20 rounded-xl focus:outline-none focus:border-[#FF8F00] transition text-sm placeholder-[#7A1F1F]/30"
                    required 
                  />
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-[#7A1F1F] to-[#5C3A3A] text-white font-medium py-3.5 rounded-xl shadow-md hover:brightness-110 transition mt-2 border border-[#D4AF37]/30 text-sm">
                  Sign In Authentically
                </button>
              </form>

              {/* Decorative Text Divider */}
              <div className="relative my-6 text-center">
                <hr className="border-[#7A1F1F]/10" />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFDF9] px-3 text-xs text-[#7A1F1F]/40 font-serif">🪔 or 🪔</span>
              </div>

              {/* Third-Party Authentication Block */}
              <button className="w-full flex items-center justify-center gap-3 bg-white border border-[#7A1F1F]/15 hover:bg-[#FFFDF9] py-3 rounded-xl shadow-sm text-sm font-medium transition text-[#3A1F1F]">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.227C18.297 1.844 15.408 1 12.24 1 5.466 1 0 6.466 0 13.24s5.466 12.24 12.24 12.24c7.076 0 11.79-4.984 11.79-12 0-.811-.087-1.43-.195-2.195H12.24Z"/>
                </svg>
                Continue with Google
              </button>

              <div className="text-center mt-6">
                <p className="text-xs text-[#5C3A3A]">
                  New to Manvi?{' '}
                  <a href="#" className="text-[#FF8F00] font-semibold hover:underline">Create a Sacred Profile</a>
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* ==========================================================
          4. SACRED DEVOTIONAL FEATURES
         ========================================================== */}
      <section id="features" className="bg-[#FDF9F2] py-20 border-y border-[#7A1F1F]/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold text-[#FF8F00] uppercase tracking-widest">Designed for Devotees</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#3A1F1F]">Comprehensive Devotional Echoes</h2>
            <div className="w-16 h-0.5 bg-[#FF8F00] mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#7A1F1F]/5 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-[#FF8F00]/10 rounded-xl flex items-center justify-center text-[#FF8F00] text-2xl mb-6 group-hover:scale-110 transition-transform">🛕</div>
              <h3 className="text-lg font-bold text-[#3A1F1F] mb-3 font-serif">Temple Finder</h3>
              <p className="text-[#5C3A3A] text-sm leading-relaxed">Discover historical and local temples, precise custom timing guidelines, daily updates on aartis, and regional connectivity tools.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#7A1F1F]/5 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-[#7A1F1F]/10 rounded-xl flex items-center justify-center text-[#7A1F1F] text-2xl mb-6 group-hover:scale-110 transition-transform">🙏</div>
              <h3 className="text-lg font-bold text-[#3A1F1F] mb-3 font-serif">Puja Bookings</h3>
              <p className="text-[#5C3A3A] text-sm leading-relaxed">Schedule digital, festival-specific, or personalized ancestral pujas across ancient geographic coordinates with verified pandits.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#7A1F1F]/5 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center text-[#B08F26] text-2xl mb-6 group-hover:scale-110 transition-transform">🪔</div>
              <h3 className="text-lg font-bold text-[#3A1F1F] mb-3 font-serif">Puja Samagri</h3>
              <p className="text-[#5C3A3A] text-sm leading-relaxed">Procure authentic, lab-certified materials, specialized festive bundles, and organic elements direct to your doorstep.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#7A1F1F]/5 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-[#7A1F1F]/10 rounded-xl flex items-center justify-center text-[#7A1F1F] text-2xl mb-6 group-hover:scale-110 transition-transform">🚩</div>
              <h3 className="text-lg font-bold text-[#3A1F1F] mb-3 font-serif">Tirth Yatra Planners</h3>
              <p className="text-[#5C3A3A] text-sm leading-relaxed">Coordinate comprehensive all-inclusive pilgrimage journeys across sacred circuits with safety and senior citizen support systems.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#7A1F1F]/5 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-[#FF8F00]/10 rounded-xl flex items-center justify-center text-[#FF8F00] text-2xl mb-6 group-hover:scale-110 transition-transform">📿</div>
              <h3 className="text-lg font-bold text-[#3A1F1F] mb-3 font-serif">Daily Panchang</h3>
              <p className="text-[#5C3A3A] text-sm leading-relaxed">Gain precise insight into localized Muhurats, Rashifal charts, ongoing Tithis, and auspicious daily hours.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#7A1F1F]/5 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center text-[#B08F26] text-2xl mb-6 group-hover:scale-110 transition-transform">❤️</div>
              <h3 className="text-lg font-bold text-[#3A1F1F] mb-3 font-serif">Direct Temple Charity</h3>
              <p className="text-[#5C3A3A] text-sm leading-relaxed">Channel securely processed, transparent financial donations directly to established ancient trusts and dynamic temple projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          5. ROOT COMMUNITY CALL TO ACTION (CTA)
         ========================================================== */}
      <section id="cta" className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-br from-[#7A1F1F] to-[#4A1212] rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-[#D4AF37]/20 relative overflow-hidden">
          
          {/* Subtle Backside Mandala Accent */}
          <div className="absolute opacity-5 -right-10 -bottom-10 text-white w-64 h-64 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="40" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Begin Your Spiritual Journey Today</h2>
          <p className="text-[#FDF9F2]/80 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Join thousands of devoted families navigating their spiritual milestones dynamically through Manvi.
          </p>
          
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-5 py-3.5 rounded-xl text-slate-900 focus:outline-none text-sm bg-white"
              required 
            />
            <button type="submit" className="bg-[#FF8F00] text-white font-medium px-6 py-3.5 rounded-xl hover:bg-[#E07B00] transition text-sm shadow-md border-b-2 border-orange-700">
              Get Started Free
            </button>
          </form>
        </div>
      </section>

      {/* ==========================================================
          6. FOOTER
         ========================================================== */}
      <footer id="about" className="border-t border-[#7A1F1F]/10 max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row justify-between items-center text-xs text-[#5C3A3A] gap-4">
        <div className="text-center sm:text-left space-y-1">
          <p className="font-serif font-bold text-[#3A1F1F] text-sm">🕉️ Manvi</p>
          <p className="font-light">Connecting modern households with timeless paths, structures, and systems.</p>
        </div>
        <div className="flex gap-6 font-medium">
          <a href="#" className="hover:text-[#FF8F00]">Terms of Use</a>
          <a href="#" className="hover:text-[#FF8F00]">Privacy Policy</a>
          <a href="#" className="hover:text-[#FF8F00]">Devotional Support</a>
        </div>
        <p className="text-[#7A1F1F]/40 font-mono">&copy; 2026 Manvi. Built beautifully.</p>
      </footer>

    </div>
  );
}