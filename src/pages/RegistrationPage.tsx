import { Link } from 'react-router-dom';
import { PageHeader } from '@/components/sections/PageHeader';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Button } from '@/components/ui/button';
import { CreditCard, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import PaymentQR from "@/assets/QR.jpg";


const registrationFees = {
  indian: {
    title: 'Indian Delegates',
    currency: 'INR (₹)',
    categories: [
      { category: 'Students (UG/PG)', early: '₹6,000',  },
      // { category: 'Research Scholars', early: '₹4,500', regular: '₹5,500' },
      { category: 'Academicians', early: '₹8,000', },
      { category: 'Industry Professionals', early: '₹9,000', },
      { category: 'Attendee Only', early: '₹2,000', },
    ],
  },
  international: {
    title: 'International Delegates',
    currency: 'USD ($)',
    categories: [
      { category: 'Students (UG/PG)', early: '$120', },
      // { category: 'Research Scholars', early: '$200', regular: '$250' },
      { category: 'Academicians', early: '$140',  },
      { category: 'Industry Professionals', early: '$150',  },
      { category: 'Attendee Only', early: '$70',  },
    ],
  },
};

const inclusions = [
  'Conference kit with proceedings',
  'Access to all technical sessions',
  'Hybrid mode participation',
  'Certificate of participation',
  'Access to networking events',
  'E-copy of conference proceedings',
];

export default function RegistrationPage() {
  return (
    <>
      <PageHeader 
        title="Registration" 
        subtitle="Register now to secure your spot at  ICAIM-AES-2026"
      />

      {/* Fee Tables */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <SectionHeader 
            title="Registration Fees" 
            subtitle="Early bird deadline: 01st June, 2026"
          />
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {Object.values(registrationFees).map((feeGroup, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden card-elevated">
                <div className="bg-primary p-6">
                  <h3 className="font-display text-xl font-bold text-primary-foreground">
                    {feeGroup.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm">{feeGroup.currency}</p>
                </div>
                <div className="p-6">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 text-sm font-semibold text-foreground">Category</th>
                        <th className="text-center py-3 text-sm font-semibold text-accent">Early Bird</th>
                        {/* <th className="text-center py-3 text-sm font-semibold text-muted-foreground">Regular</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {feeGroup.categories.map((item, idx) => (
                        <tr key={idx} className="border-b border-border/50 last:border-0">
                          <td className="py-3 text-sm text-foreground">{item.category}</td>
                          <td className="py-3 text-sm text-center font-medium text-accent">{item.early}</td>
                          {/* <td className="py-3 text-sm text-center text-muted-foreground">{item.regular}</td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader 
              title="Registration Includes" 
            />
            <div className="grid sm:grid-cols-2 gap-4">
              {inclusions.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-card rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      {/* Payment Info */}
{/* Payment Info */}
<section className="section-padding bg-background">
  <div className="section-container">
    <div className="max-w-4xl mx-auto">
      <SectionHeader title="Payment Instructions" />

      <div className="bg-card rounded-xl p-8 card-elevated mb-8">
        <div className="flex items-start gap-4 mb-6">
          <CreditCard className="w-6 h-6 text-accent shrink-0" />

          <div className="w-full">
            <h4 className="font-semibold text-foreground mb-2">
              Bank Transfer Details
            </h4>
            <p className="text-muted-foreground text-sm mb-6">
              Please make the payment via NEFT/RTGS or scan the QR code.
            </p>

            {/* Row Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              
              {/* Bank Details */}
              <div className="bg-muted rounded-lg p-4 space-y-2 text-sm">
                <p><strong>Account Name:</strong> AEG RESEARCH SOLUTIONS</p>
                <p><strong>Bank:</strong> Axis Bank of India</p>
                <p><strong>Account No:</strong> 925020007742691</p>
                <p><strong>IFSC Code:</strong> UTIB0001687</p>
                <p><strong>Branch:</strong> Indrapuri Campus Branch</p>
              </div>

              {/* QR Code */}
              <div className="flex flex-col items-center justify-center bg-muted rounded-lg p-4">
                <img
                  src={PaymentQR}
                  alt="Payment QR Code"
                  className="w-40 h-40 rounded-md border border-border"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Scan to Pay
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Important Note */}
      <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 flex items-start gap-4">
        <AlertCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-foreground mb-2">
            Important Note
          </h4>
          <p className="text-muted-foreground text-sm">
            After making the payment, please email the transaction details along
            with a copy of the payment receipt to
            <strong> aegresearchlens@gmail.com</strong> with your paper ID
            (if applicable).
          </p>
        </div>
      </div>

    </div>
  </div>
</section>



      {/* Register CTA */}
      {/* <section className="section-padding bg-primary">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Register?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Complete your registration online and join us at ICAMMT-2024.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
              Register Online
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section> */}
    </>
  );
}
