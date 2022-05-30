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
  } from "@chakra-ui/react";
  import { RiAddLine, RiRefreshLine } from "react-icons/ri";
  import { useState } from "react";
  
  import { Header } from "../../components/Header/Header";
  import Sidebar from "../../components/SideBar/SideBar";
import { Link } from "react-router-dom";
  
  
  export default function Users() {

    const isWideVersion = useBreakpointValue({
      base: false,
      lg: true,
    });
    
    return (
      <Box>
        <Header />
  
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["4", "4,", "6"]}>
          <Sidebar />
          <Box flex="1" bg="gray.100" p={8} borderRadius={8}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
                Usuários
            </Heading>
            <Link to="/users/create">
              <Button
                as="a"
                size="sm"
                colorScheme="blue"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          
            <Table colorScheme="whiteAlpha">
                    <Thead>
                    <Tr>
                        <Th px={["4", "4,", "6"]} color="gray.300" width="8">
                        <Checkbox colorScheme="blue" />
                        </Th>
                        <Th>Nome</Th>
                        <Th>Sobrenome</Th>
                        {isWideVersion && <Th>Email</Th>}
                        {isWideVersion && <Th>Data de cadastro</Th>}
                    </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                <Checkbox colorScheme="blue" />
                            </Td>
                            <Td>
                                Gabriel
                            </Td>
                            <Td>
                                Lima
                            </Td>
                            {isWideVersion && <Td>gabriellima170801@gmail.com</Td>}
                            {isWideVersion && <Td>Data de cadastro</Td>}
                        </Tr>                    
                    </Tbody>
                </Table>
          </Box>
        </Flex>
      </Box>
    );
  }
  
