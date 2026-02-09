import React, { useState, useEffect } from 'react';
import { 
  Users, 
  BookOpen, 
  Bell, 
  ShieldCheck, 
  Gamepad2, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  ChevronDown,
  Info,
  ShieldAlert,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Constants ---
const SERVER_NAME = "~# .:: 𝙲𝙿𝚂𝙲𝙼𝚣 ::. #~";
const INVITE_LINK = "https://discord.gg/Xb2B56vpWj";
const LOGO_URL = "https://image.s4daf.qzz.io/Qin%20Shi%20Huang%20_%20anime%20_%20icon.jpg";

// --- Components ---

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f111a]/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Logo" className="w-10 h-10 rounded-xl shadow-lg shadow-indigo-500/20 object-cover" />
          <span className="font-jakarta font-bold text-lg hidden sm:block">𝙲𝙿𝚂𝙲𝙼𝚣</span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
          <a href="#guide" className="hover:text-indigo-400 transition-colors">Join Guide</a>
          <a href="#features" className="hover:text-indigo-400 transition-colors">Features</a>
          <a href={INVITE_LINK} target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full discord-gradient text-white shadow-lg shadow-indigo-500/25 hover:scale-105 transition-transform active:scale-95">
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-20 animate-pulse"></div>
            <img 
              src={LOGO_URL} 
              alt="Server Logo" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-3xl border-4 border-white/10 shadow-2xl relative z-10 animate-float object-cover"
            />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-jakarta font-extrabold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight tracking-tight"
        >
          Welcome to <br />
          <span className="text-gradient drop-shadow-sm">{SERVER_NAME}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          The ultimate school community hub for student collaboration, academic support, and social events. Your journey to academic excellence starts here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href={INVITE_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl discord-gradient text-white text-lg font-bold shadow-2xl shadow-indigo-600/30 hover:scale-105 transition-all active:scale-95 w-full sm:w-auto"
          >
            Join the Community
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a 
            href="#about"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all w-full sm:w-auto text-lg font-medium justify-center"
          >
            Learn More
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeading: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4"
    >
      {subtitle}
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-jakarta font-bold"
    >
      {title}
    </motion.h2>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0c14]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-[#151824] rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Info className="text-indigo-400" />
                  What is CPSCMz?
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  CPSCMz is more than just a Discord server; it's a digital campus designed for modern students. We believe that learning is better together, which is why we've built a space where collaboration, academic support, and friendship thrive.
                </p>
                <div className="space-y-4">
                  {[
                    "Unified student announcements and news",
                    "Subject-specific study groups and help",
                    "A vibrant community of helpful peers",
                    "Safe, moderated environment for everyone"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-indigo-400" />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <SectionHeading title="A Home for Every Student" subtitle="The Community" />
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Whether you're looking for last-minute exam prep, interested in participating in fun school events, or just want a place to chill between classes, CPSCMz has a place for you.
            </p>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-colors flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                   <BookOpen className="text-indigo-400 w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-gray-500 text-sm">Study Help & Resources</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const JoinGuide: React.FC = () => {
  const steps = [
    {
      title: "Click Join Button",
      description: "Tap the main join button anywhere on this page to trigger the invitation.",
      icon: <ExternalLink className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      title: "Accept Invitation",
      description: "Once Discord opens, click 'Accept Invite' to enter our server gates.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-indigo-500"
    },
    {
      title: "Read Rules & Verify",
      description: "Visit the rules channel and complete any verification needed for full access.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "bg-purple-500"
    },
    {
      title: "Introduce Yourself",
      description: "Pick your roles and say hi in the general chat! We're excited to meet you.",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "bg-pink-500"
    }
  ];

  return (
    <section id="guide" className="py-24 bg-[#0f111a]">
      <div className="container mx-auto px-6">
        <SectionHeading title="How to Get Started" subtitle="Join Guide" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#0f111a] border border-white/10 flex items-center justify-center font-bold text-indigo-400 z-10">
                {idx + 1}
              </div>
              <div className={`w-14 h-14 rounded-2xl ${step.color}/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                <div className={`${step.color} w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-black/20`}>
                  {step.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Study Help",
      desc: "Peer-to-peer tutoring and subject-specific channels for homework help.",
      color: "text-blue-400"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Announcements",
      desc: "Stay updated with real-time school news, exam schedules, and holiday alerts.",
      color: "text-amber-400"
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Fun & Social",
      desc: "Dedicated channels for gaming, music, art, and non-academic hobbies.",
      color: "text-green-400"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Events",
      desc: "Regular community game nights, movie screenings, and student meetups.",
      color: "text-purple-400"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Safe Environment",
      desc: "Active moderation ensuring a toxic-free and student-friendly experience.",
      color: "text-indigo-400"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Active Chat",
      desc: "There is always someone online to chat with, whatever the time.",
      color: "text-pink-400"
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#0a0c14]">
      <div className="container mx-auto px-6">
        <SectionHeading title="Benefits of Joining" subtitle="Server Features" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all flex gap-6 group"
            >
              <div className={`${feature.color} bg-white/5 w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:bg-white/10 transition-colors`}>
                {feature.icon}
              </div>
              <div>
                <h5 className="text-xl font-bold mb-2">{feature.title}</h5>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Rules: React.FC = () => {
  const rules = [
    { title: "Respect Everyone", desc: "No harassment, hate speech, or bullying of any kind." },
    { title: "No Spamming", desc: "Keep channels clean and avoid excessive messages or bots." },
    { title: "TOS Compliant", desc: "Always follow Discord's Terms of Service and Guidelines." },
    { title: "Moderator Authority", desc: "Listen to and respect decisions made by the server staff." }
  ];

  return (
    <section className="py-24 bg-[#0f111a]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h3 className="text-3xl font-jakarta font-bold mb-6 flex items-center gap-3">
                <ShieldAlert className="text-red-400" />
                Server Rules
              </h3>
              <p className="text-gray-400 mb-8">
                To keep our community safe and enjoyable for everyone, we ask all members to adhere to our core rules. Full rules are available in the <span className="text-indigo-400">#rules</span> channel.
              </p>
              <div className="space-y-6">
                {rules.map((rule, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs font-bold text-gray-400 border border-white/10">
                     
