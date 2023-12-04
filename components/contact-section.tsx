const ContactSection = () => {
    return (


  <div className="bg-gradient-to-b from-[#FFEEDF] to-[#FFD8C8] container mx-auto px-4 py-10">
    <div className="text-center">
      <h1 className="text-5xl font-semibold">Discover Our New Spa</h1>
      <div className="my-4">
        <i className="fas fa-spa text-2xl"></i>
      </div>
    </div>

    <div className="flex justify-center items-center my-10">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="flex items-center justify-center">
            <img className="h-20 w-20" src="https://placehold.co/80x80" alt="Placeholder image of a green olive with leaf"/>
          </div>
          <h2 className="text-center text-xl font-bold mt-2">Discover New</h2>
          <p className="text-center">There are many variations of passages gaks the majority.</p>
        </div>
      </div>
    </div>

    <div className="flex justify-between">
      <div>
        <h3 className="text-lg font-semibold">Eye & Shadow</h3>
        <p>There are many variations of passages gaks the majority.</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Thermal Bath</h3>
        <p>There are many variations of passages gaks the majority.</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Stone Massage</h3>
        <p>There are many variations of passages gaks the majority.</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Parl&r & Beauty</h3>
        <p>There are many variations of passages gaks the majority.</p>
      </div>
    </div>

    <div className="flex justify-center items-center mt-20">
      <a href="#top" className="text-3xl text-[#8A5A44]">
        <i className="fas fa-chevron-up"></i>
      </a>
    </div>
  </div>
    );
};

export default ContactSection;
