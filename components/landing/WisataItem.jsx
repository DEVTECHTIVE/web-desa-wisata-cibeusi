import { Heading, HStack, VStack, Text } from "@chakra-ui/react";
import { FiMap, FiStar } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function WisataItem(props) {
    return (
        <>
            <Link href={`/wisata/${props.to}`}>
                <div className="flex flex-col w-[350px] md:w-[384px] h-[300px] space-y-4">
                    <div className=" overflow-hidden w-[350px] md:w-auto rounded-tl-2xl rounded-br-2xl">
                        <img
                            src={props.image[0].url}
                            alt="post image"
                            className="object-cover duration-300 ansition-all hover:scale-110"
                        />
                    </div>
                    <HStack
                        justifyContent={"space-between"}
                        w={"full"}
                        px={{
                            base: "4",
                            md: "4",
                        }}
                    >
                        <Heading size={"lg"}>{props.title}</Heading>
                    </HStack>
                    <HStack
                        justifyContent={"start"}
                        w={"full"}
                        px={{
                            base: "4",
                            md: "4",
                        }}
                    >
                        <FiMap />
                        <Text>{props.location}</Text>
                    </HStack>
                </div>
            </Link>
        </>
    );
}
