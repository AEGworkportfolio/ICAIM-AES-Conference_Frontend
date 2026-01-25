interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="section-container text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto animate-fade-up stagger-1">
            {subtitle}
          </p>
        )}
        <div className="w-20 h-1 gold-gradient rounded-full mt-6 mx-auto animate-fade-up stagger-2" />
      </div>
    </section>
  );
}
