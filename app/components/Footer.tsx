export function Footer() {
  return (
    <footer className="bg-neutral-white border-b border-neutral-divisor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 lg:gap-8">
          <h2 className="font-heading text-[40px] leading-tight text-neutral-black font-bold tracking-tight">
            Car<span className="text-primary-pure">WEB</span>
          </h2>
          <div className="ml-auto flex items-center gap-2 text-body-md font-medium text-neutral-text hover:text-primary-pure transition-colors">
            <p>Desenvolvido por André Luís Fernandes</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
