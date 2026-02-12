import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, Truck, Building2, Users, ChefHat, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import heroImage from '@/assets/hero-exterior.jpeg';
import banquetImage from '@/assets/banquet-hall.jpeg';
import interior1 from '@/assets/interior-1.jpeg';
import interior2 from '@/assets/interior-2.jpeg';
import interior3 from '@/assets/interior-3.jpeg';

const services = [
  { icon: Utensils, title: 'Dine-in', description: 'Enjoy our warm ambiance' },
  { icon: Truck, title: 'Delivery', description: 'Fresh food at your door' },
  { icon: Building2, title: 'Takeaway', description: 'Quick pickup available' },
  { icon: Users, title: 'Corporate', description: 'Office meal packages' },
  { icon: ChefHat, title: 'Catering', description: 'Events & parties' },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    text: 'The best vegetarian food in Jaipur! The Daily Thali is incredible value and tastes like home-cooked food.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    text: 'We celebrated our anniversary here. The banquet hall is beautiful and the food was exceptional.',
    rating: 5,
  },
  {
    name: 'Anjali Gupta',
    text: 'Their paneer dishes are to die for! Great ambiance and friendly staff. Highly recommended.',
    rating: 5,
  },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section - 28thali Style */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image - Right Side */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute right-0 top-0 w-full lg:w-3/4 h-full">
            <img
              src={heroImage}
              alt="Shree Govindam, Masala House"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Gradient Overlay - Fades to cream on left */}
          <div className="hero-gradient absolute inset-0" />
          {/* Dark overlay on image for text readability on mobile */}
          <div className="absolute inset-0 bg-foreground/20 lg:hidden" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 pt-32 pb-20 lg:pt-20">
          <div className="max-w-2xl">
            {/* Decorative Element */}
            <div className="decorative-line mb-6 animate-fade-in" />
            
            {/* Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-4 animate-fade-in">
              Shree Govindam,<br />
              <span className="text-primary">Masala House</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-serif text-muted-foreground mb-4 animate-fade-in-delay">
              Where Taste Meets Tradition
            </p>

            {/* Features */}
            <p className="text-base sm:text-lg text-foreground/70 mb-8 animate-fade-in-delay">
              Pure Veg • Authentic Taste • Fresh Daily Meals
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              <Button className="btn-gold text-base" asChild>
                <a href="https://wa.me/919784776778" target="_blank" rel="noopener noreferrer">
                  Order Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all" asChild>
                <Link to="/menu">
                  View Menu
                </Link>
              </Button>
              <Button variant="ghost" className="rounded-full text-secondary hover:bg-secondary/10" asChild>
                <Link to="/daily-meal">
                  Daily Meal @ ₹200
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-secondary" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="decorative-line" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                A Culinary Journey<br />of <span className="text-primary">Pure Flavors</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Shree Govindam, Masala House, we believe in the power of authentic Indian 
                vegetarian cuisine. Every dish tells a story of tradition, crafted with the 
                freshest ingredients and recipes passed down through generations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Located in the heart of Jaipur, we invite you to experience the warmth of 
                Indian hospitality and the richness of flavors that make every meal memorable.
              </p>
              <Button className="btn-primary" asChild>
                <Link to="/menu">
                  Explore Our Menu
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="card-premium overflow-hidden">
                <img
                  src={interior3}
                  alt="Restaurant Interior"
                  className="w-full h-80 object-cover zoom-on-hover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-card">
                <p className="font-serif text-3xl font-bold">15+</p>
                <p className="text-sm text-primary-foreground/80">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Gallery */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="decorative-line mx-auto mb-4" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Ambiance</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Step into a world of comfort and elegance. Our thoughtfully designed spaces 
              create the perfect setting for every occasion.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[interior1, interior2, interior3].map((img, idx) => (
              <div key={idx} className="card-premium overflow-hidden group">
                <img
                  src={img}
                  alt={`Interior ${idx + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Meal Highlight */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-primary-foreground/10 rounded-3xl p-8 backdrop-blur">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                    Best Value
                  </span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
                  Daily Veg Thali
                </h3>
                <p className="text-5xl font-serif font-bold text-secondary mb-4">₹200</p>
                <ul className="space-y-2 mb-6">
                  {['Fresh Roti', 'Seasonal Sabzi', 'Dal Tadka', 'Jeera Rice', 'Salad & Papad'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-primary-foreground/90">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="btn-gold w-full sm:w-auto" asChild>
                  <Link to="/daily-meal">
                    Order Daily Meal
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="decorative-line mx-auto lg:mx-0 mb-4" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Taste Home-Cooked<br />Goodness Daily
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Experience the comfort of a wholesome Indian thali served fresh every day. 
                Perfect for office lunch, family meals, or when you crave authentic flavors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="decorative-line mx-auto mb-4" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="card-premium p-6 text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banquet Preview */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="card-premium overflow-hidden">
              <img
                src={banquetImage}
                alt="Banquet Hall"
                className="w-full h-96 object-cover zoom-on-hover"
              />
            </div>
            <div className="space-y-6">
              <div className="decorative-line" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Celebrate Your<br /><span className="text-primary">Special Moments</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                From intimate gatherings to grand celebrations, our elegant banquet hall 
                provides the perfect backdrop for your special occasions. We offer customized 
                menus and impeccable service to make every event memorable.
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {['Birthdays', 'Anniversaries', 'Kitty Parties', 'Corporate Events'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="btn-primary" asChild>
                <Link to="/banquet">
                  Book Banquet
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="decorative-line mx-auto mb-4" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our <span className="text-primary">Guests Say</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="card-premium p-6 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-secondary/30" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Home;
