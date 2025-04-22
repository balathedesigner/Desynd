import { NextPage } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Zap, Layout, Box, Layers, RefreshCcw, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
  show: {
      opacity: 1,
      transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Enhanced Card component with refined interactions
function Card({ 
  title, 
  description, 
  icon: Icon,
  delay = 0 
}: { 
  title: string; 
  description: string; 
  icon?: React.ElementType;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, y: -5, zIndex: 10 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
      className="group relative bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg hover:bg-zinc-50/50 hover:border-blue-200 transition-all duration-300"
    >
      {Icon && (
        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-zinc-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

const HomePage: NextPage = () => {
  return (
    <main className="text-zinc-800">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-32 px-6 overflow-hidden">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900" />
        
        {/* Animated gradient overlays */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-blue-500/30"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            backgroundSize: '200% 100%',
          }}
        />
        
        {/* Subtle wave patterns */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1),transparent_50%)]"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </div>

        {/* Minimal geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-white/5 blur-3xl"
            style={{ top: '-20%', left: '-10%' }}
            animate={{
              y: [0, 50, 0],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 12,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
            style={{ bottom: '-20%', right: '-10%' }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
          >
            {/* Pre-title badge */}
            <motion.div
              variants={itemVariants}
              className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-blue-100 text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-100"></span>
              </span>
              Now in Beta
            </motion.div>

            {/* Main title with enhanced typography */}
            <motion.h1 
              variants={itemVariants}
              className="text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Welcome to{' '}
              </span>
              <span className="text-white relative inline-block">
                Desynd
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400/50 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            {/* Subtitle with better contrast */}
            <motion.p 
              variants={itemVariants}
              className="text-3xl font-bold mb-6 text-white tracking-tight"
            >
              A lovingly crafted design system for makers who care.
            </motion.p>

            {/* Description with improved readability */}
            <motion.p 
              variants={itemVariants}
              className="text-xl max-w-2xl mx-auto mb-12 text-blue-100/90 leading-relaxed"
            >
              Built with Tailwind CSS, structured on atomic principles, and fine-tuned for scale — Desynd bridges the gap between design and development.
            </motion.p>

            {/* Highlighted features with enhanced visual treatment */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <div className="px-6 py-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/10">
                <p className="text-lg text-blue-100 font-medium">
                  Simple. Scalable. Seamless.
                </p>
              </div>
              <div className="px-6 py-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/10">
                <p className="text-lg text-blue-100">
                  For designers. For developers. For teams.
                </p>
              </div>
            </motion.div>

            {/* CTA section with single button */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-16"
            >
              <Link href="/components">
                <Button
                  size="lg"
                  variant="default"
                  className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105"
                  rightIcon={<ArrowRight className="ml-2 w-5 h-5" />}
                >
                  Explore the Library
                </Button>
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={itemVariants}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 text-white/50" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Desynd Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Desynd?</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              We built Desynd with real-world teams in mind — the kind juggling Figma files, component libraries, and dev handoffs. Here's why it works:
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card 
              icon={Palette}
              title="Design & Dev in Sync" 
              description="Switch modes like a boss — toggle between pixel-perfect design specs and clean developer documentation without ever leaving the system. No more 'Where's the spec?' messages on Slack."
              delay={0.1}
            />
            <Card 
              icon={Layers}
              title="Atomic by Nature" 
              description="Every element, from button to dashboard layout, follows atomic design principles — giving you a predictable, scalable structure from day one. Think Lego blocks, but prettier."
              delay={0.2}
            />
            <Card 
              icon={Zap}
              title="Tailwind-First" 
              description="Built natively with Tailwind — so your designs stay light, your code stays clean, and your developers stay happy. Utility classes you actually want to use. Bye-bye bloat."
              delay={0.3}
            />
            <Card 
              icon={Layout}
              title="Live Component Playground" 
              description="Test and tweak components in real-time. Play with props, see results instantly, and find the perfect fit for your use case. Design, test, repeat — without breaking things."
              delay={0.4}
            />
            <Card 
              icon={Box}
              title="Templates That Actually Help" 
              description="Kickstart your projects with beautifully structured templates. From dashboards to forms, they're ready for real use — not just Dribbble shots. Less wireframing. More launching."
              delay={0.5}
            />
            <Card 
              icon={RefreshCcw}
              title="Always Up-to-Date" 
              description="Components automatically reflect updates from the design system, keeping everyone on the same version of truth. Sync once. Trust always."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">The Principles Behind Desynd</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              We didn't just build a library — we built a philosophy. Here are the principles that shape every pixel and prop:
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-3 gap-12">
            {[
              {
                title: "Clarity",
                description: "Each component has a purpose. Each style has a reason. Nothing is random, everything's intentional.",
                color: "from-blue-400 to-blue-600"
              },
              {
                title: "Modularity",
                description: "Plug in what you need, leave the rest. Reuse components across projects without friction.",
                color: "from-indigo-400 to-indigo-600"
              },
              {
                title: "Harmony Between Teams",
                description: "Designers speak in pixels. Developers in code. Desynd speaks both fluently — so everyone stays on the same page.",
                color: "from-violet-400 to-violet-600"
              }
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${principle.color} flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{principle.title}</h3>
                <p className="text-zinc-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">How It Works — For Everyone</h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Whether you're designing in Figma, coding in VSCode, or doing both (you hero), Desynd is here to support your flow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Palette className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold">🎨 Designers, We Got You</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm">1</span>
                </div>
                <p>Visual component specs with usage guidelines</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm">2</span>
                </div>
                <p>Tokens for spacing, color, typography</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm">3</span>
                </div>
                <p>Ready-to-use screen templates</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm">4</span>
                </div>
                <p>Figma integration coming soon!</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-50 to-violet-50 p-8 rounded-2xl border border-indigo-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                <Code className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-semibold">💻 Developers, You're Covered Too</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-indigo-600 text-sm">1</span>
                </div>
                <p>Tailwind-ready components with code snippets</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-indigo-600 text-sm">2</span>
                </div>
                <p>Props, states, and real-time previews</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-indigo-600 text-sm">3</span>
                </div>
                <p>TypeScript support with proper documentation</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-indigo-600 text-sm">4</span>
                </div>
                <p>Dev playground for safe experimentation</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Meet the Maker Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Simple gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/50 to-white" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Section Label */}
          <div className="mb-16 flex items-center justify-center">
            <div className="inline-flex items-center gap-3">
              <div className="h-[1px] w-8 bg-blue-600/40"></div>
              <h4 className="text-sm font-medium text-blue-600 tracking-wider uppercase">Meet the Maker</h4>
              <div className="h-[1px] w-8 bg-blue-600/40"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Content Column - Spans 7 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-12"
            >
              {/* Header */}
              <div className="space-y-4">
                <h2 className="text-5xl font-bold tracking-tight text-zinc-900">
                  Boopalakannan Kamaraj
                </h2>
                <p className="text-xl text-blue-600">Senior Product Designer & Design Systems Architect</p>
              </div>

              {/* Bio */}
              <div className="space-y-6 text-lg text-zinc-600">
                <p className="leading-relaxed">
                  Hey there! I'm Bala — a designer who's obsessed with creating systems that bridge the gap between design and development. With experience spanning healthcare, automation, and AI, I've seen firsthand how the right design system can transform team collaboration.
                </p>
                <p className="leading-relaxed">
                  Desynd emerged from countless hours of wrestling with design handoffs, component libraries, and the eternal question: "Why can't this be simpler?" It's my answer to making design systems more human, more practical, and actually enjoyable to use.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="relative">
                  <div className="h-12 w-[1px] absolute -top-2 left-0 bg-gradient-to-b from-blue-600/20 to-transparent"></div>
                  <p className="text-4xl font-bold text-zinc-900">8+</p>
                  <p className="text-sm text-zinc-500 mt-2">Years of Design Experience</p>
                </div>
                <div className="relative">
                  <div className="h-12 w-[1px] absolute -top-2 left-0 bg-gradient-to-b from-blue-600/20 to-transparent"></div>
                  <p className="text-4xl font-bold text-zinc-900">50+</p>
                  <p className="text-sm text-zinc-500 mt-2">Projects Delivered</p>
                </div>
                <div className="relative">
                  <div className="h-12 w-[1px] absolute -top-2 left-0 bg-gradient-to-b from-blue-600/20 to-transparent"></div>
                  <p className="text-4xl font-bold text-zinc-900">3</p>
                  <p className="text-sm text-zinc-500 mt-2">Design Systems Built</p>
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-8 pt-4">
                <Link 
                  href="https://www.balathedesigner.com" 
                  target="_blank"
                  className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors group"
                >
                  <span className="text-lg font-medium">View Portfolio</span>
                  <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/boopalakannan-kamaraj-aa3603144/"
                  target="_blank"
                  className="inline-flex items-center gap-3 text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  <span className="text-lg font-medium">Connect on LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Image Column - Spans 5 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[4/5]">
                <img
                  src="/boopalakannan.jpg"
                  alt="Boopalakannan Kamaraj in the mountains"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Thanks Section - Updated Cursor logo */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Special Thanks</h2>
            <p className="text-xl text-zinc-600">
              Desynd was built with some wonderful help behind the scenes:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100"
            >
              <div className="w-16 h-16 mb-6">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
                  alt="ChatGPT Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">ChatGPT</h3>
              <p className="text-zinc-600">
                The ultimate brainstorming buddy — helped me refine ideas, improve flow, and sometimes just told me what I already knew. You rock.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border border-violet-100"
            >
              <div className="w-16 h-16 mb-6">
                <img 
                  src="/logo-dark.avif"
                  alt="Cursor Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cursor</h3>
              <p className="text-zinc-600">
                My favorite coding sidekick — made writing cleaner and debugging faster. Basically, the teammate who never sleeps.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-zinc-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Build?</h2>
            <p className="text-xl text-blue-100 mb-4">
              Dive into Desynd and start creating UIs that feel good to design, code, and use.
            </p>
            <p className="text-lg text-blue-200 mb-8">
              No bloat. No fluff. Just harmony in motion.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/components">
                <Button
                  size="lg"
                  variant="default"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                  rightIcon={<ArrowRight className="ml-2" />}
                >
                  Explore the Library
                </Button>
              </Link>
            </div>
        </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HomePage; 