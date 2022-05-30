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
    Select,
    Text,
    RadioGroup,
    Stack,
    Radio,

  } from "@chakra-ui/react";

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css'


import { Header } from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import { Link } from "react-router-dom";
  

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { useState } from "react";
import { RadioModules } from "../../components/Radio/RadioModules";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType)
  
export default function FilesCreate() {

    const [paymentType, setPaymentType] = useState('');

    const [files, setFiles] = useState([])

    console.log(files)
    
    console.log(paymentType);

    const isWideVersion = useBreakpointValue({
      base: false,
      lg: true,
    });
    
    function handleSetPaymentType(event){
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
                    Adicionar arquivos
                </Heading>
            </Flex>
            <Divider my="4" borderColor="gray.400" />
            <VStack spacing="8">
                <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <FormControl>
                    <FormLabel htmlFor='type'>Tipo de arquivo:</FormLabel>
                    <Select id='type' placeholder='Selecione o tipo' bg="#FFF" onChange={(event) => { handleSetPaymentType(event) }}>
                        <option value="youtube">Youtube</option>
                        <option value="files">Arquivos</option>
                    </Select>
                    </FormControl>
                </SimpleGrid>
                {paymentType == 'youtube' && (
                    <>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                        <FormControl>
                            <FormLabel htmlFor='type'>Curso: </FormLabel>
                            <Select id='type' placeholder='Selecione o curso' bg="#FFF">
                                <option>Técnico em Eletrônica</option>
                                <option>Técnico em Eletrotécnica</option>
                                <option>Instalador de Energia</option>
                                <option>Eletricista Industrial</option>
                            </Select>
                            </FormControl>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <FormControl>
                                <FormLabel htmlFor='course'>Título: </FormLabel>
                                <Input id='title' type='title' name="title" variant="outline" bg="#FFF"/>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor='url'>Link do vídeo: </FormLabel>
                                <Input id='url' type='url' name="url" bg="#FFF"/>
                            </FormControl>

                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Box>
                                <Text>Modulo: </Text>
                                <RadioModules />
                            </Box>
                            
                            <Box>
                                <Text>Miniatura:</Text>
                                <FilePond
                                    files={files}
                                    maxFiles={1}
                                    allowReorder={true}
                                    allowMultiple={true}
                                    onupdatefiles={setFiles}
                                    labelIdle='Arraste e solte seu arquivo ou selecione-o'
                                    acceptedFileTypes={["image/*"]}
                                    credits={false}
                                />
                            </Box>
                            
                        </SimpleGrid>
                    </>
                    
                )}
                {paymentType == 'files' && (
                    <>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                        <FormControl>
                            <FormLabel htmlFor='type'>Curso: </FormLabel>
                            <Select id='type' placeholder='Selecione o curso' bg="#FFF">
                                <option>Técnico em Eletrônica</option>
                                <option>Técnico em Eletrotécnica</option>
                                <option>Instalador de Energia</option>
                                <option>Eletricista Industrial</option>
                            </Select>
                            </FormControl>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <FormControl>
                                <FormLabel htmlFor='course'>Título: </FormLabel>
                                <Input id='title' type='title' name="title" variant="outline" bg="#FFF"/>
                            </FormControl>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Box>
                                <Text>Modulo: </Text>
                                <RadioModules />
                            </Box>
                            
                            <Box>
                                <Text>Arquivo:</Text>
                                <FilePond
                                    files={files}
                                    maxFiles={1}
                                    allowReorder={true}
                                    allowMultiple={true}
                                    onupdatefiles={setFiles}
                                    labelIdle='Arraste e solte seu arquivo ou selecione-o'
                                    acceptedFileTypes={["application/pdf", "image/jpeg"]}
                                    credits={false}
                                />
                            </Box>
                            
                        </SimpleGrid>
                    </>
                )}
                
            </VStack>

            <Flex mt="8" justify="flex-end">
                <HStack spacing="4">
                <Link to="/files">
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
                    Inserir
                </Button>
                </HStack>
            </Flex>

          </Box>
        </Flex>
      </Box>
    );
  }
  
