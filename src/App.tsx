import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  Truck, ChevronDown, Menu, X, ArrowRight, Check, DollarSign, Globe, Users,
  TrendingUp, Shield, MapPin, Phone, Calculator, Star, Heart, Clock, Target,
  Upload, Sparkles, CheckCircle2, ArrowUpRight, Zap, Award, CreditCard,
  BarChart3, Percent, PiggyBank, Monitor, MessageSquare, Bell
} from 'lucide-react';

// ==================== NAVIGATION ====================
const navItems = [
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Calculator', href: '#calculator' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Website', href: '#website' },
];

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/5 py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#A855F7] flex items-center justify-center shadow-lg shadow-[#00D4FF]/20">
              <Truck className="w-5 h-5 lg:w-6 lg:h-6 text-black" />
            </div>
            <span className="text-xl lg:text-2xl font-bold tracking-tight">STROVA</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#calculator" className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-black font-semibold rounded-lg text-sm transition-all hover:shadow-lg hover:shadow-[#00D4FF]/25">
              Calculate Savings
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-gray-400 hover:text-white"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/90 z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#0A0A0A] z-[60] lg:hidden p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-bold">STROVA</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2" aria-label="Close menu">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-[#00D4FF] py-3 text-base border-b border-white/5"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#calculator"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-black font-semibold rounded-lg"
                >
                  Calculate Savings
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// ==================== HERO SECTION ====================
function HeroSection() {
  const [animatedSavings, setAnimatedSavings] = useState(0);
  const [animatedVolume, setAnimatedVolume] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const savingsTarget = 387;
    const volumeTarget = 42580;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedSavings(Math.round(savingsTarget * eased));
      setAnimatedVolume(Math.round(volumeTarget * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(animate, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00D4FF]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#A855F7]/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 mb-5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs lg:text-sm text-[#00D4FF] font-medium">Payment Processing Built for Food Trucks</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] lg:leading-[1.1] mb-5"
            >
              Stop Overpaying For{' '}
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#A855F7] bg-clip-text text-transparent">
                Payment Processing
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg lg:text-xl text-gray-300 mb-5 max-w-lg"
            >
              Lower your processing costs, keep more profit, and get a professional website included with STROVA.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-black font-semibold rounded-lg text-base transition-all hover:shadow-lg hover:shadow-[#00D4FF]/30 group"
              >
                Calculate My Savings
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-lg text-base transition-all hover:bg-white/10 hover:border-white/20"
              >
                Schedule Free Review
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 text-sm text-gray-400"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Lower Rates</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Free Website</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Local Support</span>
              </div>
            </motion.div>
          </div>

          {/* Right - Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-[#0A0A0A] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-gray-500">STROVA Dashboard</span>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Business info */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#A855F7] flex items-center justify-center">
                      <Truck className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">BBQ Revolution Truck</p>
                      <p className="text-xs text-gray-500">Austin, TX</p>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="text-xs text-green-400 font-medium">Active</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-[#111] rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-1">Monthly Savings</p>
                    <p className="text-2xl font-bold text-green-400">
                      ${animatedSavings.toLocaleString()}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3 text-green-400" />
                      <span className="text-xs text-green-400">vs. Square</span>
                    </div>
                  </div>
                  <div className="bg-[#111] rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-1">Processing Volume</p>
                    <p className="text-2xl font-bold">
                      ${animatedVolume.toLocaleString()}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <ArrowUpRight className="w-3 h-3 text-[#00D4FF]" />
                      <span className="text-xs text-[#00D4FF]">+12% this month</span>
                    </div>
                  </div>
                </div>

                {/* Rate comparison */}
                <div className="bg-gradient-to-r from-[#00D4FF]/5 to-[#A855F7]/5 rounded-xl p-4 border border-[#00D4FF]/10">
                  <p className="text-xs text-gray-500 mb-3">Rate Comparison</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Previous processor</span>
                      <span className="text-sm font-medium text-red-400">3.50%</span>
                    </div>
                    <div className="h-px bg-white/10" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">STROVA rate</span>
                      <span className="text-sm font-bold text-green-400">2.49%</span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-gray-500">You save</span>
                      <span className="text-sm font-bold text-[#00D4FF]">$387/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4 bg-[#111] rounded-xl px-4 py-2 border border-green-500/20 shadow-xl"
            >
              <p className="text-xs text-gray-500">Annual Savings</p>
              <p className="text-lg font-bold text-green-400">$4,644</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center text-gray-600"
        >
          <span className="text-xs mb-1">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ==================== SOCIAL PROOF ====================
function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-12 lg:py-16 bg-[#0A0A0A] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center text-gray-500 text-xs uppercase tracking-widest mb-6"
        >
          Trusted by Food Truck Owners
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {[
            { icon: Truck, label: 'Food Trucks' },
            { icon: Truck, label: 'BBQ Trailers' },
            { icon: Truck, label: 'Taco Trucks' },
            { icon: Truck, label: 'Coffee Trailers' },
            { icon: Truck, label: 'Dessert Trucks' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 text-gray-400"
            >
              <item.icon className="w-4 h-4 text-[#00D4FF]" />
              <span className="text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== FOOD TRUCK SVG ====================
function FoodTruckIllustration() {
  return (
    <svg viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Ground */}
      <rect x="0" y="300" width="600" height="60" rx="4" fill="#111" />
      {/* Truck body */}
      <rect x="60" y="140" width="400" height="170" rx="10" fill="#1A1A1A" stroke="#222" strokeWidth="2" />
      {/* Cab */}
      <rect x="380" y="160" width="140" height="150" rx="10" fill="#111" stroke="#222" strokeWidth="2" />
      {/* Windshield */}
      <rect x="395" y="175" width="110" height="70" rx="6" fill="#0D1F2D" stroke="#00D4FF" strokeWidth="1.5" />
      {/* Windshield glow */}
      <rect x="395" y="175" width="110" height="70" rx="6" fill="url(#windshield)" opacity="0.3" />
      {/* Service window */}
      <rect x="180" y="160" width="160" height="100" rx="6" fill="#0D1F2D" stroke="#00D4FF" strokeWidth="1.5" />
      {/* Window glow */}
      <rect x="180" y="160" width="160" height="100" rx="6" fill="url(#windowGlow)" opacity="0.15" />
      {/* Serving counter */}
      <rect x="170" y="255" width="180" height="12" rx="3" fill="#00D4FF" opacity="0.6" />
      {/* Menu board */}
      <rect x="90" y="165" width="80" height="90" rx="5" fill="#0A0A0A" stroke="#333" strokeWidth="1" />
      <rect x="98" y="175" width="64" height="8" rx="2" fill="#00D4FF" opacity="0.8" />
      <rect x="98" y="190" width="50" height="4" rx="1" fill="#555" />
      <rect x="98" y="200" width="55" height="4" rx="1" fill="#555" />
      <rect x="98" y="210" width="45" height="4" rx="1" fill="#555" />
      <rect x="98" y="220" width="52" height="4" rx="1" fill="#555" />
      <rect x="98" y="232" width="60" height="6" rx="2" fill="#A855F7" opacity="0.7" />
      {/* Logo on truck side */}
      <rect x="290" y="190" width="80" height="30" rx="4" fill="#00D4FF" opacity="0.15" />
      <text x="330" y="210" textAnchor="middle" fill="#00D4FF" fontSize="11" fontFamily="sans-serif" fontWeight="700">BBQ CO.</text>
      {/* Wheels */}
      <circle cx="140" cy="300" r="34" fill="#0A0A0A" stroke="#333" strokeWidth="2" />
      <circle cx="140" cy="300" r="22" fill="#111" stroke="#444" strokeWidth="1.5" />
      <circle cx="140" cy="300" r="8" fill="#222" />
      <circle cx="450" cy="300" r="34" fill="#0A0A0A" stroke="#333" strokeWidth="2" />
      <circle cx="450" cy="300" r="22" fill="#111" stroke="#444" strokeWidth="1.5" />
      <circle cx="450" cy="300" r="8" fill="#222" />
      {/* Exhaust smoke */}
      <circle cx="524" cy="155" r="8" fill="#1A1A1A" opacity="0.6" />
      <circle cx="530" cy="138" r="10" fill="#1A1A1A" opacity="0.4" />
      <circle cx="520" cy="120" r="12" fill="#1A1A1A" opacity="0.2" />
      {/* Exhaust pipe */}
      <rect x="515" y="155" width="8" height="30" rx="2" fill="#222" />
      {/* String lights */}
      <line x1="60" y1="145" x2="460" y2="145" stroke="#FCD34D" strokeWidth="1.5" opacity="0.5" />
      {[80, 120, 160, 200, 240, 280, 320, 360, 400, 440].map((x, i) => (
        <circle key={i} cx={x} cy="148" r="3" fill="#FCD34D" opacity="0.8" />
      ))}
      {/* Stripes on awning */}
      <rect x="60" y="130" width="400" height="18" rx="3" fill="#1A1A1A" />
      {[0,1,2,3,4,5,6,7,8,9].map((i) => (
        <rect key={i} x={60 + i * 40} y="130" width="20" height="18" fill="#00D4FF" opacity="0.12" />
      ))}
      {/* Payment terminal floating */}
      <rect x="490" y="195" width="70" height="90" rx="8" fill="#0A0A0A" stroke="#00D4FF" strokeWidth="1" />
      <rect x="498" y="205" width="54" height="36" rx="4" fill="#0D1F2D" />
      <text x="525" y="228" textAnchor="middle" fill="#00D4FF" fontSize="9" fontFamily="sans-serif">$24.50</text>
      <rect x="498" y="250" width="54" height="14" rx="3" fill="#00D4FF" opacity="0.8" />
      <text x="525" y="261" textAnchor="middle" fill="#000" fontSize="7" fontFamily="sans-serif" fontWeight="700">TAP TO PAY</text>
      <rect x="498" y="272" width="24" height="6" rx="2" fill="#333" />
      <rect x="528" y="272" width="24" height="6" rx="2" fill="#333" />
      {/* Customers */}
      {/* Customer 1 */}
      <circle cx="35" cy="250" r="16" fill="#1A1A1A" stroke="#333" strokeWidth="1" />
      <circle cx="35" cy="242" r="7" fill="#2A2A2A" />
      <path d="M20 270 Q35 258 50 270" fill="#1A1A1A" stroke="#333" strokeWidth="1" />
      {/* Customer 2 */}
      <circle cx="570" cy="260" r="14" fill="#1A1A1A" stroke="#333" strokeWidth="1" />
      <circle cx="570" cy="253" r="6" fill="#2A2A2A" />
      <path d="M557 278 Q570 267 583 278" fill="#1A1A1A" stroke="#333" strokeWidth="1" />
      {/* Gradient defs */}
      <defs>
        <linearGradient id="windshield" x1="395" y1="175" x2="505" y2="245" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D4FF" />
          <stop offset="1" stopColor="#A855F7" />
        </linearGradient>
        <linearGradient id="windowGlow" x1="180" y1="160" x2="340" y2="260" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D4FF" />
          <stop offset="1" stopColor="#A855F7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ==================== FOUNDER SECTION ====================
function FounderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/20 mb-5">
              <Heart className="w-3.5 h-3.5 text-[#A855F7]" />
              <span className="text-xs text-[#A855F7] font-medium">Our Story</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
              Built by People Who{' '}
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#A855F7] bg-clip-text text-transparent">
                Understand Food Trucks
              </span>
            </h2>
            <div className="space-y-4 text-gray-300 text-base lg:text-lg mb-6">
              <p>
                Our family owns and operates food trucks. We know firsthand how expensive processing fees, marketing costs, and customer acquisition can be.
              </p>
              <p>
                STROVA was created to help food truck owners keep more of their revenue while attracting more customers online.
              </p>
            </div>
            <p className="text-[#00D4FF] font-semibold text-base lg:text-lg mb-8">
              We're not another payment processor. We're a growth platform built specifically for food trucks.
            </p>
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-black font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-[#00D4FF]/25 group"
            >
              Schedule Free Review
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Food truck illustration panel */}
            <div className="relative bg-[#111] rounded-2xl border border-white/10 p-6 overflow-hidden">
              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-60 h-60 bg-[#00D4FF]/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <FoodTruckIllustration />
              </div>

              {/* Stats row */}
              <div className="relative z-10 grid grid-cols-3 gap-3 mt-4">
                <div className="bg-[#0A0A0A] rounded-lg p-3 text-center">
                  <p className="text-[#00D4FF] text-lg font-bold">2.49%</p>
                  <p className="text-xs text-gray-500">STROVA rate</p>
                </div>
                <div className="bg-[#0A0A0A] rounded-lg p-3 text-center">
                  <p className="text-green-400 text-lg font-bold">$387</p>
                  <p className="text-xs text-gray-500">saved/mo</p>
                </div>
                <div className="bg-[#0A0A0A] rounded-lg p-3 text-center">
                  <p className="text-[#A855F7] text-lg font-bold">Free</p>
                  <p className="text-xs text-gray-500">website</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -top-3 -right-3 bg-[#111] rounded-xl px-3 py-2 border border-[#A855F7]/30 shadow-xl"
            >
              <p className="text-xs text-gray-400">Texas Based</p>
              <p className="text-sm font-bold text-[#A855F7]">Austin, TX</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ==================== BENEFITS SECTION ====================
function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const benefits = [
    {
      icon: Percent,
      title: 'Lower Fees',
      description: 'Keep more money from every sale. Save $200-$500+ monthly on processing costs.',
      color: '#00D4FF',
    },
    {
      icon: Globe,
      title: 'Free Website',
      description: 'Professional website included at no cost. $2,500+ value included when you switch.',
      color: '#A855F7',
    },
    {
      icon: Heart,
      title: 'Local Support',
      description: 'Real people who understand food trucks. Texas-based support team.',
      color: '#F59E0B',
    },
  ];

  return (
    <section ref={ref} id="benefits" className="py-16 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#A855F7] bg-clip-text text-transparent">
              Grow
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Payment processing designed specifically for food trucks, with tools to help you save and grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="group relative bg-[#0A0A0A] rounded-2xl p-6 lg:p-8 border border-white/5 hover:border-white/10 transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${benefit.color}15` }}
              >
                <benefit.icon className="w-6 h-6" style={{ color: benefit.color }} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              <div className="mt-4 flex items-center text-sm font-medium text-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== SAVINGS CALCULATOR ====================
function SavingsCalculator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [monthlyRevenue, setMonthlyRevenue] = useState(35000);
  const [currentRate, setCurrentRate] = useState(3.5);

  const strovaRate = 2.49;
  const currentMonthlyFee = (monthlyRevenue * currentRate) / 100;
  const strovaMonthlyFee = (monthlyRevenue * strovaRate) / 100;
  const monthlySavings = currentMonthlyFee - strovaMonthlyFee;
  const annualSavings = monthlySavings * 12;

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section ref={ref} id="calculator" className="py-16 lg:py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 mb-5">
            <Calculator className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-xs text-[#00D4FF] font-medium">Interactive Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Calculate Your <span className="text-green-400">Savings</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            See how much your food truck could save by switching to STROVA.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-[#111] rounded-2xl p-6 lg:p-8 border border-white/5">
            {/* Inputs */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Monthly Revenue</label>
                <input
                  type="range"
                  min="10000"
                  max="100000"
                  step="5000"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-[#222] rounded-full appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>$10,000</span>
                  <span className="text-lg font-bold text-white">{formatCurrency(monthlyRevenue)}</span>
                  <span>$100,000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Current Processing Rate (%)</label>
                <input
                  type="range"
                  min="2.5"
                  max="5"
                  step="0.1"
                  value={currentRate}
                  onChange={(e) => setCurrentRate(Number(e.target.value))}
                  className="w-full h-2 bg-[#222] rounded-full appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>2.5%</span>
                  <span className="text-lg font-bold text-white">{currentRate.toFixed(2)}%</span>
                  <span>5%</span>
                </div>
              </div>
            </div>

            {/* Rate comparison */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#0A0A0A] rounded-xl p-4 border border-red-500/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Current Processor</span>
                  <span className="text-lg font-bold text-red-400">{currentRate.toFixed(2)}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Monthly fees</span>
                  <span className="text-sm text-gray-300">{formatCurrency(currentMonthlyFee)}</span>
                </div>
              </div>

              <div className="bg-[#0A0A0A] rounded-xl p-4 border border-[#00D4FF]/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">STROVA Rate</span>
                  <span className="text-lg font-bold text-[#00D4FF]">{strovaRate}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Monthly fees</span>
                  <span className="text-sm text-gray-300">{formatCurrency(strovaMonthlyFee)}</span>
                </div>
              </div>
            </div>

            {/* Savings */}
            <div className="bg-gradient-to-r from-green-500/10 to-[#00D4FF]/10 rounded-xl p-5 border border-green-500/20">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-400 mb-1">Estimated Annual Savings</p>
                <motion.p
                  key={annualSavings}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="text-4xl lg:text-5xl font-bold text-green-400"
                >
                  {formatCurrency(annualSavings)}
                </motion.p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-black font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-[#00D4FF]/30"
                >
                  Get My Free Analysis
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== FOOD TRUCK WEBSITE MOCKUP ====================
function FoodTruckWebsiteMockup() {
  const menuItems = [
    { name: 'Brisket Plate', price: '$18', tag: 'Best Seller', color: '#F59E0B' },
    { name: 'BBQ Ribs', price: '$22', tag: 'Fan Fav', color: '#EF4444' },
    { name: 'Pulled Pork', price: '$16', tag: '', color: '#A855F7' },
    { name: 'Loaded Fries', price: '$12', tag: 'New', color: '#00D4FF' },
  ];

  return (
    <div className="bg-[#0D0D0D] rounded-xl overflow-hidden border border-white/5 text-white font-sans">
      {/* Website Nav */}
      <div className="bg-[#111] border-b border-white/5 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-[#F59E0B] to-[#EF4444]" />
          <span className="text-xs font-bold">BBQ REVOLUTION</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[10px] text-gray-400">
          <span>Menu</span>
          <span>Catering</span>
          <span>Order</span>
        </div>
        <div className="px-2.5 py-1 rounded bg-[#F59E0B] text-[9px] font-bold text-black">ORDER NOW</div>
      </div>

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#1A0A00] to-[#0D0D0D] px-4 py-5 sm:px-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[9px] text-green-400 uppercase tracking-wider">Now Serving · Downtown Austin</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black mb-1 leading-tight">
              Award-Winning<br />
              <span className="text-[#F59E0B]">Texas BBQ</span>
            </h3>
            <p className="text-[10px] text-gray-400 mb-3">Smoked low & slow since 2018</p>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1.5 rounded bg-[#F59E0B] text-[9px] font-bold text-black">View Full Menu</div>
              <div className="px-3 py-1.5 rounded border border-white/10 text-[9px] text-gray-300">Book Catering</div>
            </div>
          </div>
          {/* Truck icon visual */}
          <div className="relative flex-shrink-0">
            <div className="w-24 h-16 sm:w-32 sm:h-20 bg-gradient-to-br from-[#F59E0B]/10 to-[#EF4444]/10 rounded-xl border border-[#F59E0B]/20 flex items-center justify-center">
              <Truck className="w-10 h-10 sm:w-12 sm:h-12 text-[#F59E0B]" />
            </div>
            <div className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 bg-green-500 rounded text-[8px] font-bold text-black">OPEN</div>
          </div>
        </div>
      </div>

      {/* Menu section */}
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-bold">Today's Menu</p>
          <p className="text-[9px] text-[#00D4FF]">See all items →</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {menuItems.map((item) => (
            <div key={item.name} className="bg-[#111] rounded-lg p-2.5 border border-white/5 relative">
              {item.tag && (
                <div
                  className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded text-[7px] font-bold"
                  style={{ backgroundColor: `${item.color}25`, color: item.color }}
                >
                  {item.tag}
                </div>
              )}
              <div
                className="w-7 h-7 rounded-md mb-2 flex items-center justify-center text-base"
                style={{ backgroundColor: `${item.color}15` }}
              >
                🍖
              </div>
              <p className="text-[10px] font-semibold leading-tight mb-0.5">{item.name}</p>
              <p className="text-xs font-bold" style={{ color: item.color }}>{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Catering CTA */}
      <div className="mx-4 mb-4 sm:mx-6 sm:mb-5 bg-gradient-to-r from-[#F59E0B]/10 to-[#EF4444]/10 rounded-xl p-3.5 border border-[#F59E0B]/15">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-[#F59E0B] mb-0.5">Book Catering</p>
            <p className="text-[9px] text-gray-400">Events · Weddings · Corporate</p>
            <p className="text-[9px] text-gray-400">Starting at <span className="text-green-400 font-bold">$500</span></p>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-[#F59E0B] text-[9px] font-bold text-black flex-shrink-0">Get Quote</div>
        </div>
      </div>

      {/* Reviews strip */}
      <div className="border-t border-white/5 px-4 py-2.5 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => <span key={i} className="text-[#F59E0B] text-[10px]">★</span>)}
          <span className="text-[9px] text-gray-400 ml-1">4.9 · 127 reviews</span>
        </div>
        <div className="flex items-center gap-1 text-[9px] text-gray-500">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span>Verified by STROVA</span>
        </div>
      </div>
    </div>
  );
}

// ==================== WEBSITE COMPARISON ====================
function WebsiteSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const withoutStrova = [
    { text: 'High processing fees (3.5%+)' },
    { text: 'No professional website' },
    { text: 'Generic customer support' },
    { text: 'No catering tools' },
    { text: 'No online visibility' },
  ];

  const withStrova = [
    { text: 'Lower rate (2.49%)' },
    { text: 'Free website included' },
    { text: 'Dedicated food truck support' },
    { text: 'Catering lead forms' },
    { text: 'Google visibility tools' },
  ];

  return (
    <section ref={ref} id="website" className="py-16 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-5">
            <Globe className="w-4 h-4 text-green-400" />
            <span className="text-xs text-green-400 font-medium">$2,500+ Included Free</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            The Website You Get <span className="text-green-400">For Free</span>
          </h2>
          <p className="text-gray-400 text-base lg:text-lg max-w-xl mx-auto">
            Most food trucks rely only on Instagram and Facebook. We help you own your online presence.
          </p>
        </motion.div>

        {/* Comparison cards */}
        <div className="grid lg:grid-cols-2 gap-5 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-[#0A0A0A] rounded-xl p-5 border border-red-500/10"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center">
                <X className="w-3.5 h-3.5 text-red-400" />
              </div>
              <h3 className="font-semibold text-red-400">Without STROVA</h3>
            </div>
            <div className="space-y-2.5">
              {withoutStrova.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <X className="w-3.5 h-3.5 text-red-500/50 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-[#00D4FF]/5 to-[#A855F7]/5 rounded-xl p-5 border border-[#00D4FF]/15 relative"
          >
            <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/25">
              <span className="text-[10px] text-green-400 font-semibold">$2,500+ VALUE</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#00D4FF]/15 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-[#00D4FF]" />
              </div>
              <h3 className="font-semibold text-[#00D4FF]">With STROVA</h3>
            </div>
            <div className="space-y-2.5">
              {withStrova.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Website mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <p className="text-sm text-gray-400 font-medium">Example website we build for you</p>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          {/* Browser chrome */}
          <div className="rounded-xl lg:rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-[#111] border-b border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <div className="ml-3 flex-1 max-w-xs">
                <div className="bg-[#0A0A0A] rounded px-2.5 py-1 text-[10px] text-gray-500 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  bbqrevolution.com
                </div>
              </div>
            </div>

            {/* Actual website preview */}
            <FoodTruckWebsiteMockup />
          </div>

          {/* Value badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="flex justify-center mt-5"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#0A0A0A] rounded-xl border border-green-500/20">
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-300">Yours free when you switch to STROVA</span>
              <span className="text-sm font-bold text-green-400">$2,500+ value</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== HOW IT WORKS ====================
function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const steps = [
    { num: '01', title: 'Upload Statement', desc: 'Share your current processing statement' },
    { num: '02', title: 'Get Analysis', desc: 'Receive your personalized savings report' },
    { num: '03', title: 'Get Website', desc: 'We build your professional website' },
    { num: '04', title: 'Start Saving', desc: 'Begin saving and growing your business' },
  ];

  return (
    <section ref={ref} id="how-it-works" className="py-16 lg:py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            How It <span className="bg-gradient-to-r from-[#00D4FF] to-[#A855F7] bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-gray-400 text-lg">Four simple steps to start saving</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="relative bg-[#111] rounded-xl p-5 lg:p-6 border border-white/5"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#A855F7] flex items-center justify-center mb-4">
                <span className="text-sm font-bold text-black">{step.num}</span>
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== TESTIMONIALS ====================
function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const testimonials = [
    {
      quote: "We switched from Square and immediately started saving. The free website generated catering leads in the first month.",
      name: "Maria G.",
      business: "Tacos El Guero",
      type: "Taco Truck",
      savings: "$3,200/year",
    },
    {
      quote: "Finally, a processor that understands food trucks. The website alone was worth switching.",
      name: "James T.",
      business: "SmokeHouse BBQ",
      type: "BBQ Trailer",
      savings: "$4,100/year",
    },
    {
      quote: "We went from zero catering leads to 4-5 inquiries per month. Game changer.",
      name: "Sarah K.",
      business: "Sweet Wheels",
      type: "Dessert Truck",
      savings: "$2,800/year",
    },
  ];

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Food Truck Owners Are <span className="text-green-400">Saving</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="bg-[#0A0A0A] rounded-xl p-5 lg:p-6 border border-white/5"
            >
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-5 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-green-400 font-bold text-sm">{t.savings}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== FINAL CTA ====================
function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const features = [
    { icon: Check, text: 'No obligation' },
    { icon: Check, text: 'Free analysis' },
    { icon: Check, text: 'Local support' },
  ];

  return (
    <section ref={ref} id="contact" className="py-16 lg:py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D4FF]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-5">
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-xs text-green-400 font-medium">Limited Spots Available</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            See How Much Your Food Truck Can <span className="text-green-400">Save</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Get a free savings analysis and discover how much profit STROVA can put back into your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-black font-semibold rounded-lg text-lg transition-all hover:shadow-lg hover:shadow-[#00D4FF]/30 group"
            >
              Get My Free Analysis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-1.5 text-sm text-gray-400">
                <f.icon className="w-4 h-4 text-green-400" />
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== FOOTER ====================
function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#A855F7] flex items-center justify-center">
              <Truck className="w-4 h-4 text-black" />
            </div>
            <span className="text-lg font-bold">STROVA</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-600 flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Austin, TX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==================== MAIN APP ====================
function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <HeroSection />
        <SocialProof />
        <FounderSection />
        <BenefitsSection />
        <SavingsCalculator />
        <WebsiteSection />
        <HowItWorks />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
