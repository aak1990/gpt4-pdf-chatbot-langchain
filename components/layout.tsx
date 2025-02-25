interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4">
      {/* <header className="container sticky top-0 z-40 bg-white">
        <div className="h-16 border-b border-b-slate-200 py-4">
          <nav className="ml-4 pl-6">
            <a href="#" className="hover:text-slate-600 cursor-pointer">
              Home
            </a>
          </nav>
        </div>
      </header> */}
      <div>
        <main
          className="flex w-full flex-1 flex-col overflow-hidden mt-4"
          style={{
            color: '#b4a5a5',
  //           backgroundColor: 'black',
  //           backgroundImage: 'url("/bg11.png")',
  //           backgroundRepeat: 'no-repeat', /* Do not repeat the image */
  // backgroundSize: 'cover',
  // backgroundPosition: 'center',
            background:
            'radial-gradient(ellipse at 100% 100%, hsl(254 100% 6% / 0.07), hsl(0 0% 0% / 0), transparent), linear-gradient(to bottom right, hsl(176 73.0% 7.3%), hsl(230 36.4% 12.9%), hsl(319 41.0% 16.0%), hsl(192 75.9% 10.8%))',
            // 'linear-gradient(90deg, rgba(10,70,88,1) 0%, rgba(70,9,80,1) 100%)',
            // 'linear-gradient(90deg, rgba(13,51,62,1) 0%, rgba(50,7,57,1) 100%)',
             
            margin: '0',
            padding: '1rem',
            height: '100vh',
            // width: '100vw',
            overflow: 'auto',
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
