const TestimonialsSection = () => {
    return (
        <div className="py-16 bg-gray-100">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800">Client Testimonials</h2>
                <p className="mt-2 text-gray-600">Hear from our happy clients</p>
            </div>
            <div className="mt-8 max-w-4xl mx-auto">
                {/* Repeat this block for each testimonial */}
                <div className="bg-white p-6 rounded-lg shadow mb-6">
                    <p className="text-gray-700">"I had an incredible experience at My Spa. The ambiance was perfect, and the massage therapy was exactly what I needed to relax and unwind. Highly recommend!"</p>
                    <div className="mt-4">
                        <p className="font-bold">- Jane Doe</p>
                    </div>
                </div>
                {/* ... other testimonials */}
            </div>
        </div>
    );
};

export default TestimonialsSection;
