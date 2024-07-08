import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <Separator />
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="/about" className="hover:underline">About Us</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms of Service</a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:underline">Facebook</a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:underline">Twitter</a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;