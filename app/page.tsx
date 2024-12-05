import { Navbar } from '@/components/layout/navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Welcome to Next.js 14
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Start building your application with modern tools and best practices.
          </p>
        </div>
      </main>
    </div>
  );
}