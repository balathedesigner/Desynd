import { NextPage } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Zap, Layout, Box, Layers, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Enhanced Card component with animation
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
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      {Icon && (
        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-zinc-600">{description}</p>
    </motion.div>
  );
}

const HomePage: NextPage = () => {
  return (
    <main className="text-zinc-800">
      {/* Hero Section with animated gradient and floating elements */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Welcome to Desynd
            </h1>
            <p className="text-2xl max-w-3xl mx-auto mb-12 text-blue-100">
              A modern design system that speaks to both designers and developers — powered by Tailwind CSS, built on atomic principles, and designed for scale.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                variant="default"
                className="bg-white text-blue-600 hover:bg-blue-50"
                rightIcon={<ArrowRight className="ml-2" />}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                rightIcon={<Code className="ml-2" />}
              >
                View Components
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Desynd?</h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Built with modern tools and best practices, Desynd helps teams create consistent and beautiful interfaces faster.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card 
            icon={Palette}
            title="Design & Dev Modes" 
            description="Switch between visual design specs and full developer documentation seamlessly — no context switching, just clarity."
            delay={0.1}
          />
          <Card 
            icon={Layers}
            title="Atomic-First Structure" 
            description="Our components follow atomic design principles: from atoms to organisms. Meaningful hierarchy, built to scale."
            delay={0.2}
          />
          <Card 
            icon={Zap}
            title="Tailwind-Native" 
            description="No bloated overrides. Clean utility-first styles that map directly from design tokens to code."
            delay={0.3}
          />
          <Card 
            icon={Layout}
            title="Component Playground" 
            description="Explore, inspect, and interact — every component is live, customizable, and ready to drop in."
            delay={0.4}
          />
          <Card 
            icon={Box}
            title="Ready-Made Templates" 
            description="Start with pre-built layouts and patterns. Customize and combine them to create your perfect interface."
            delay={0.5}
          />
          <Card 
            icon={RefreshCcw}
            title="Auto-Updates" 
            description="Stay in sync with the latest design changes. Automatic updates ensure your components are always current."
            delay={0.6}
          />
        </div>
      </section>

      {/* Core Principles with Visual Elements */}
      <section className="py-24 px-6 bg-gradient-to-b from-zinc-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Core Principles</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Built on foundations that ensure consistency, efficiency, and scalability.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-3 gap-12">
            {[
              {
                title: "Modularity",
                description: "Everything is reusable. Designed to adapt, extend, and plug into your product flow.",
                color: "from-blue-400 to-blue-600"
              },
              {
                title: "Clarity",
                description: "Designs are accessible, purposeful, and aligned with development structure.",
                color: "from-indigo-400 to-indigo-600"
              },
              {
                title: "Sync",
                description: "One source of truth for designers and developers — no duplication, no guesswork.",
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

      {/* Enhanced Usage Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">How to Use Desynd</h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Whether you're a designer or developer, Desynd adapts to your workflow.
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
              <h3 className="text-2xl font-semibold">For Designers</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm">1</span>
                </div>
                <p>Browse components in Design Mode with visual specs and guidelines</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm">2</span>
                </div>
                <p>Access comprehensive design tokens and spacing systems</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm">3</span>
                </div>
                <p>Follow atomic structure for creating consistent new screens</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm">4</span>
                </div>
                <p>Sync with Figma components and design files (coming soon)</p>
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
              <h3 className="text-2xl font-semibold">For Developers</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-indigo-600 text-sm">1</span>
                </div>
                <p>Access detailed API documentation and implementation guides</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-indigo-600 text-sm">2</span>
                </div>
                <p>Copy-paste ready-to-use Tailwind components and patterns</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-indigo-600 text-sm">3</span>
                </div>
                <p>Test components in interactive playground environments</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-indigo-600 text-sm">4</span>
                </div>
                <p>Explore TypeScript definitions and prop documentation</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-zinc-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">👋 Who's Behind Desynd?</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-zinc-100"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                <img
                  src="/boopalakannan.jpg"
                  alt="Boopalakannan Kamaraj"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIGZpbGw9IiNFMEU3RkYiLz48cGF0aCBkPSJNNjQgNjRDNzQuMjUgNjQgODIuNjY2NyA1NS41ODMzIDgyLjY2NjcgNDUuMzMzM0M4Mi42NjY3IDM1LjA4MzMgNzQuMjUgMjYuNjY2NyA2NCAyNi42NjY3QzUzLjc1IDI2LjY2NjcgNDUuMzMzMyAzNS4wODMzIDQ1LjMzMzMgNDUuMzMzM0M0NS4zMzMzIDU1LjU4MzMgNTMuNzUgNjQgNjQgNjRaTTY0IDczLjMzMzNDNTEuMzMzMyA3My4zMzMzIDI2IDc5LjY2NjcgMjYgOTIuMzMzM1YxMDEuMzMzSDEwMlY5Mi4zMzMzQzEwMiA3OS42NjY3IDc2LjY2NjcgNzMuMzMzMyA2NCA3My4zMzMzWiIgZmlsbD0iIzk0QTNCOCIvPjwvc3ZnPg==';
                  }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Boopalakannan Kamaraj</h3>
                <p className="text-zinc-600 mb-4">Senior Product Designer</p>
                <div className="flex gap-3">
                  <Link 
                    href="https://www.linkedin.com/in/boopalakannan" 
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    LinkedIn
                  </Link>
                  <Link 
                    href="https://www.balathedesigner.com" 
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                    Portfolio
                  </Link>
                </div>
              </div>
            </div>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              Hey there, I'm Boopalakannan Kamaraj, a Senior Product Designer with a passion for building design systems that scale and collaborate seamlessly with development teams. Over the years, I've honed my craft in various industries like healthcare, automation, education, and AI. Now, I've created Desynd — a no-nonsense design engine made for both designers and developers.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed">
              This project is the culmination of my experience with design ops, system thinking, and teamwork. Whether you're designing, coding, or both, Desynd is here to bridge the gap and keep things smooth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Special Thanks Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">🙏 Special Thanks</h2>
            <p className="text-xl text-zinc-600">
              This journey wouldn't have been as smooth without the amazing support of:
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
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center text-white text-2xl">
                🤖
              </div>
              <h3 className="text-xl font-semibold mb-4">ChatGPT</h3>
              <p className="text-zinc-600">
                For the brainstorming sessions, feedback loops, and those late-night design convos that made everything come together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border border-violet-100"
            >
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-400 flex items-center justify-center text-white text-2xl">
                💻
              </div>
              <h3 className="text-xl font-semibold mb-4">Cursor AI</h3>
              <p className="text-zinc-600">
                My AI-powered coding buddy, helping me build this system faster and with more precision than I could have imagined.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-zinc-600">
              🚀 Here's to building with the best copilots by my side!
            </p>
          </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Start Building?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Explore our component library and start creating beautiful, consistent interfaces today.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/components">
                <Button
                  size="lg"
                  variant="default"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                  rightIcon={<ArrowRight className="ml-2" />}
                >
                  Explore Components
                </Button>
              </Link>
              <Link href="/docs/getting-started">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Read Documentation
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