import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface MenuItem {
  name: string;
  price: number;
}

interface MenuCategory {
  id: string;
  name: string;
  emoji: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: 'smoothies',
    name: 'Smoothies',
    emoji: '🥤',
    items: [
      { name: 'Mango Smoothie', price: 235 },
      { name: 'Strawberry Smoothie', price: 235 },
      { name: 'Mix Berry Smoothie', price: 225 },
      { name: 'Banana Smoothie', price: 225 },
      { name: 'Passion Fruit Smoothie', price: 245 },
    ],
  },
  {
    id: 'shakes',
    name: 'Shakes',
    emoji: '🥛',
    items: [
      { name: 'Cookies & Berry Shake', price: 235 },
      { name: 'Strawberry Shake', price: 235 },
      { name: 'Nutella Shake', price: 235 },
      { name: 'KitKat Shake', price: 235 },
      { name: 'Oreo Shake', price: 235 },
      { name: 'Lychee Shake', price: 245 },
      { name: 'Blueberry Shake', price: 245 },
      { name: 'Chocolate Shake', price: 235 },
      { name: 'Biscoff Shake', price: 275 },
    ],
  },
  {
    id: 'tea-coffee',
    name: 'Tea / Coffee',
    emoji: '☕',
    items: [
      { name: 'Green Tea', price: 50 },
      { name: 'Lemon Tea', price: 50 },
      { name: 'Masala Chai', price: 60 },
      { name: 'Deshi Chai', price: 50 },
      { name: 'Hot Coffee', price: 95 },
    ],
  },
  {
    id: 'mojitos',
    name: 'Mojitos',
    emoji: '🍹',
    items: [
      { name: 'Masala Lemonade', price: 200 },
      { name: 'Blue Level Mojito', price: 200 },
      { name: 'Virgin Mojito', price: 235 },
      { name: 'Cranberry Mojito', price: 235 },
      { name: 'Watermelon Mojito', price: 200 },
      { name: 'Fruit Punch', price: 235 },
      { name: 'Black Current', price: 235 },
      { name: 'Love Affair', price: 225 },
      { name: 'Spicy Guava', price: 245 },
    ],
  },
  {
    id: 'appetizers',
    name: 'Appetizers',
    emoji: '🍟',
    items: [
      { name: 'Cheese Corn Cigar Roll', price: 255 },
      { name: 'Crispy Paneer Finger', price: 235 },
      { name: 'French Fries', price: 190 },
      { name: 'Cheese French Fries', price: 205 },
      { name: 'Cheese Corn Bite', price: 235 },
      { name: 'Potato Wedges', price: 225 },
      { name: 'Potato Wedges with Cheese', price: 270 },
      { name: 'Vada Pav', price: 150 },
      { name: 'Crunchy Crispy Corn', price: 285 },
      { name: 'Garlic Bread', price: 245 },
      { name: 'Cheese Garlic Bread', price: 285 },
    ],
  },
  {
    id: 'rolls',
    name: 'Rolls',
    emoji: '🌯',
    items: [
      { name: 'Veg Spring Roll', price: 270 },
      { name: 'Veg Chaupy', price: 270 },
      { name: 'Kadai Paneer Roll', price: 290 },
      { name: 'Paneer Tikka Roll', price: 315 },
    ],
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches',
    emoji: '🥪',
    items: [
      { name: 'Cottage Cheese Sandwich', price: 170 },
      { name: 'Grilled Cheese Sandwich', price: 150 },
      { name: 'Paneer Tikka Sandwich', price: 190 },
      { name: 'Bombay Sandwich', price: 195 },
      { name: 'Corn Spinach Sandwich', price: 225 },
    ],
  },
  {
    id: 'burgers',
    name: 'Burgers',
    emoji: '🍔',
    items: [
      { name: 'Classic Potato Veg Burger', price: 130 },
      { name: 'Jumbo Veg Burger', price: 150 },
      { name: 'Crispy Paneer Burger', price: 140 },
      { name: 'Cottage Cheese Burger', price: 150 },
    ],
  },
  {
    id: 'healthy',
    name: 'Healthy Corner',
    emoji: '🥗',
    items: [
      { name: 'Fresh Fruits Overload Platter', price: 255 },
      { name: 'Greek Salad', price: 265 },
      { name: 'Fresh Garden Vegetable Salad', price: 295 },
      { name: 'Italian Pasta Salad', price: 315 },
    ],
  },
  {
    id: 'soups',
    name: 'Soups',
    emoji: '🍜',
    items: [
      { name: 'Hot & Sour Soup', price: 290 },
      { name: 'Veg Manchow Soup', price: 265 },
      { name: 'Cream of Broccoli Soup', price: 290 },
      { name: 'Cream of Tomato Soup', price: 265 },
      { name: 'Sweet Corn Soup', price: 265 },
    ],
  },
  {
    id: 'pizzas',
    name: 'Pizzas',
    emoji: '🍕',
    items: [
      { name: 'Farm Fresh Pizza', price: 375 },
      { name: 'Margherita Pizza', price: 345 },
      { name: 'OTC Pizza', price: 355 },
      { name: 'Pizza Gardenia', price: 395 },
      { name: 'Paneer Tikka Pizza', price: 395 },
      { name: 'American Sweet Corn Delight Pizza', price: 395 },
    ],
  },
  {
    id: 'pasta',
    name: 'Pasta',
    emoji: '🍝',
    items: [
      { name: 'Penne Arrabiata', price: 375 },
      { name: 'Penne Alfredo', price: 395 },
      { name: 'Penne Pesto Pasta', price: 365 },
      { name: 'Penne Primavera', price: 385 },
      { name: 'Baked Macaroni', price: 395 },
      { name: 'Aglio Olio with Vegetable', price: 370 },
      { name: 'Aglio Olio Penne', price: 395 },
      { name: 'Garden Vegetable Lasagna', price: 425 },
    ],
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="decorative-line mx-auto mb-4" />
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Menu</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated selection of authentic vegetarian dishes, 
            refreshing beverages, and delightful treats.
          </p>
        </div>
      </section>

      {/* Menu Tabs */}
      <section className="section-padding pt-8">
        <div className="container mx-auto">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            {/* Category Tabs - Scrollable */}
            <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-md py-4 -mx-4 px-4 mb-8">
              <TabsList className="w-full h-auto flex flex-wrap gap-2 bg-transparent justify-start">
                {menuData.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className={cn(
                      'px-4 py-2 rounded-full text-sm font-medium transition-all',
                      'data-[state=active]:bg-primary data-[state=active]:text-primary-foreground',
                      'data-[state=inactive]:bg-muted data-[state=inactive]:hover:bg-muted/80'
                    )}
                  >
                    <span className="mr-1.5">{category.emoji}</span>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Menu Items */}
            {menuData.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="card-premium p-5 flex justify-between items-center group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{category.emoji}</span>
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </span>
                      </div>
                      <span className="font-serif text-lg font-semibold text-secondary">
                        ₹{item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Order CTA */}
          <div className="mt-12 text-center">
            <div className="card-premium p-8 bg-primary text-primary-foreground inline-block">
              <p className="text-lg mb-4">Ready to order? Contact us now!</p>
              <a
                href="https://wa.me/919784776778"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
