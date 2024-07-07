import React, { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/15804651/pexels-photo-15804651/free-photo-of-people-together-on-motorcycle-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatibus exercitationem, suscipit neque accusantium cupiditate sed. Debitis, veniam optio in perferendis deleniti atque, mollitia enim repellat consequatur reiciendis iure maiores?",
    },
    {
        id: 2,
        title: "Next.js Blog",
        img: "https://images.pexels.com/photos/26754397/pexels-photo-26754397/free-photo-of-sunrise-praia-do-felix.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatibus exercitationem, suscipit neque accusantium cupiditate sed. Debitis, veniam optio in perferendis deleniti atque, mollitia enim repellat consequatur reiciendis iure maiores?",
    },
    {
        id: 3,
        title: "Vanilla JS App",
        img: "https://images.pexels.com/photos/17131269/pexels-photo-17131269/free-photo-of-rocks-in-antelope-canyon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatibus exercitationem, suscipit neque accusantium cupiditate sed. Debitis, veniam optio in perferendis deleniti atque, mollitia enim repellat consequatur reiciendis iure maiores?",
    },
    {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/26572408/pexels-photo-26572408/free-photo-of-silhouette-of-man-by-the-sea-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatibus exercitationem, suscipit neque accusantium cupiditate sed. Debitis, veniam optio in perferendis deleniti atque, mollitia enim repellat consequatur reiciendis iure maiores?",
    },
];

const Single = ({ item }) => {
    const ref = useRef();
    
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-190, 10]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                    <img src={item.img} />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
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
