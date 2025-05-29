export const stack = {
  frontend: ["HTML", "CSS", "Tailwind", "JavaScript", "TypeScript", "React", "React Native", "Next.js"],
  backend: ["Vercel", "NeonDB", "Google Cloud", "Expo", "EAS"],
  tools: ["Git", "Figma", "Canva"],
  data: ["Google Looker Studio", "Power BI"],
  soft: ["Attention to Detail", "Adaptability", "Problem-solving", "Collaboration", "Flexibility"],
};

export const projects = [
    {
    desc: `This project was developed based on the official Next.js tutorial to establish a solid understanding of the framework.
The default data visualization approach from the tutorial was replaced with a custom setup using Google Looker Studio.
NeonDB was connected directly to Looker Studio to enable real-time data visualization within the dashboard.
The project is hosted on Vercel and can be `,
    projectLinkText: "viewed here.",
    projectUrl: "https://finboard-nextjs.vercel.app/dashboard",
    name: "Financial Dashboard",
    lang: "Looker Studio, Nextjs, Vercel, Neon Serverless DB",
    img: "/financedashboard.png" },
    {
      desc:
        `Android app for discovering and tracking local cats. Users can pin cat sightings with photos and tags, while others can comment,
update, and add images. The app features a social section for posts, comments, and saved content, plus an article hub for helpful
cat-related resources. The Cat Walk feature generates walking routes based on nearby cat sightings. Admin controls are managed 
via Jet Admin.`,
      name: "PurrGO - Location based mobile app",
      lang: "React Native, Firebase, Expo, EAS, Google Cloud, Cloudinary, Jet Admin",
      img: "/purrgo.png"
      },
    {
      desc:
        `Developed a fully responsive website by following Jonas Schmedtmann’s Responsive Websites with HTML and CSS course on Udemy. 
The project involved learning and applying essential design and development principles, including how to plan and sketch layouts, 
structure content with semantic HTML, and style components using modern CSS techniques such as Flexbox and Grid. 
The course also emphasized the importance of testing, performance optimization, and accessibility, all of which were 
incorporated into the final website build.`,
      name: "Omnifood",
      lang: "HTML, CSS, Javascript",
      img: "/omnifood.png"
    },
  ];