import {
    Box,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerContent,
    DrawerOverlay,
    DrawerCloseButton,
    useBreakpointValue,
  } from "@chakra-ui/react";
  import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
  import { SidebarNav } from "./SideBarNav";
  
export default function Sidebar() {
const { isOpen, onClose } = useSidebarDrawer();
const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false,
});

if (isDrawerSideBar) {
    return (
    <Drawer isOpen={isOpen} placement="left" onClose={() => onClose()}>
        <DrawerOverlay>
        <DrawerContent bg="#F9F9F9" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
            <SidebarNav />
            </DrawerBody>
        </DrawerContent>
        </DrawerOverlay>
    </Drawer>
    );
}

return (
    <Box as="aside" w="64" h="100%" mx="8" my="12">
        <SidebarNav />
    </Box>
);
}