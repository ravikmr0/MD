import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Navbar from "./Navbar";
import ProductCatalog from "./ProductCatalog";
import StoreLocator from "./StoreLocator";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4">
              Fresh Dairy Products From Farm to Table
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Experience the pure taste of premium dairy products from Mayank
              Dairy, where quality meets tradition.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full">
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/2 h-full hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=800&q=80"
            alt="Fresh dairy products"
            className="object-cover h-full w-full rounded-bl-[100px]"
          />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Premium Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our range of fresh, high-quality dairy products made with
              care from the finest ingredients.
            </p>
          </div>

          <ProductCatalog />

          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=800&q=80"
                alt="Mayank Dairy Farm"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2005, Mayank Dairy has been committed to producing
                the highest quality dairy products using traditional methods
                combined with modern technology.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our farms are located in pristine countryside where our cows
                graze on lush, natural pastures, ensuring the milk we produce is
                rich in nutrients and flavor.
              </p>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Badges Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              CERTIFIED BY
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="w-24 md:w-32 bg-white p-3 rounded-lg shadow-sm text-center">
              <img
                src="https://images.unsplash.com/photo-1695653422259-8a74ffe90bf6?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="SGS Certification"
                className="w-full h-auto object-contain mb-2"
                style={{
                  content: 'url("https://i.ibb.co/Jj9fMbJ/sgs-logo.png")',
                }}
              />
              <p className="text-sm font-medium text-gray-800">Certification</p>
            </div>
            <div className="w-24 md:w-32 bg-white p-3 rounded-lg shadow-sm text-center">
              <img
                src="https://images.unsplash.com/photo-1695653422259-8a74ffe90bf6?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="ISO Certification"
                className="w-full h-auto object-contain mb-2"
                style={{
                  content: 'url("https://i.ibb.co/Jj1Lw1S/iso-logo.png")',
                }}
              />
              <p className="text-sm font-medium text-gray-800">Certification</p>
            </div>
            <div className="w-24 md:w-32 bg-white p-3 rounded-lg shadow-sm text-center">
              <img
                src="https://images.unsplash.com/photo-1695653422259-8a74ffe90bf6?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="GMP Certification"
                className="w-full h-auto object-contain mb-2"
                style={{
                  content: 'url("https://i.ibb.co/Jj1Lw1S/gmp-logo.png")',
                }}
              />
              <p className="text-sm font-medium text-gray-800">Certification</p>
            </div>
            <div className="w-24 md:w-32 bg-white p-3 rounded-lg shadow-sm text-center">
              <img
                src="https://images.unsplash.com/photo-1695653422259-8a74ffe90bf6?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="FSSAI Certification"
                className="w-full h-auto object-contain mb-2"
                style={{
                  content: 'url("https://i.ibb.co/Jj1Lw1S/fssai-logo.png")',
                }}
              />
              <p className="text-sm font-medium text-gray-800">Certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Quality Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We take pride in our meticulous process that ensures every product
              meets our high standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-blue-50 border-none shadow-md">
              <CardContent className="pt-6">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">
                  Ethical Sourcing
                </h3>
                <p className="text-gray-700 text-center">
                  Our milk comes from happy, healthy cows raised on sustainable
                  farms with the highest ethical standards.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-none shadow-md">
              <CardContent className="pt-6">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">
                  Careful Processing
                </h3>
                <p className="text-gray-700 text-center">
                  We use gentle processing methods to preserve the natural
                  goodness and nutritional value of our dairy products.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-none shadow-md">
              <CardContent className="pt-6">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">
                  Quality Testing
                </h3>
                <p className="text-gray-700 text-center">
                  Every batch undergoes rigorous quality testing to ensure it
                  meets our strict standards before reaching your table.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Store Locator Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Find Our Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Locate the nearest store where you can purchase our fresh dairy
              products.
            </p>
          </div>

          <StoreLocator />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get In Touch
              </h2>
              <p className="text-lg mb-8">
                We'd love to hear from you! Reach out with any questions about
                our products or services.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-3" />
                  <p>123 Dairy Farm Road, Countryside, State 12345</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-3" />
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-3" />
                  <p>info@mayankdairy.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mayank Dairy</h3>
              <p className="text-gray-400">
                Bringing the freshest dairy products from our farm to your table
                since 2005.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Milk
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Cheese
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Yogurt
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Butter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Mayank Dairy. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
