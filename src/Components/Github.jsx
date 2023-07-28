import { Flex, SimpleGrid, Image, Link, Box, Text } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function Stats() {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
      <Box  id="Stats" h="100vh" p="2%" data-aos="fade-up">
        {/* component name text  */}
        <Box
          m="auto"
          mb="40px"
          w="fit-content"
          color="#dc143c"
          mt={{ sm: "50px", md: "30px", xl: "10px" }}
        >
          <Text fontSize="3xl" as="b">
            Github Stats & Calander
          </Text>{" "}
        </Box>

        {/* github stats */}
        <Box
          w="fit-content"
          p="17px"
          m="auto"
          border="2px"
          borderRadius="10px"
          borderColor="#dc143c"
          borderBottom={"none"}
          display={{ md: "flex" }}
          borderBottomRadius="0px"
        >
          <Box p="10px" w="fit-content" m="auto">
            <img
              align="center"
              src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=mukulsomukesh&theme=dark" alt="mukulsomukesh"
              height={"145px"}
            />
          </Box>
          <Box ml={{ md: "15px" }} pt="5px" w="fit-content" m="auto">
            <img
              align="center"
              src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=mukulsomukesh&theme=dark"
              alt="mukulsomukesh"
              height={"145px"}
            />
          </Box>
        </Box>

        {/* github calander */}
        <Box
          w="fit-content"
          p="21px"
          m="auto"
          border="2px"
          borderRadius="10px"
          borderColor="#dc143c"
          borderTopStyle="dashed"
          borderTopRadius="0px"
        >
          <Text mb="10px" color="#dc143c">
            {" "}
            My Github Calander{" "}
          </Text>
          <GitHubCalendar color="#dc143c" username="mukulsomukesh" />{" "}
        </Box>
      </Box>
  );
}

export default Stats;
