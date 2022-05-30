import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/courses" icon={RiDashboardLine}>
          Cursos
        </NavLink>
        <NavLink href="/payments" icon={RiContactsLine}>
          Pagamentos
        </NavLink>
        <NavLink href="/students" icon={RiContactsLine}>
          Alunos
        </NavLink>
        <NavLink href="/files" icon={RiContactsLine}>
          Upload de arquivos
        </NavLink>
      </NavSection>

      <NavSection title="CONFIGURAÇÕES">
        <NavLink href="/forms" icon={RiInputMethodLine}>
          Relatórios
        </NavLink>
        <NavLink href="/users" icon={RiGitMergeLine}>
          Usuários
        </NavLink>
      </NavSection>
    </Stack>
  );
}