function Partnerships() {
  const partners = [
    { name: 'Reliance', url: 'https://app.trickle.so/storage/public/images/usr_1bede7f328000001/74116c22-9107-49d9-828d-39f7ac8ee7f3.png?w=917&h=917' },
    { name: 'HCL', url: 'https://app.trickle.so/storage/public/images/usr_1bede7f328000001/dac0107e-01e2-4e8c-8956-168b074e76aa.png?w=3000&h=2000' },
    { name: 'IBM', url: 'https://app.trickle.so/storage/public/images/usr_1bede7f328000001/ac38f907-2164-4a31-bd8a-596a3aa9a39b.png?w=800&h=600' },
    { name: 'CRIF', url: 'https://app.trickle.so/storage/public/images/usr_1bede7f328000001/f35c906f-2658-47c8-8ffc-9540e2dc8df2.png?w=184&h=82' },
    { name: 'ADP', url: 'https://app.trickle.so/storage/public/images/usr_1bede7f328000001/393c2b7f-cd64-43f6-aebc-36f8d87726cb.png?w=500&h=250' },
    { name: 'Bayer', url: 'https://app.trickle.so/storage/public/images/usr_1bede7f328000001/89c13efe-fb42-42b5-bdd4-af3f9ec1a2fd.png?w=500&h=498' }
  ];

  return (
    <section id="clients" className="section-padding bg-white" data-name="partnerships" data-file="components/Partnerships.js">
      <h2 className="section-title">
        Our Proven <span className="blue-text">Partnerships</span>
      </h2>
      <p className="section-subtitle">
        Successful Collaborations With the <span className="blue-text font-medium">Industry's Best</span>
      </p>

      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mt-12 max-w-6xl mx-auto">
        {partners.map((partner, index) => (
          <img 
            key={index}
            src={partner.url} 
            alt={`${partner.name} logo`} 
            className="h-10 md:h-14 object-contain max-w-[140px] opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
            onError={(e) => {
                e.target.style.display = 'none'; // hide broken fallback images
            }}
          />
        ))}
      </div>
    </section>
  );
}