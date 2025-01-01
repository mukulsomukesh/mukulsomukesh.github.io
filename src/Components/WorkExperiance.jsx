import React, { useEffect } from 'react';
import {
    Box,
    chakra,
    Container,
    Link,
    Text,
    HStack,
    VStack,
    Flex,
    Icon,
    useColorModeValue,
    Tag,
    TagLabel
} from '@chakra-ui/react';
import AOS from "aos";
import "aos/dist/aos.css";

const milestones = [
    {
        id: 1,
        date: 'Octuber 2023 - Present',
        Loc: " Kolkata, West Bengal",
        org: "De's Techno Limited",
        title: 'Software Developer',
        description: `We are building a B2B procurement solution to make procurement easy and tech-friendly. As the first software developer here, I have gained immense experience and had the chance to learn and implement new things with complete freedom. We are now expanding our team and hiring more developers.`
    },
    {
        id: 2,
        date: 'March 2023 - July 2023',
        Loc: " Bangalore, Karnataka",
        org: "Salesken",
        title: 'Tech Intern - Internship',
        description: `I work with senior developers to build web application frontend using React JS and Bootstrap. This internship gives me practical experience, enabling me to enhance my development skills and familiarize myself with industry-standard practices.`
    },
    {
        id: 3,
        date: 'July 2020 - December 2022',
        Loc: " Remote",
        org: "Geeks For Geeks",
        title: 'Technical Content Writer - Freelance',
        description:
            'Responsible for writing SEO-friendly technical articles. I authored over 150 articles in various technologies like JavaScript, WordPress, Java, Python, C etc.'
    },
    // {
    //     id: 4,
    //     date: ' July 30, 2018',
    //     Loc: " Remote",
    //     org: "Geeks For Geeks",
    //     title: 'Technical Content Writer - Internship',
    //     description: ''
    // }
];

const WorkExperiance = () => {


    useEffect(() => {
        AOS.init({});
    }, [])

    return (
        <Container maxWidth="1000px" mt="100px" p={{ base: 2, sm: 10 }} id="Work Experiance">
            <Box m="auto" mb="50px" w="fit-content" color="#dc143c" data-aos="fade-up">
                <Text fontSize="3xl" as="b">
                    Work Experience
                </Text>
            </Box>
            {milestones.map((milestone, index) => (
                <Flex key={index} mb="10px" data-aos="fade-up">
                    <LineWithDot date={milestone.date} />
                    <Card {...milestone} />
                </Flex>
            ))}

        </Container>
    );
};


const Card = ({ title, Loc, org, description, icon, date }) => {
    return (
        <HStack
            p={{ base: 3, sm: 6 }}
            //   bg={useColorModeValue('gray.100', 'gray.800')}
            spacing={5}
            rounded="lg"
            alignItems="center"
            pos="relative"
        //   _before={{
        //     content: `""`,
        //     w: '0',
        //     h: '0',
        //     borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
        //     borderStyle: 'solid',
        //     borderWidth: '15px 15px 15px 0',
        //     position: 'absolute',
        //     left: '-15px',
        //     display: 'block'
        //   }}
        >
            {/* <Icon as={icon} w={12} h={12} color="#dc143c" /> */}
            <Box>
                <chakra.h1
                    as={Link}
                    _hover={{ color: '#dc143c' }}
                    fontSize="2xl"
                    lineHeight={1.2}
                    fontWeight="bold"
                    w="100%"
                >
                    {title}
                </chakra.h1>
                <HStack spacing={3} mt="1" >

                    <Text fontSize="sm" as={"b"} key={"cat"}>
                        {org} ,
                    </Text>
                    <Text fontSize="sm" as={"b"} key={"cat"} color="gray.500">
                        {Loc},  {date}
                    </Text>
                </HStack>
                <HStack spacing={3} mb={1}>
                    <Text fontSize="sm" as={"b"} key={"cat"} color="gray.500">

                    </Text>
                </HStack>
                <VStack spacing={2} mb={3} textAlign="left">


                    <Text fontSize="md" >
                        {description}
                    </Text>

                </VStack>

            </Box>
        </HStack>
    );
};

const LineWithDot = ({ date }) => {
    return (
        <Flex pos="relative" alignItems="center" mr="40px">
            <chakra.span
                position="absolute"
                left="50%"
                height="calc(100% + 10px)"
                border="1px solid"
                borderColor="#dc143c"
                top="0px"
            ></chakra.span>
            {/* Displaying the date */}
            {/* <Text
                position="absolute"
                left="-100px" // Adjust the positioning as needed
                fontSize="sm"
                color="gray.500"
            >
                {date}
            </Text> */}
            <Box pos="relative" p="10px">
                <Box
                    pos="absolute"
                    width="100%"
                    height="100%"
                    bottom="0"
                    right="0"
                    top="0"
                    left="0"
                    bg="#0f1624"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center center"
                    backgroundColor="#0f1624"
                    borderRadius="100px"
                    border="3px solid #dc143c"
                    backgroundImage="none"
                    opacity={1}
                ></Box>
            </Box>
        </Flex>
    );
};


export default WorkExperiance;