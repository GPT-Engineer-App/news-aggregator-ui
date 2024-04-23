// Hacker News Clone using Chakra UI and React Icons
import { Box, Container, Heading, Text, VStack, Link, Divider, Icon, Flex } from "@chakra-ui/react";
import { FaHackerNews, FaExternalLinkAlt } from "react-icons/fa";

const newsItems = [
  {
    id: 1,
    title: "React 18 Released - What's New?",
    url: "https://reactjs.org",
    points: 156,
    author: "reactlover",
    time: "3 hours ago",
    comments: 47,
  },
  {
    id: 2,
    title: "Understanding the Event Loop in Node.js",
    url: "https://nodejs.org",
    points: 99,
    author: "nodefan",
    time: "5 hours ago",
    comments: 22,
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: Which one should you choose?",
    url: "https://css-tricks.com",
    points: 205,
    author: "cssmaster",
    time: "1 day ago",
    comments: 30,
  },
];

const Index = () => {
  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4} align="stretch">
        <Flex alignItems="center">
          <Icon as={FaHackerNews} w={8} h={8} color="orange.400" />
          <Heading ml={2} size="lg">
            Hacker News
          </Heading>
        </Flex>
        <Divider />
        {newsItems.map((item) => (
          <Box key={item.id} p={4} borderWidth="1px" borderRadius="lg">
            <Heading size="md">
              <Link href={item.url} isExternal color="orange.400">
                {item.title} <Icon as={FaExternalLinkAlt} mx="2px" />
              </Link>
            </Heading>
            <Text mt={2}>
              {item.points} points by {item.author} {item.time} | {item.comments} comments
            </Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
