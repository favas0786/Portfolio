// src/components/About.tsx

import { HiOutlineCollection, HiOutlineUser, HiOutlineSparkles } from 'react-icons/hi';

// A reusable component for the info cards
function InfoCard({ 
  icon, 
  title, 
  children 
}: { 
  icon: React.ReactNode, 
  title: string, 
  children: React.ReactNode 
}) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-cyan-600">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      {/* This div is now the content wrapper.
        'space-y-3' adds spacing between paragraphs and the list.
      */}
      <div className="text-gray-700 space-y-3">
        {children}
      </div>
    </div>
  );
}

export default function About() {
  return (
    // We give this an id="about" so the navbar link can scroll to it
    <section id="about" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-8">
          <HiOutlineCollection className="w-8 h-8 text-cyan-600" />
          <h2 className="text-3xl font-bold text-gray-900">About</h2>
        </div>

        {/* Grid for the two cards. 
          'md:grid-rows-1' makes the cards in the row the same height.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-8">
          
          {/* Card 1: Who am I? (Updated Content) */}
          <InfoCard 
            icon={<HiOutlineUser className="w-6 h-6" />}
            title="Who am I?"
          >
            <p>
              Self-taught MERN developer with a B.Com (Calicut University, 2021), 
              focused on performance, accessibility, and elegant UI/UX.
            </p>
            <p>
              I turn product ideas into fast, reliable, and maintainable web apps. My 
              workflow mixes pragmatic engineering with design systems thinking, 
              strong testing habits, and crisp micro-interactions.
            </p>
            <p>
              I ship with clarity: scoped milestones, clean commits, preview URLs, and 
              helpful docs.
            </p>
          </InfoCard>

          {/* Card 2: Highlights (Updated Content) */}
          <InfoCard
            icon={<HiOutlineSparkles className="w-6 h-6" />}
            title="Highlights"
          >
            <p>
              Things teams appreciate when working with me
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 list-disc list-inside text-gray-700">
              <li>Pixel-perfect UI</li>
              <li>API design</li>
              <li>State management</li>
              <li>Performance budgets</li>
              <li>DX: reusable components</li>
              <li>CI/CD, env safety</li>
            </ul>
          </InfoCard>

        </div>
      </div>
    </section>
  );
}