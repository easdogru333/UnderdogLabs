import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { ShootingStars } from "@/components/ui/shooting-stars";

const XLogo = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24">
    <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function LandingPage() {
  const [platform, setPlatform] = useState<'twitter' | 'linkedin'>('twitter');

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const openCalendar = () => {
    const cal = window.Cal;
    if (cal) {
      cal("modal", {
        calLink: "theunderdoglabs/30min",
        config: {
          layout: "month_view",
          theme: "dark"
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-serif relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="stars absolute inset-0" />
        <ShootingStars
          starColor="#f97316"
          trailColor="#f9731666"
          minSpeed={25}
          maxSpeed={50}
          minDelay={500}
          maxDelay={1500}
          starWidth={20}
          starHeight={2}
        />
        <ShootingStars
          starColor="#fb923c"
          trailColor="#fb923c66"
          minSpeed={30}
          maxSpeed={60}
          minDelay={700}
          maxDelay={2000}
          starWidth={15}
          starHeight={2}
        />
        <ShootingStars
          starColor="#fdba74"
          trailColor="#fdba7466"
          minSpeed={20}
          maxSpeed={45}
          minDelay={300}
          maxDelay={1200}
          starWidth={25}
          starHeight={2}
        />
      </div>

      <style jsx>{`
        .stars {
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 5s ease-in-out infinite;
          opacity: 0.5;
        }

        @keyframes twinkle {
          0% { opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { opacity: 0.5; }
        }
      `}</style>

      {/* Rest of your content with increased z-index */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
          <div className="w-full px-8 py-4">
            <div className="flex justify-between items-center">
              <span className="text-orange-500 font-bold">TheUnderdogLabs</span>
              <motion.button
                className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openCalendar}
              >
                Work with us
              </motion.button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center min-h-screen max-w-4xl mx-auto text-center p-8 pt-20">
          {/* Hero Section */}
          <motion.h1 
            className="text-6xl font-extrabold text-orange-500 italic mb-6 relative z-[60]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            "The Personal Branding{" "}
            <br />
            Secret Every Underdog{" "}
            <br />
            Should Know"
          </motion.h1>
          
          <p className="italic mb-2 text-orange-500">founders & execs:</p>
          
          <p className="text-2xl text-orange-500 mb-12 uppercase tracking-wide">
            Turn your personal brand into a lead magnet with just 45 minutes a week
          </p>

          {/* What You'll Unlock Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6 text-orange-500">What You'll Unlock</h2>
            <div className="space-y-3 text-xl">
              <div className="flex items-center justify-center space-x-3">
                <span>⚡</span>
                <span>Engagement that converts</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span>📝</span>
                <span>Become a thought leader in your space</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span>🎯</span>
                <span>Inbound leads on autopilot</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span>⭐</span>
                <span>A personal brand people trust</span>
              </div>
            </div>
            <p className="mt-6 text-lg text-orange-500">No ads. No AI spam. Just authentic storytelling.</p>
          </div>
          
          {/* Growth Plans Section */}
          <div className="w-full mb-12">
            <h2 className="text-5xl font-bold mb-6 text-orange-500">Pick Your Growth Plan</h2>
            
            {/* Platform Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-orange-500/30 p-1 rounded-full flex items-center relative">
                <motion.div
                  className="absolute bg-gradient-to-r from-orange-600 to-orange-500 w-[42px] h-[42px] rounded-full shadow-md"
                  animate={{ x: platform === 'twitter' ? 2 : 44 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
                <button 
                  onClick={() => setPlatform('twitter')}
                  className={`relative z-10 p-2 rounded-full transition-colors ${platform === 'twitter' ? 'text-white' : 'text-orange-500'}`}
                >
                  <XLogo />
                </button>
                <div className="relative">
                  <button 
                    className="relative z-10 p-2 rounded-full text-gray-400 cursor-not-allowed"
                    disabled
                  >
                    <Linkedin size={24} />
                  </button>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute top-12 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs py-1 px-2 rounded whitespace-nowrap font-sans"
                  >
                    Coming Soon!
                  </motion.div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-orange-500/20 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/30"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <span className="text-2xl">🚀</span>
                  <h3 className="text-2xl font-bold text-orange-500">Starter</h3>
                  <p className="text-lg">
                    Find your voice & gain traction.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="bg-orange-500/20 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/30"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <span className="text-2xl">🔥</span>
                  <h3 className="text-2xl font-bold text-orange-500">Growth</h3>
                  <p className="text-lg">
                    Scale your influence & attract clients.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="bg-orange-500/20 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/30"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <span className="text-2xl">💎</span>
                  <h3 className="text-2xl font-bold text-orange-500">Elite</h3>
                  <p className="text-lg">
                    Dominate your industry with authority.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="w-full mb-12">
            <h2 className="text-5xl font-bold mb-8 text-orange-500">How It Works</h2>
            <div className="flex justify-center items-center space-x-4 text-xl">
              <span>1️⃣</span>
              <span>Free Strategy Call</span>
              <span>→</span>
              <span>2️⃣</span>
              <span>Content Gameplan</span>
              <span>→</span>
              <span>3️⃣</span>
              <span>Growth & Engagement</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-4">
            <p className="text-2xl text-orange-500">
              ⚡ Limited Availability: Only 5 spots open this month - Secure yours now!
            </p>
            <p className="text-2xl text-orange-500">
              Book Your Free Call.
            </p>
            <motion.button
              className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openCalendar}
            >
              Claim your spot
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}