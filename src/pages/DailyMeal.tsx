import { Link } from 'react-router-dom';
import { ArrowRight, Check, Users, Building2, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const thaliIncludes = [
  'Fresh Hot Roti (4 pcs)',
  'Seasonal Sabzi',
  'Dal Tadka',
  'Jeera Rice',
  'Green Salad',
  'Papad & Pickle',
];

const subscriptionPlans = [
  {
    icon: Users,
    title: 'Individual',
    description: 'Perfect for personal daily meals',
    features: ['Daily fresh thali', 'Flexible timing', 'Home delivery available'],
    cta: 'Order Daily',
  },
  {
    icon: Building2,
    title: 'Office Package',
    description: 'Ideal for corporate teams',
    features: ['Bulk orders welcome', 'Customizable menu', 'Timely delivery', 'Monthly billing'],
    cta: 'Get Quote',
    popular: true,
  },
  {
    icon: Calendar,
    title: 'Monthly Subscription',
    description: 'Best value for regular customers',
    features: ['30 days thali', 'Special discounts', 'Priority service', 'Pause anytime'],
    cta: 'Subscribe',
  },
];

const DailyMeal = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6">
                Best Value Meal
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Daily Veg Thali
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-4">
                Wholesome, home-style vegetarian meal served fresh every day
              </p>
              <p className="text-6xl sm:text-7xl font-serif font-bold text-secondary mb-8">
                ₹200
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button className="btn-gold text-base" asChild>
                  <a href="https://wa.me/919784776778?text=Hi!%20I%20would%20like%20to%20order%20the%20Daily%20Thali." target="_blank" rel="noopener noreferrer">
                    Order Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" className="rounded-full border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="tel:9784776778">Call to Order</a>
                </Button>
              </div>
            </div>

            {/* Thali Card */}
            <div className="relative">
              <div className="bg-primary-foreground/10 backdrop-blur rounded-3xl p-8 lg:p-10">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-center">
                  Today's Thali Includes
                </h3>
                <ul className="space-y-4">
                  {thaliIncludes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-secondary-foreground" />
                      </span>
                      <span className="text-primary-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center">
                  <p className="text-sm text-primary-foreground/70">
                    Served Daily: 12:00 PM - 4:00 PM
                  </p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="decorative-line mx-auto mb-4" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Our <span className="text-primary">Daily Thali?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-4xl">🍽️</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Freshly Prepared
              </h3>
              <p className="text-muted-foreground">
                Every thali is made fresh with quality ingredients, just like home cooking.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Great Value
              </h3>
              <p className="text-muted-foreground">
                Complete balanced meal at just ₹200 - unbeatable quality for the price.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-4xl">🌿</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                100% Vegetarian
              </h3>
              <p className="text-muted-foreground">
                Pure vegetarian cuisine prepared with love and traditional recipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="decorative-line mx-auto mb-4" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Subscription <span className="text-primary">Plans</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that works best for you - from daily orders to monthly subscriptions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {subscriptionPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`card-premium p-6 relative ${plan.popular ? 'ring-2 ring-secondary' : ''}`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="w-14 h-14 mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <plan.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {plan.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={plan.popular ? 'btn-gold w-full' : 'btn-primary w-full'}
                  asChild
                >
                  <a
                    href={`https://wa.me/919784776778?text=Hi!%20I'm%20interested%20in%20the%20${encodeURIComponent(plan.title)}%20plan.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {plan.cta}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Try Our Thali?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Order now and experience the authentic taste of home-cooked Indian food.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="btn-gold text-base" asChild>
              <a href="https://wa.me/919784776778" target="_blank" rel="noopener noreferrer">
                WhatsApp Order
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" className="rounded-full border-2" asChild>
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DailyMeal;
