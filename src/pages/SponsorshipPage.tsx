import { Link } from 'react-router-dom';
import { PageHeader } from '@/components/sections/PageHeader';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Button } from '@/components/ui/button';
import { Star, Check, Mail, Phone, ArrowRight } from 'lucide-react';

const sponsorshipTiers = [
  {
    name: 'Platinum',
    price: '₹5,00,000',
    color: 'from-slate-400 to-slate-600',
    benefits: [
      'Logo on all conference materials',
      'Exhibition booth (Premium location)',
      'Full-page ad in proceedings',
      '10 complimentary registrations',
      'Speaking opportunity in plenary session',
      'Social media promotion',
      'Banner display at venue',
      'Exclusive networking dinner invitation',
    ],
  },
  {
    name: 'Gold',
    price: '₹3,00,000',
    color: 'from-amber-400 to-amber-600',
    featured: true,
    benefits: [
      'Logo on conference materials',
      'Exhibition booth (Standard)',
      'Half-page ad in proceedings',
      '5 complimentary registrations',
      'Panel discussion participation',
      'Social media mention',
      'Banner display at venue',
    ],
  },
  {
    name: 'Silver',
    price: '₹1,50,000',
    color: 'from-gray-300 to-gray-500',
    benefits: [
      'Logo on select materials',
      'Quarter-page ad in proceedings',
      '3 complimentary registrations',
      'Social media mention',
      'Banner display at venue',
    ],
  },
  {
    name: 'Bronze',
    price: '₹75,000',
    color: 'from-orange-400 to-orange-600',
    benefits: [
      'Logo on website',
      'Logo in proceedings',
      '2 complimentary registrations',
      'Banner display at venue',
    ],
  },
];

export default function SponsorshipPage() {
  return (
    <>
      <PageHeader 
        title="Sponsorship Opportunities" 
        subtitle="Partner with ICAMMT-2024 and showcase your brand to global researchers"
      />

      {/* Why Sponsor Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader 
              title="Why Sponsor ICAMMT-2024?" 
              subtitle="Gain visibility among leading researchers, academics, and industry professionals"
            />
            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              <div className="bg-card rounded-xl p-6 card-elevated">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Expected Attendees</div>
              </div>
              <div className="bg-card rounded-xl p-6 card-elevated">
                <div className="text-3xl font-bold text-accent mb-2">30+</div>
                <div className="text-muted-foreground">Countries Represented</div>
              </div>
              <div className="bg-card rounded-xl p-6 card-elevated">
                <div className="text-3xl font-bold text-accent mb-2">4 Days</div>
                <div className="text-muted-foreground">Of Brand Exposure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <SectionHeader 
            title="Sponsorship Packages" 
            subtitle="Choose the package that best fits your goals"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`bg-card rounded-xl overflow-hidden card-elevated ${
                  tier.featured ? 'ring-2 ring-accent scale-105' : ''
                }`}
              >
                {tier.featured && (
                  <div className="bg-accent text-accent-foreground text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className={`p-6 bg-gradient-to-br ${tier.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-white" />
                    <h3 className="font-bold text-xl text-white">{tier.name}</h3>
                  </div>
                  <div className="text-white/90 font-semibold text-lg">{tier.price}</div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Become a Sponsor
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Contact our sponsorship team to discuss partnership opportunities and customize a package for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Mail className="w-5 h-5" />
              <span>sponsorship@icammt2024.org</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Phone className="w-5 h-5" />
              <span>+91 123 456 7890</span>
            </div>
          </div>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
