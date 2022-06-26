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
    Link as ChakraLink,
    Tooltip,
    useDisclosure,
    useToast,
  } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { useEffect, useState } from "react";

import { Header } from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { Axios } from "axios";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { ConfirmPopover } from "../../components/ConfirmPopover";
  
interface CourseProps {
    id: string;
    name: string;
    price: string;
    type: string;
    createdAt: string;
}

export default function Courses() {

    const [courses, setCourses] = useState<CourseProps[]>([]);

    const isWideVersion = useBreakpointValue({
      base: false,
      lg: true,
    });


    const toast = useToast()

    useEffect(() => {
        api.get('/courses').then(response => {
            let { courses } = response.data;
            setCourses(courses.map((course: any) => {
                return {
                    id: course.id,
                    name: course.name,
                    type: course.tipo_curso,
                    price: Number(course.valor_mensalidade).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2}),
                    createdAt: new Date(course.createdAt).toLocaleString('pt-BR', { dateStyle: 'long' })
                }
            }));
        })


    }, [])

    function removeItem(id: string){

      api.delete(`/courses/${id}`).then(response => {
        if(response.status == 200){
          toast({
              title: 'Curso excluído!',
              description: "O curso foi excluído com sucesso.",
              status: 'success',
              duration: 9000,
              isClosable: true,
          })

          const { deletedCourse } = response.data

          setCourses(courses.filter(course => {
            return course.id != deletedCourse.id
          }))


        }
      })

    }
    
    return (
      <Box>
        <Header />
  
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["4", "4,", "6"]}>
          <Sidebar />
          <Box flex="1" bg="gray.100" p={8} borderRadius={8}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
                Cursos
            </Heading>
            <Link to="/courses/create">
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
                            <Th>Curso</Th>
                            <Th>Mensalidade</Th>
                            {isWideVersion && <Th>Tipo</Th>}
                            {isWideVersion && <Th>Data de cadastro</Th>}
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {courses.map(course => {
                            return (
                                <Tr key={course.id}>
                                    <Td>
                                        <Checkbox colorScheme="blue" />
                                    </Td>
                                    <Td>
                                        {course.name}
                                    </Td>
                                    <Td>
                                        {course.price}
                                    </Td>
                                    {isWideVersion && <Td>{course.type}</Td>}
                                    {isWideVersion && <Td>{course.createdAt}</Td>}
                                    <Td onClick={() => { removeItem(course.id) }}>
                                        <Tooltip label="Excluir" aria-label='A tooltip' bg='red.600' fontSize='md'>
                                          <ChakraLink><Icon as={IoMdRemoveCircleOutline} size="xl"/></ChakraLink>
                                        </Tooltip>
                                    </Td>
                                </Tr>
                            )
                        })}                     
                    </Tbody>
                </Table>
          </Box>
        </Flex>
      </Box>
    );
  }
  
