import {Badge, Container, Heading, HStack, Text, VStack, Box} from "@chakra-ui/react";
import {FaArrowRight} from "react-icons/fa";
import Image from "next/image";
import BlogImage from "../../public/landing/blog.png";
import Link from "next/link";
import imgWisata from "../../public/wisata/wisata-sample.png";


export default function Article(){
    const tags = [
        {
            id: 1,
            tag: 'tag 1',
        },
        {
            id: 2,
            tag: 'tag 2',
        }, {
            id: 3,
            tag: 'tag 3',
        },
    ]
    const threeLattestPost = [

        {
            id: 1,
            img: imgWisata,
            title: "title 1",
            author: "author 1",
            publish: "20 Januari 2022",
            tags: tags,
            seeDetail: "localhost:3000/article/1",
            desc: " cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 2,
            img: imgWisata,
            title: "title 1",
            author: "author 1",
            publish: "20 Januari 2022",
            tags: tags,
            seeDetail: "localhost:3000/article/1",
            desc: " cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 3,
            img: imgWisata,
            title: "title 1",
            author: "author 1",
            publish: "20 Januari 2022",
            tags: tags,
            seeDetail: "localhost:3000/article/1",
            desc: " cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },

    ]

    const twoLatestPosts = [
        {
            id: 1,
            title: "Lorem Ipsum Dolor Sit Amet",
            user: "John Doe",
            published_at: "10 November 2022",
            mini_body: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc .",
        },
        {
            id: 2,
            title: "Lorem Ipsum Dolor Sit Amet",
            user: "John Doe",
            published_at: "10 November 2022",
            mini_body: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc .",
        },
    ]
    return (
        <>
            <Container maxW={"1268px"}>
                <VStack paddingY={"10"} spacing={"10"}>
                    <Heading fontWeight={"extrabold"} size={{
                        base: "2xl",
                        md: "3xl",
                        lg: "4xl",
                    }}>Baca Articel <span className="text-colortwo-500">Terbaru</span> Kami </Heading>
                    <Text maxW={"700px"} align={"center"} color={"gray.500"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a quam vel justo semper luctus tempus sit amet mauris. Morbi orci ligula, fermentum nec diam pharetra, lobortis vestibulum lorem.</Text>
                    <Badge colorScheme={"green"} variant={"subtle"} size={"xl"} borderRadius={"full"}><Badge variant={"subtle"} borderRadius={"full"} colorScheme={"gray"}>Artikel Baru</Badge> Lihat Artikel Terbaru   </Badge>
                    <h1 className="text-2xl font-bold">Postingan terkini</h1>
                    <div className="grid overflow-hidden md:grid-cols-2 grid-cols-1 md:grid-rows-2 grid-rows-1">
                        {threeLattestPost.map((post, index) => {
                            if (index === 0) {
                                return (
                                    <div className="md:row-span-2" key={post.id}>
                                        <div className="flex flex-col gap-y-5 justify-items-stretch">
                                            <div className="rounded-tl-2xl rounded-br-2xl md:w-[592px] overflow-hidden">
                                                <Image
                                                    src={post.img}
                                                    alt="tumbnail post"
                                                    className="transition-all duration-300 hover:scale-110 object-cover w-full"
                                                />
                                            </div>
                                            <h3 className="text-thePrimary font-semibold text-md">
                                                {post.author} •{" "}
                                                {post.publish}
                                            </h3>
                                            <Link href={post.seeDetail}>
                                                <h1 className="text-xl font-semibold hover:underline">
                                                    {post.title}
                                                </h1>
                                            </Link>
                                            <p className="text-gray-400">
                                                {post.desc} ...
                                            </p>
                                            <div className="flex flex-wrap justify-start items-start space-x-3">
                                                {post.tags.map((tag) => (
                                                    <div
                                                        className="rounded-full px-3 bg-gray-50 text-gray-500 font-semibold self-start">
                                                        {tag.tag}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="md:col-start-2">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            <div className="rounded-tl-2xl rounded-br-2xl overflow-hidden relative">
                                                <Image
                                                    src={post.img}
                                                    alt="tumbnail post"
                                                    className="object-cover transition-all duration-300 hover:scale-110 object-cover w-full"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-y-5">
                                                <h3 className="text-thePrimary font-semibold text-md">
                                                    {post.author} •{" "}
                                                    {post.publish}
                                                </h3>
                                                <Link href={post.seeDetail}>
                                                    <h1 className="text-xl font-semibold hover:underline">
                                                        {post.title}
                                                    </h1>
                                                </Link>
                                                <p className="text-gray-400">
                                                    {post.desc} ...
                                                </p>
                                                <div className="flex flex-wrap justify-start items-start space-x-3">
                                                    {post.tags.map((tag) => (
                                                        <div
                                                            className="rounded-full px-3 bg-gray-50 text-gray-500 font-semibold self-start">
                                                            {tag.tag}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </VStack>
            </Container>
        </>
    )
}