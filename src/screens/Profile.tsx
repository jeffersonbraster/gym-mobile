import { useState } from "react";
import { Center, ScrollView, Skeleton, VStack } from "native-base";
import { ScreenHeader } from "@components/ScreenHeader";
import { Userphoto } from "@components/UserPhoto";

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.400"
              endColor="gray.300"
            />
          ) : (
            <Userphoto
              source={{ uri: `https://github.com/jeffersonbraster.png` }}
              alt="Foto do usuário"
              size={PHOTO_SIZE}
            />
          )}
        </Center>
      </ScrollView>
    </VStack>
  );
}
