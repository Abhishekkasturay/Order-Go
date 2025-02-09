const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Food Delivery</h2>
          <p className="text-gray-700">
            Our food delivery service offers a wide range of delicious meals
            from various cuisines, delivered right to your doorstep. We
            prioritize freshness and quality, ensuring that each dish is
            prepared with the finest ingredients. Whether you're craving a quick
            snack or a gourmet meal, our service is designed to meet your needs.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Booking</h2>
          <p className="text-gray-700">
            Our booking system is user-friendly and efficient, making it easy
            for you to reserve your tickets for trains, flights, and more. With
            real-time updates and secure payment options, you can plan your
            travels with confidence. Our customer support team is always ready
            to assist you with any queries or issues you might encounter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
