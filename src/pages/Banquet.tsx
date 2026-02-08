import { ArrowRight, Users, Utensils, Music, Sparkles, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import banquetImage from '@/assets/banquet-hall.jpeg';

const eventTypes = [
  { icon: '🎂', title: 'Birthday Celebrations', description: 'Make birthdays memorable with our special arrangements' },
  { icon: '💍', title: 'Anniversary Parties', description: 'Celebrate your special milestones in elegant style' },
  { icon: '👯', title: 'Kitty Parties', description: 'Perfect venue for fun gatherings with friends' },
  { icon: '💼', title: 'Corporate Meetings', description: 'Professional space for business events' },
  { icon: '🎉', title: 'Small Functions', description: 'Intimate gatherings with personalized service' },
];

const features = [
  { icon: Users, title: 'Capacity', value: '50-100 Guests' },
  { icon: Utensils, title: 'Custom Menu', value: 'Tailored to Your Event' },
  { icon: Music, title: 'Sound System', value: 'Available on Request' },
  { icon: Sparkles, title: 'Décor', value: 'Elegant Arrangements' },
];

const Banquet = () => {
  return (
    <Layout>
      {/* Hero Section with Banquet Image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={banquetImage}
            alt="Banquet Hall"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-xl text-primary-foreground">
            <div className="h-1 w-16 bg-secondary rounded-full mb-6" />
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Our Elegant<br />Banquet Hall
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">
              The perfect venue for your celebrations, gatherings, and corporate events. 
              Experience premium hospitality with customized services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-gold text-base" asChild>
                <a href="https://wa.me/919784776778?text=Hi!%20I%20would%20like%20to%20book%20the%20banquet%20hall." target="_blank" rel="noopener noreferrer">
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" className="rounded-full border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="tel:9784776778">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="decorative-line mx-auto mb-4" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Perfect For <span className="text-primary">Every Occasion</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, our banquet hall adapts 
              to your unique requirements.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((event, idx) => (
              <div key={idx} className="card-premium p-6 text-center group">
                <span className="text-4xl mb-4 block">{event.icon}</span>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Menu Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-1 w-16 bg-secondary rounded-full mb-6" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
                Customized Food Menu
              </h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                We understand that every event is unique. Our culinary team works with you 
                to create a personalized menu that perfectly complements your celebration.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Traditional Indian Thali',
                  'Multi-cuisine Buffet',
                  'Live Cooking Stations',
                  'Special Dietary Requirements',
                  'Dessert & Beverage Bar',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-primary-foreground/90">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="btn-gold" asChild>
                <a href="https://wa.me/919784776778?text=Hi!%20I%20would%20like%20to%20discuss%20a%20custom%20menu%20for%20my%20event." target="_blank" rel="noopener noreferrer">
                  Discuss Your Menu
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur rounded-3xl p-8">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-center">
                Enquiry Form
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <input
                  type="text"
                  placeholder="Event Type"
                  className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <textarea
                  placeholder="Additional Details"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                />
                <Button type="submit" className="btn-gold w-full">
                  Submit Enquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Book?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact us today to discuss your event requirements and reserve your date.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="btn-gold text-base" asChild>
              <a href="https://wa.me/919784776778" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" className="rounded-full border-2" asChild>
              <a href="tel:9784776778">
                <Phone className="w-4 h-4 mr-2" />
                9784776778
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Banquet;
