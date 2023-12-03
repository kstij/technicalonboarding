/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Smart Parking System",
    description:
      "Developed RaraspberryPi based project which gives real time parking space availability on mobile application and web application using Python and MongoDB.",
    url: "https://github.com/kstij/smart-parking//",
  },
  {
    title: "Facial Landmark Detection",
    description:
      "Facial landmark recognition allows you to detect a number of different points on your face that together make up your eyes, mouth, ears, nose and so on.",
    url: "https://github.com/kstij/face-landmark-detection",
  },
  {
    title: "Portfolio website",
    description:
      "Created Personalized Portfolio website using Next.js and gatsby and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://kshitijvarma.me",
  },
  {
    title: "Disney+Clone",
    description:
      "Built Disney+ Clone with React JS with Google account's Sign in feature. Styled to get 15+ movies made by Disney; clickable images to get details of the specific movie.",
    url: "https://github.com/kstij/Disney-Hotstar-Clone/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
