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
    useBreakpointValue,
  

  } from "@chakra-ui/react";

import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import { Link } from "react-router-dom";
  
  
  export default function Payments() {

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
                Pagamentos
            </Heading>
            <Link to="/payments/create">
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
                        <Th px={["3", "3,", "5"]} color="gray.300" width="8">
                          <Checkbox colorScheme="blue" />
                        </Th>
                        <Th>Tipo de pagamento</Th>
                        <Th>Conta</Th>
                        <Th>Nome</Th>
                        {isWideVersion && <Th>CNPJ</Th>}
                        {isWideVersion && <Th>Data de cadastro</Th>}
                    </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td px={["3", "3,", "5"]} color="gray.300" width="4">
                              <Checkbox colorScheme="blue" />
                            </Td>
                            <Td>
                                PIX
                            </Td>
                            <Td>
                              00000-0
                            </Td>
                            <Td fontSize="sm">Escola Técnica Artec Ltda.</Td>
                            {isWideVersion && <Td>R$ 1.500</Td>}
                            {isWideVersion && <Td>Data de cadastro</Td>}
                        </Tr>                
                    </Tbody>
                </Table>
          </Box>
        </Flex>
      </Box>
    );
  }
  
