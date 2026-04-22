function TrustedBy() {
  const logos = [
    { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Meta', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'Netflix', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' }
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100" data-name="trusted-by" data-file="components/TrustedBy.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
          Trusted by forward-thinking enterprises globally
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <img 
              key={index}
              src={logo.url} 
              alt={`${logo.name} logo`} 
              className="h-8 md:h-10 object-contain max-w-[120px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}