import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Text, SimpleGrid, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";

import html from "../Assets/html.png";
import bootstrap from "../Assets/bootstrap.png";
import chakra from "../Assets/chakra.png";
import css from "../Assets/css.png";
import express from "../Assets/express.png";
import git from "../Assets/git.png";
import javascript from "../Assets/javascript.png";
import material from "../Assets/material.png";
import mongodb from "../Assets/mongodb.png";
import node from "../Assets/node.png";
import npm from "../Assets/npm.png";
import postman from "../Assets/postman.png";
import react from "../Assets/react.png";
import redux from "../Assets/redux.png";
import tailwind from "../Assets/tailwind.png";

export default function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  const skillsData = [
    { name: "Html", imageSrc: html, imageAlt: "HTML" },
    { name: "Css", imageSrc: css, imageAlt: "CSS" },
    { name: "JavaScript", imageSrc: javascript, imageAlt: "JavaScript" },
    { name: "React", imageSrc: react, imageAlt: "React" },
    { name: "Node Js", imageSrc: node, imageAlt: "Node.js" },
    { name: "Express Js", imageSrc: express, imageAlt: "Express.js" },
    { name: "Redux", imageSrc: redux, imageAlt: "Redux" },
    { name: "Chakra UI", imageSrc: chakra, imageAlt: "Chakra UI" },
    { name: "Tailwind", imageSrc: tailwind, imageAlt: "Tailwind" },
    { name: "Bootstrap", imageSrc: bootstrap, imageAlt: "Bootstrap" },
    { name: "Git", imageSrc: git, imageAlt: "Git" },
    { name: "Material UI", imageSrc: material, imageAlt: "Material UI" },
    { name: "Mongodb", imageSrc: mongodb, imageAlt: "MongoDB" },
    { name: "Npm", imageSrc: npm, imageAlt: "npm" },
    { name: "Postman", imageSrc: postman, imageAlt: "Postman" },
  ];


  useEffect(() => {
    AOS.init();
  }, [])

  return (
      <Box id="Skill's" w="100%" pr="10%" pl="10%" p="7%" minH="fit-content" data-aos="fade-up">
        {/* component name */}
        <Box m="auto" mb="50px" w="fit-content" color="#dc143c">
          <Text fontSize="3xl" as="b">
            Skill
          </Text>{" "}
        </Box>

        {/* grid that contains all the skills */}
        <SimpleGrid minChildWidth="120px" spacing="15px">
          {skillsData.map((skill) => (
            <Box
            data-aos="fade-up"
              key={skill.name}
              bg="#0b111b"
              borderRadius="10px"
              h="150px"
              p="20px"
            >
              <Image src={skill.imageSrc} h="75px" m="auto" w="75px" alt={skill.imageAlt} />
              <Text fontSize="lg" align="center" mt="15px">
                {skill.name}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
  );
}
