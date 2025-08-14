export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center text-sm px-4">
      <p>
        If you are in a crisis, please do not use this site. Instead, contact emergency services or use the resources below for immediate support.
      </p>
      <div className="mt-4 space-x-4">
        <a href="#" className="hover:underline">
          Terms & Conditions
        </a>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="/faq" className="hover:underline">
          FAQ
        </a>
        <a href="/contact" className="hover:underline">
          Contact Us
        </a>
      </div>
      <p className="mt-2">&copy; 2025 MindCare. All rights reserved.</p>
    </footer>
  );
}
