import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

const Blog = () => {
  const blogs = [
    {
      imgSrc: "/api/placeholder/400/300",
      author: "Alex Whitter",
      date: "5 Jun 2023",
      title: "Not Which Jewelry Style Fits Your Personality"
    },
    {
      imgSrc: "/api/placeholder/400/300",
      author: "Susan Williams",
      date: "4 Jun 2023",
      title: "PM Jewellery models"
    },
    {
      imgSrc: "/api/placeholder/400/300",
      author: "Caroline Wu",
      date: "4 Jun 2023",
      title: "What is Weatherizing?"
    },
    {
      imgSrc: "/api/placeholder/400/300",
      author: "Alex Whitter",
      date: "3 Jun 2023",
      title: "Not Which Jewelry Style Fits Your Personality"
    },
    {
      imgSrc: "/api/placeholder/400/300",
      author: "Susan Williams",
      date: "3 Jun 2023",
      title: "PM Jewellery models"
    },
    {
      imgSrc: "/api/placeholder/400/300",
      author: "Caroline Wu",
      date: "3 Jun 2023",
      title: "What is Weatherizing?"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center" style={{backgroundImage: "url('/api/placeholder/1200/400')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-2">5 EFFICIENT RULES HOW TO</h1>
            <h2 className="text-3xl font-bold mb-4">ORGANIZE YOUR WORKING PLACE</h2>
            <p className="text-lg">Relationship tips couples therapists are giving all the time</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 flex">
        {/* Left Column - Main Content */}
        <div className="w-2/3 pr-8">
          <h2 className="text-2xl font-bold mb-4">KNICKER LINING CONCEALED BACK ZIP FASTEN SWING STYLE HIGH WAISTED DOUBLE LAYER FULL PATTERN FLORAL</h2>
          <p className="mb-4">Effortless comfortable full leather lining eye-catching unique detail to the toe low 'cut-away' sides clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design.</p>
          <p className="mb-4">Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket. Effortless comfortable full leather lining eye-catching unique detail to the toe low 'cut-away' sides clean and sleek.</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Crisp fresh iconic elegant timeless clean perfume</li>
            <li>Neck structured shape rich fabric relaxed fitting size</li>
            <li>Stretch lining hem above knee barrel cuff welt pockets</li>
          </ul>
          <p>See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket. Effortless comfortable full leather lining eye-catching unique detail to the toe low 'cut-away' sides clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design.</p>
        </div>

        {/* Right Column - Sidebar */}
        <div className="w-1/3">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <FaFacebookF className="text-gray-600 hover:text-blue-600" />
              <FaTwitter className="text-gray-600 hover:text-blue-400" />
              <FaInstagram className="text-gray-600 hover:text-pink-600" />
              <FaPinterest className="text-gray-600 hover:text-red-600" />
              <FaYoutube className="text-gray-600 hover:text-red-600" />
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">SUBSCRIBE</h3>
            <p className="mb-4">Subscribe to our newsletter and receive a selection of cool articles every week</p>
            <input type="email" placeholder="Your email" className="w-full p-2 border border-gray-300 rounded mb-2" />
            <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">SUBSCRIBE</button>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">THE LATEST</h3>
            <ul className="space-y-4">
              {[1, 2, 3].map((item) => (
                <li key={item} className="flex items-start">
                  <img src="/api/placeholder/80/80" alt="Thumbnail" className="w-20 h-20 object-cover mr-4" />
                  <div>
                    <h4 className="font-semibold mb-1">10 Habits That Will Change Your Life for the Better</h4>
                    <p className="text-sm text-gray-500">2 months ago</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Blogs Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Related Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={blog.imgSrc} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <p className="text-sm text-gray-500">{`${blog.author} • ${blog.date}`}</p>
                  <h3 className="font-semibold text-lg mb-4">{blog.title}</h3>
                  <a href="#" className="text-orange-500 hover:underline flex items-center">
                    Read More <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;