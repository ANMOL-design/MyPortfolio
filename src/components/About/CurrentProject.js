import React from "react";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "./../Projects/ProjectCards";

import Nodesense from "../../Assets/company/nodesens.png";
import Cityzest from "../../Assets/company/cityzest.png";
import Incasa from "../../Assets/company/incasa.png";
import Veducation from "../../Assets/company/veducation.png";
import Merium from "../../Assets/company/merium.png";
import INCONN from "../../Assets/company/inconn.png";
import InstaSleb from "../../Assets/company/instasleb.png";
import Datespec from "../../Assets/company/datespec.png";
import flourish from "../../Assets/company/flourish.png";

function CurrentProjects() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={InstaSleb}
          isBlog={false}
          title="InstaSleb"
          description="InstaSleb is your gateway to a world of glamor, fun, and friendship! Dive into our captivating social game where every moment offers a chance to sparkle and shine. Invite your friends to join in the excitement with daily casting call challenges. In InstaSleb, you're not just a player – you're the star of your own show. Choose from a variety of auditions that test your creativity and talent. Available on iOS and Android, InstaSleb is crafted in Flutter for a seamless experience."
          link="https://apps.apple.com/us/app/instasleb/id6502056337"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={Datespec}
          isBlog={false}
          title="DateSpec"
          description="Datespec is a time management app designed to keep track of your tasks and notify you of new ones. Stay organized and on top of your schedule with ease. Datespec helps you manage your time effectively, ensuring you never miss a deadline or important event. Available on both iOS and Android, Datespec is developed in Flutter for a smooth and efficient user experience."
          link="https://datespec-admin-fe-hsbw.vercel.app/"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={flourish}
          isBlog={false}
          title="Flourish"
          description="Flourish is a dynamic CMS website where you can read engaging blogs and purchase products seamlessly. Built with React JS, Flourish offers a smooth and responsive user experience, making it easy to stay informed and shop online. Whether you're browsing insightful articles or buying your favorite items, Flourish provides a comprehensive and user-friendly platform for all your needs."
          link="https://www.flourish.us/"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={Veducation}
          isBlog={false}
          title="Veducation"
          description="Veducation is a cutting-edge book reading application and website developed in Flutter, designed for both iOS and Android platforms. Veducation offers a vast collection of books, catering to diverse genres and educational needs. Users can easily browse, read, and bookmark their favorite books with a user-friendly interface. The app supports features like offline reading, customizable reading modes, and progress tracking. Veducation’s website complements the app, providing a seamless reading experience across devices. Ideal for students, professionals, and book enthusiasts, Veducation transforms the way you access and enjoy books, making learning more accessible and enjoyable."
          link="https://play.google.com/store/search?q=veducation&c=apps"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={Incasa}
          isBlog={false}
          title="Demandium"
          description="Demandium is a versatile service provider application developed in Flutter, catering to both iOS and Android users. It seamlessly connects users with a wide range of local services, from home repairs to personal care, and everything in between. With an intuitive interface, Demandium makes it easy to book appointments, track service progress, and make secure payments. The app’s real-time notifications and customer reviews ensure reliable and timely service. In addition to mobile apps, Demandium features a comprehensive website and an admin panel for managing services efficiently. Demandium simplifies everyday tasks and enhances your urban living experience."
          link="https://demandium-web.6amtech.com/?page=main"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={INCONN}
          isBlog={false}
          title="INCONN"
          description="INCONN is a dynamic website built with React JS, showcasing a custom UI meticulously crafted from Figma designs. Our attention to detail ensures a visually appealing and user-friendly interface, tailored to meet your unique requirements. With INCONN, you experience a seamless blend of aesthetic design and functional excellence, bringing your vision to life with precision and creativity. Explore INCONN for a web experience that stands out."
          link="https://www.inconn.com/"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={Merium}
          isBlog={false}
          title="Meirim"
          description="Meirim is a versatile website developed in React JS. It offers a seamless user experience across multiple languages, ensuring accessibility and convenience for a diverse audience. Whether you’re accessing Meirim from a mobile device or desktop, the multilingual functionality provides a personalized experience tailored to your language preferences. Ideal for global users, Meirim brings content and services to your fingertips, breaking down language barriers and enhancing connectivity. Discover the power of multilingual digital interaction with Meirim, where inclusivity meets innovation."
          link="https://meirim.org/"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={Cityzest}
          isBlog={false}
          title="CityZest"
          description="CityZest is a versatile service provider application developed in React Native, catering to both iOS and Android users. It seamlessly connects users with a wide range of local services, from home repairs to personal care, and everything in between. With an intuitive interface, CityZest makes it easy to book appointments, track service progress, and make secure payments. The app’s real-time notifications and customer reviews ensure reliable and timely service. CityZest is your reliable companion for all your service needs, simplifying everyday tasks and enhancing your urban living experience."
          link="https://play.google.com/store/apps/details?id=com.cityzest"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={Nodesense}
          isBlog={false}
          title="Nordsens"
          description="NodeSense is a robust dashboard and admin panel designed to manage and analyze heatmaps across various countries. It offers interactive visualizations, allowing users to monitor and interpret complex data sets easily. Key features include dynamic heatmaps for visualizing data trends, a user-friendly interface for effortless navigation, and customizable views to tailor the dashboard to specific needs. NodeSense is ideal for tracking economic indicators, social trends, environmental data, and more, providing actionable insights and enhancing data-driven decision-making."
          link="https://master.d39i0hioto2h34.amplifyapp.com/"
        />
      </Col>
    </Row>
  );
}

export default CurrentProjects;
