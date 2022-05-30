import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { useContext, createContext, ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

type SidebarDrawerContextData = UseDisclosureReturn;

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const route = useLocation();

  useEffect(() => {
    disclosure.onClose();
  }, [route.pathname]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);