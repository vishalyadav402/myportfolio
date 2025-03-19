import React from 'react';
import PopupModal from './PopupModal';

const Services = () => {
  return (
    <>
      <section className="bg-gray-900 text-gray-300">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Services</h2>

            <p className="mt-4 text-gray-300">
              We offer a wide range of professional services to help businesses grow and succeed in the digital world.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Web Development */}
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-[#db2778]">Web Development</h2>
              <ul className="mt-1 text-sm text-gray-300 font-semibold list-disc ml-4">
                <li>Portfolio Website (Static/Dynamic)</li>
                <li>eCommerce Website</li>
                <li>CRM (Content Resource Management)</li>
                <li>Custom Website Design & Development</li>
                <li>Event Websites</li>
              </ul>
            </a>

            {/* App Development */}
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-[#db2778]">App Development</h2>
              <p className="mt-1 text-sm text-gray-300 font-semibold">
                We specialize in developing applications for multiple platforms:
              </p>
              <ul className="mt-1 text-sm text-gray-300 list-disc ml-4">
                <li>Android</li>
                <li>Windows</li>
                <li>iOS</li>
              </ul>
            </a>

            {/* Gaming Application */}
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-[#db2778]">Gaming Application</h2>
              <p className="mt-1 text-sm text-gray-300 font-semibold">
                Design and development of gaming applications tailored to user experiences and engagement.
              </p>
            </a>

            {/* Ecommerce Application */}
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-[#db2778]">eCommerce Application</h2>
              <p className="mt-1 text-sm text-gray-300 font-semibold">
                Develop custom eCommerce applications for businesses to expand their reach and improve online sales.
              </p>
            </a>

            {/* Management Application */}
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-[#db2778]">Management Application</h2>
              <p className="mt-1 text-sm text-gray-300 font-semibold">
                Create applications for managing various business processes, enhancing efficiency and productivity.
              </p>
            </a>

            {/* Inventory Management */}
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-[#db2778]">Inventory Management</h2>
              <p className="mt-1 text-sm text-gray-300 font-semibold">
                Develop customized inventory management systems to streamline stock control and order processing.
              </p>
            </a>
          </div>

          <div className="mt-12 text-center">
          <PopupModal/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
