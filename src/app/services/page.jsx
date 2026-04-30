'use client';
import Section from '../../components/Section';
import Card from '../../components/Card';
import { Zap, BookOpen, Target, Users } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: Users, title: 'Mentorship Groups', description: 'Get paired with experienced mentors who guide your personal and professional development.' },
    { icon: BookOpen, title: 'Growth Workshops', description: 'Interactive sessions focused on high-impact skills, from financial literacy to leadership.' },
    { icon: Target, title: 'Goal Accountability', description: 'Structured systems to help you stay committed to your vision and achieve your milestones.' },
    { icon: Zap, title: 'Network Access', description: 'Connect with a global tribe of high-achievers and potential collaborators.' },
  ];

  return (
    <main>
      <Section>
        <div className="text-center mb-16 pt-10">
          <h1 className="text-4xl sm:text-6xl font-bold text-dark-gray mb-6">
            Our <span className="text-jade-green">Services</span>
          </h1>
          <p className="text-xl text-mid-gray max-w-2xl mx-auto">
            We provide the ecosystem, tools, and support necessary for intentional growth and lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} {...service} index={index} />
          ))}
        </div>
      </Section>
    </main>
  );
}