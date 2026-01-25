import { PageHeader } from '@/components/sections/PageHeader';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Calendar, Clock, AlertTriangle } from 'lucide-react';

const dates = [
  {
    date: '20th February 2026',
    event: 'Call for Papers Opens',
    status: 'active',
  },
  {
    date: '10th May 2026',
    event: 'Full-Length Paper Submission Deadline',
    status: 'active',
  },
  {
    date: '20th May 2026',
    event: 'Acceptance Notification',
    status: 'upcoming',
  },
  {
    date: '01st June 2026',
    event: 'Last Date for Paper Registration',
    status: 'upcoming',
  },
  {
    date: '22–26 July 2026',
    event: 'Conference Dates',
    status: 'upcoming',
  },
];


export default function ImportantDatesPage() {
  return (
    <>
      {/* <PageHeader 
        title="Important Dates" 
        subtitle="Mark these key deadlines on your calendar"
      /> */}
       {/* <div className="min-h-screen bg-gray-50"> */}
      {/* Simple Hero Section */}
      <section className="bg-gradient-to-r  bg-green-50 text-black py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
         Important Dates
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
           Mark these key deadlines on your calendar
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {/* Alert Banner */}
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 flex items-start gap-4 mb-12">
              <AlertTriangle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
             <div>
  <h4 className="font-semibold text-foreground mb-2">
    Paper Submission Deadline Approaching!
  </h4>
  <p className="text-muted-foreground text-sm">
    Submit your full-length paper by <strong>10th May 2026</strong> to be considered
    for review and inclusion in the conference proceedings.
  </p>
</div>

            </div>

            {/* Timeline */}
            <div className="relative">
              {dates.map((item, index) => (
                <div key={index} className="flex gap-6 mb-6 last:mb-0">
                  <div className="relative">
                    <div 
                      className={`w-4 h-4 rounded-full border-4 border-background shadow-lg ${
                        item.status === 'completed' 
                          ? 'bg-muted-foreground' 
                          : item.status === 'active'
                          ? 'bg-accent animate-pulse'
                          : 'bg-primary'
                      }`}
                    />
                    {index < dates.length - 1 && (
                      <div className="absolute left-2 top-4 w-0.5 h-full bg-border -translate-x-1/2" />
                    )}
                  </div>
                  
                  <div 
                    className={`flex-1 rounded-xl p-5 -mt-1 transition-all ${
                      item.status === 'active'
                        ? 'bg-accent/10 border-2 border-accent'
                        : 'bg-card card-elevated'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {item.status === 'active' ? (
                          <Clock className="w-4 h-4 text-accent" />
                        ) : (
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                        )}
                        <span 
                          className={`font-semibold ${
                            item.status === 'active' ? 'text-accent' : 'text-foreground'
                          }`}
                        >
                          {item.date}
                        </span>
                      </div>
                      <span 
                        className={`text-sm ${
                          item.status === 'completed' 
                            ? 'text-muted-foreground line-through' 
                            : 'text-foreground font-medium'
                        }`}
                      >
                        {item.event}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      {/* <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              All deadlines are at 11:59 PM IST (Indian Standard Time). 
              Please plan your submissions accordingly.
            </p>
          </div>
        </div>
      </section> */}
    </>
  );
}
