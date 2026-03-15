import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow flex items-center justify-center px-6 py-32">
        <div className="max-w-md w-full text-center space-y-8">
          <h1 className="text-9xl font-light text-gray-200 tracking-tighter">404</h1>
          <div className="space-y-4">
            <h2 className="text-3xl font-light text-gray-900 uppercase tracking-tight">Page Not Found</h2>
            <p className="text-gray-500 font-light leading-relaxed">
              The architectural detail you are looking for has either been moved or does not exist.
            </p>
          </div>
          <div className="pt-8">
            <Link 
              href="/" 
              className="inline-block px-12 py-4 bg-black text-white text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#BBA899] transition-colors duration-300"
            >
              Return Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
