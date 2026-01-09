function Footer() {
  return (
    <footer className="bg-[#083701] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#C7F43E]">Green Power</h2>
          <p className="text-sm mt-4 text-white/80">
            Powering a sustainable future with reliable and eco-friendly solar
            energy solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Residential Solar</li>
            <li>Commercial Solar</li>
            <li>Wind Energy</li>
            <li>Hydropower Systems</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>📍 India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ info@greenpower.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Green Power. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
