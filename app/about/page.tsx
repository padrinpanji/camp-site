export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Camping Directories</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted companion for discovering the perfect camping experiences across the country.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            We believe that everyone deserves access to nature's beauty and the peace that comes with outdoor adventures. 
            Our mission is to make it easier for campers of all experience levels to find and book the perfect campground 
            for their needs.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you're looking for a family-friendly campground with full amenities or a remote wilderness spot 
            for a solo adventure, we're here to help you discover your next favorite camping destination.
          </p>
        </div>
        <div className="h-64 bg-green-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-600">🏕️ Mission Image</span>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-3">Comprehensive Search</h3>
            <p className="text-gray-600">
              Filter campgrounds by location, amenities, price, and type to find exactly what you're looking for.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-3">Verified Information</h3>
            <p className="text-gray-600">
              All campground information is regularly updated and verified to ensure accuracy and reliability.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold mb-3">Real Reviews</h3>
            <p className="text-gray-600">
              Read honest reviews from fellow campers to make informed decisions about your next camping trip.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-600">👤</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Alex Johnson</h3>
            <p className="text-gray-600 mb-2">Founder & CEO</p>
            <p className="text-sm text-gray-500">Passionate camper with 15+ years of outdoor experience</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-600">👤</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Sarah Chen</h3>
            <p className="text-gray-600 mb-2">Head of Operations</p>
            <p className="text-sm text-gray-500">Expert in campground management and customer service</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-600">👤</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Mike Rodriguez</h3>
            <p className="text-gray-600 mb-2">Lead Developer</p>
            <p className="text-sm text-gray-500">Building the technology that connects campers with nature</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-green-50 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">By the Numbers</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <p className="text-gray-600">Campgrounds Listed</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
            <p className="text-gray-600">Happy Campers</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">50</div>
            <p className="text-gray-600">States Covered</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">4.8</div>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Have questions or suggestions? We'd love to hear from you!
        </p>
        <div className="flex justify-center space-x-8">
          <div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-green-600">hello@campingdirectories.com</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-green-600">(555) 123-CAMP</p>
          </div>
        </div>
      </div>
    </div>
  )
}