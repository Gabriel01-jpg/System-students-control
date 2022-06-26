import {
    Box,
    Flex,
    Heading,
    Button,
    Icon,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Checkbox,
    Text,
    useBreakpointValue,
    Spinner,
    SimpleGrid,
    FormControl,
    FormLabel,
    Select,
    Link as ChakraLink
  } from "@chakra-ui/react";
import { RiAddLine, RiRefreshLine } from "react-icons/ri";
import { BsFilePdf, BsFilePdfFill, BsFilePlay } from 'react-icons/bs';
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { useEffect, useState } from "react";

import { Header } from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import { Link } from "react-router-dom";
  
interface FilesProps {
    type: string;
    url: string;
    size?: string;


}

export default function Files() {

    const [searchFilesFromCourse, setSearchFilesFromCourse] = useState('');

    const [ files, setFiles ] = useState<FilesProps[]>();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    function handleShowFilesFromCourse(event: any){
        setSearchFilesFromCourse(event.target.value);
        }

    useEffect(() => {
        //consulta na api pra procurar pelos arquivos e listar eles.

    }, [searchFilesFromCourse])

    return (
        <Box>
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["4", "4,", "6"]}>
            <Sidebar />
            <Box flex="1" bg="gray.100" p={8} borderRadius={8}>
            <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
                Arquivos
            </Heading>
            <Link to="/files/create">
                <Button
                as="a"
                size="sm"
                colorScheme="blue"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                >
                Adicionar novo
                </Button>
            </Link>
            </Flex>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <FormControl>
                    <FormLabel htmlFor='type'>Selecione o curso para visualizar os arquivos</FormLabel>
                    <Select id='type' placeholder='Selecione o curso' bg="#FFF" onChange={(event) => { handleShowFilesFromCourse(event)}}>
                        <option value="1001">Técnico em enfermagem</option>
                        <option value="1002">Técnico em máquinas agrícolas</option>
                    </Select>
                </FormControl>
            </SimpleGrid>
            <Table colorScheme="whiteAlpha" mt="2">
                <Thead>
                <Tr>
                    <Th px={["4", "4,", "6"]} color="gray.300" width="8">
                    <Checkbox colorScheme="blue" />
                    </Th>
                    <Th>Nome</Th>
                    <Th>Tipo</Th>
                    {isWideVersion && <Th>Modulo</Th>}
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    <Th></Th>
                </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <Icon as={BsFilePlay}></Icon>
                        </Td>
                        <Td>
                            <ChakraLink href="/view" target="_blank">Arquivo de vídeo</ChakraLink>
                        </Td>
                        <Td>
                            video
                        </Td>
                        {isWideVersion && <Td>1</Td>}
                        {isWideVersion && <Td>Data de cadastro</Td>}
                        {isWideVersion && <Td><ChakraLink><Icon as={IoMdRemoveCircleOutline} size="xl"/></ChakraLink></Td>}
                    </Tr>
                    <Tr>
                        <Td>
                            <Icon as={BsFilePdf}></Icon>
                        </Td>
                        <Td>
                            <ChakraLink href="/view" target="_blank">Arquivo de texto</ChakraLink>
                        </Td>
                        <Td>
                            pdf
                        </Td>
                        {isWideVersion && <Td>2</Td>}
                        {isWideVersion && <Td>Data de cadastro</Td>}
                        {isWideVersion && <Td><ChakraLink><Icon as={IoMdRemoveCircleOutline} size="xl"/></ChakraLink></Td>}
                    </Tr>
                </Tbody>
            </Table>
            {/*<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                
                 {files.map(file => {
                    return (
                        

                    )
                })} 
            </SimpleGrid>*/}
            </Box>
        </Flex>
        </Box>
    );
}
  
