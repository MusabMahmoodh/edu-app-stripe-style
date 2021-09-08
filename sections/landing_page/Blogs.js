import {
  Container,
  Heading,
  Text,
  Stack,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import BlogCard from "../../components/Card.Blog.Landing";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Blogs() {
  const sliderParams = {
    additionalTransfrom: 0,
    arrows: true,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    slidesToSlide: 1,
    items: 3,
    containerClass: "carousel-container",
    // customButtonGroup: <ButtonGroup />,
    dotListClass: "",

    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: "",
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
  };
  return (
    <Container maxW={"5xl"} py="120px" bg="blue.900" position="relative">
      <Box
        width="100%"
        height="100px"
        position="absolute"
        right="-5px"
        left="0"
        top="-5px"
        zIndex="234"
        bg="white"
        clipPath="polygon(0 0, 100% 0, 100% 17%, 0 100%)"></Box>
      <Stack spacing={4}>
        <Text
          textTransform={"uppercase"}
          color={"gray.200"}
          fontWeight={600}
          fontSize={"sm"}
          p={2}
          alignSelf={"flex-start"}
          rounded={"md"}>
          From the Blog
        </Text>
        <Heading color={"gray.50"}>
          Explore latest stories and discoveries...
        </Heading>
        <Text color={"gray.100"} fontSize={"lg"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore
        </Text>
        <Box>
          <Carousel {...sliderParams} ssr>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </Carousel>
        </Box>
      </Stack>
    </Container>
  );
}
