import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {

  const { user } = useContext(AuthContext);

  return (
    <>
      <Flex>
        {showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>{`${user?.name} ${user?.surname}`}</Text>
            <Text color="gray.300" fontSize="small">
              {user?.email}
            </Text>
          </Box>
        )}

        <Avatar
          size="md"
          name="Gabriel Lima"
          src="https://github.com/gabriel01-jpg.png"
        />
      </Flex>
    </>
  );
}