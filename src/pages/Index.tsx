import React from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import ValentineCard from '@/components/ValentineCard';

const Index = () => {
  return (
    <div className="min-h-screen romantic-gradient-bg flex flex-col items-center justify-center relative overflow-hidden">
      {/* Floating hearts background */}
      <FloatingHearts />
      
      {/* Main content */}
      <main className="relative z-10 flex-1 flex items-center justify-center w-full py-12">
        <ValentineCard />
      </main>

      {/* Handwritten footer */}
      <footer className="relative z-10 pb-8 text-center">
        <p className="footer-handwritten text-xl md:text-2xl mb-2">
          MADE BY ERICK FOR SHALLY ❤️
        </p>
        <p className="text-muted-foreground text-sm">
          Made with all my love 💕
        </p>
      </footer>
    </div>
  );
};

export default Index;
