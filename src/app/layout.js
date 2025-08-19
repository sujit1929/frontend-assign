// app/layout.js
import './globals.css';
import Header from '../components/Header';
import { CartProvider } from '../context/CartContext';
import AppProviders from './Provider/AppProvider';

export const metadata = {
  title: 'My Store',
  description: 'An awesome store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          <CartProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow container mx-auto px-4 py-8">
                {children}
              </main>
            </div>
          </CartProvider>
        </AppProviders>
      </body>
    </html>
  );
}
