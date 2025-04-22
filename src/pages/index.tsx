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