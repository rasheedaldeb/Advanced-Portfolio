import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: " E-Commerce",
    img: "/advanced-e-commerce.png",
    desc: "An e-commerce web app allows users to browse and purchase products online. It typically includes features like product catalogs, shopping carts, and secure payment gateways. Additionally, it offers user accounts for order tracking and personalized experiences.",
    url: "https://e-commerce-react-beta-ecru.vercel.app/",
  },
  {
    id: 2,
    title: "B-Book",
    img: "/book.png",
    desc: "A book browsing web app allows users to explore, and read,eBooks from a digital library. It typically features a user-friendly interface for searching and categorizing books, along with options for bookmarking and note-taking.",
    url: "https://books-website-coral.vercel.app/",
  },
  {
    id: 3,
    title: "Travel",
    img: "/travel.png",
    desc: "A travel web app helps you plan your trips by organizing flights, accommodations, and activities in one place. It offers features like itinerary creation, route optimization, and real-time collaboration with friends1. Additionally, it provides personalized recommendations and budget tracking to enhance your travel experience.",
    url: "https://rasheedaldeb.github.io/react-travel-website/",
  },
  {
    id: 4,
    title: "Admin Dashboard",
    img: "/dashboard.png",
    desc: "An admin dashboard, user-friendly interface for administrators to manage and monitor a website or application. It features interactive charts, real-time data visualization, and intuitive navigation for tasks like user management and content updates",
    url: "https://admin-dashboard-kappa-ivory.vercel.app/",
  },
  {
    id: 5,
    title: "Organick",
    img: "/food.png",
    desc: "A food ingredients website made using only HTML and CSS features a clean, organized layout with sections for different ingredient categories, detailed descriptions, and vibrant images. It includes a search bar for easy navigation and a contact form for inquiries. The design is responsive.",
    url: "https://rasheedaldeb.github.io/food-multipages/",
  },
  {
    id: 6,
    title: "Furniture",
    img: "/fernuture.png",
    desc: "A furniture website made using HTML and CSS typically features a clean, modern design with a responsive layout that adapts to different screen sizes. It includes sections for product listings, a navigation bar, and a contact form. The site uses CSS for styling elements like fonts, colors, and spacing.",
    url: "https://rasheedaldeb.github.io/Furniture-page/",
  },
  {
    id: 7,
    title: "Shopping Cart",
    img: "/shopping.png",
    desc: "A shopping cart website using HTML, CSS, and JavaScript, Structures the product listings and cart elements, Styles the layout, buttons, and overall design, Manages adding/removing items, updating quantities, and calculating the total price.",
    url: "https://rasheedaldeb.github.io/shoping-cart/",
  },
  {
    id: 8,
    title: "Macc-Essential",
    img: "/images/macc.png",
    desc: "A shopping cart website using react, Api, protected route, Structures the product listings and cart elements, Styles the layout, buttons, and overall design, Manages adding/removing items, updating quantities, and calculating the total price.",
    url: "https://macc-essenital.netlify.app/log-in",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1.5], [-300, 300]);
  return (
    <section style={{ height: "100vh" }}>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.url}>See Demo</a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
