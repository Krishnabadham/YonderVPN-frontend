import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button";
import YonderVPNImage from "../assets/logo.jpg"
const Index = () => {
    const { loginWithRedirect,  } = useAuth0();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Header */}
      <header className="w-full py-4 px-6 flex justify-between items-center bg-gray-800">
        <div className="flex items-center space-x-2">
          <img src={YonderVPNImage} alt="YonderVPN Logo" className="h-8" />
          <span className="text-xl font-bold">YonderVPN</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#platforms" className="hover:text-blue-400">Platforms</a>
          <a href="#servers" className="hover:text-blue-400">Servers</a>
          <a href="#feedback" className="hover:text-blue-400">Feedback</a>
        </nav>
        <Button className="bg-blue-500 hover:bg-blue-600 px-4 py-2"
        onClick={async () => await loginWithRedirect()}>
            Get YonderVPN
        </Button>
      </header>
      
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-16 px-4">
        <h1 className="text-5xl font-extrabold text-blue-400">Secure & Private VPN</h1>
        <p className="text-lg text-gray-300 mt-4 max-w-xl">
          YonderVPN ensures your privacy with encrypted, secure, and fast connections worldwide.
        </p>
        <Button className="mt-6 bg-green-500 hover:bg-green-600 text-lg px-6 py-3"
            onClick={async () => await loginWithRedirect()}>
            Get Started
        </Button>
      </section>
      
      {/* Footer */}
      <footer className="w-full py-6 text-center mt-auto bg-gray-800">
        <p>&copy; {new Date().getFullYear()} YonderVPN. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
