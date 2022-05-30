import {
    Box,
    Flex,
    Heading,
    Button,
    useBreakpointValue,
    Divider,
    SimpleGrid,
    VStack,
    HStack,
    Input,
    FormControl,
    FormLabel,
    Select

  } from "@chakra-ui/react";

import { RiAddLine, RiRefreshLine } from "react-icons/ri";
import { ChangeEventHandler, useState } from "react";

import { Header } from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import { Link } from "react-router-dom";
  
  
  export default function PaymentsCreate() {

    const [paymentType, setPaymentType] = useState('');
    console.log(paymentType);

    const isWideVersion = useBreakpointValue({
      base: false,
      lg: true,
    });
    
    function handleSetPaymentType(event: any){
        setPaymentType(event.target.value)
    }

    return (
      <Box>
        <Header />
  
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["4", "4,", "6"]}>
          <Sidebar />
          <Box flex="1" bg="gray.100" p={8} borderRadius={8} as="form">
            <Flex mb="4" justify="space-between" align="center">
                <Heading size="lg" fontWeight="normal">
                    Cadastro de pagamentos
                </Heading>
            </Flex>
            <Divider my="4" borderColor="gray.400" />
            <VStack spacing="8" >
                <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <FormControl>
                    <FormLabel htmlFor='type'>Tipo de pagamento:</FormLabel>
                    <Select id='type' placeholder='Selecione o tipo' bg="#FFF" onChange={(event) => { handleSetPaymentType(event) }}>
                        <option value="deposit">Depósito</option>
                        <option value="pix">PIX</option>
                    </Select>
                    </FormControl>
                </SimpleGrid>
                {paymentType == 'deposit' && (
                    <>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <FormControl>
                                <FormLabel htmlFor='agency'>Agência: </FormLabel>
                                <Input id='agency' type='text' name="agency" variant="outline" bg="#FFF"/>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor='account'>Conta: </FormLabel>
                                <Input id='account' type='text' name="account" bg="#FFF"/>
                            </FormControl>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <FormControl>
                                <FormLabel htmlFor='agency'>CNPJ: </FormLabel>
                                <Input id='agency' type='text' name="agency" variant="outline" bg="#FFF"/>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor='account'>Titular: </FormLabel>
                                <Input id='account' type='text' name="account" bg="#FFF"/>
                            </FormControl>
                            
                        </SimpleGrid>
                    </>
                    
                )}
                {paymentType == 'pix' && (
                    <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                        <FormControl>
                            <FormLabel htmlFor='course'>CNPJ: </FormLabel>
                            <Input id='course' type='text' name="course" variant="outline" bg="#FFF"/>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='price'>Banco: </FormLabel>
                            <Input id='price' type='text' name="price" bg="#FFF"/>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='price'>Titular: </FormLabel>
                            <Input id='price' type='text' name="price" bg="#FFF"/>
                        </FormControl>
                    </SimpleGrid>
                )}
                
            </VStack>

            <Flex mt="8" justify="flex-end">
                <HStack spacing="4">
                <Link to="/payments">
                    <Button colorScheme="blackAlpha">Cancelar</Button>
                </Link>
                <Button
                    type="submit"
                    bg="#294A97"
                    color="#FFF"
                    _hover={{
                        filter: 'brightness(0.9)'
                    }}
                >
                    Cadastrar
                </Button>
                </HStack>
            </Flex>

          </Box>
        </Flex>
      </Box>
    );
  }
  
