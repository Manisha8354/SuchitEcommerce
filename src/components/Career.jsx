import React from 'react';

const Careers = () => {
  return (
    <div className="bg-white text-black p-8 md:p-12 lg:p-16">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Careers at WiseTech Appliances</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Join Our Team!</h2>
        <p className="mb-4">
          At WiseTech Appliances, we believe that our people are our greatest asset. We are dedicated to creating a dynamic work environment that fosters innovation, teamwork, and personal growth. As a leading e-commerce platform for electric appliances, we are always looking for passionate individuals to join our team and help us deliver exceptional products and experiences to our customers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Work with Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Innovative Environment:</strong> Be part of a team that encourages creativity and forward-thinking. We embrace new ideas and strive to push the boundaries of technology and customer service.</li>
          <li><strong>Career Development:</strong> We invest in our employees' professional growth. With training programs, workshops, and mentorship opportunities, you’ll have the tools you need to succeed and advance in your career.</li>
          <li><strong>Collaborative Culture:</strong> Work with talented professionals who are dedicated to collaboration and mutual support. Our diverse team brings unique perspectives, making us stronger as a whole.</li>
          <li><strong>Employee Benefits:</strong> We offer a competitive salary, health benefits, and employee discounts on our products, ensuring that our team is well taken care of.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
        <div className="space-y-6">
          {[
            {
              title: 'Customer Service Representative',
              location: '[City/Remote]',
              responsibilities: [
                'Assist customers with inquiries regarding products and orders.',
                'Provide technical support for electric appliances.',
                'Maintain customer satisfaction through effective communication.',
              ],
            },
            {
              title: 'Digital Marketing Specialist',
              location: '[City/Remote]',
              responsibilities: [
                'Develop and execute online marketing campaigns.',
                'Analyze website traffic and conversion metrics.',
                'Manage social media accounts and content strategy.',
              ],
            },
            {
              title: 'Warehouse Operations Manager',
              location: '[City]',
              responsibilities: [
                'Oversee daily warehouse operations and inventory management.',
                'Ensure timely order fulfillment and shipment.',
                'Lead a team of warehouse staff, promoting safety and efficiency.',
              ],
            },
            {
              title: 'E-commerce Product Manager',
              location: '[City/Remote]',
              responsibilities: [
                'Manage product listings, descriptions, and pricing strategies.',
                'Collaborate with marketing and sales teams to boost product visibility.',
                'Conduct market research to identify trends and opportunities.',
              ],
            },
          ].map((job, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md bg-red-50">
              <h3 className="text-lg font-bold">{job.title}</h3>
              <p className="italic">{job.location}</p>
              <h4 className="font-semibold mt-2">Responsibilities:</h4>
              <ul className="list-disc list-inside">
                {job.responsibilities.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
        <p className="mb-4">
          If you are excited about joining a team that values innovation and customer satisfaction, we want to hear from you! Please send your resume and a cover letter to <a href="mailto: info@wisetechappliances.com" className="text-red-600 hover:underline">info@wisetechappliances.com</a>. Include the position title you’re applying for in the subject line.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Customer Focus:</strong> We prioritize our customers and strive to exceed their expectations with every interaction.</li>
          <li><strong>Integrity:</strong> We believe in being honest and transparent in all our dealings.</li>
          <li><strong>Teamwork:</strong> We work together to achieve common goals and celebrate our successes as a team.</li>
          <li><strong>Excellence:</strong> We are committed to delivering the highest quality in our products and services.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p>
          For more information about career opportunities at WiseTech Appliances, follow us on social media or visit our website. Join us in our mission to provide top-quality electric appliances and an outstanding shopping experience!
        </p>
      </section>

      <footer className="mt-8">
        <h3 className="text-xl font-bold text-maroon-600">WiseTech Appliances</h3>
        <p>Empowering Lives with Innovation</p>
      </footer>
    </div>
  );
};

export default Careers;
