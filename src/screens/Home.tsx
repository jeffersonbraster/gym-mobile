import { useState } from "react";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { HStack, VStack, FlatList } from "native-base";

export function Home() {
  const [groups, setGroups] = useState([
    "peito",
    "costa",
    "biceps",
    "triceps",
    "ombro",
    "perna",
  ]);
  const [groupSelected, setGroupSelected] = useState("");

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8, my: 10, maxH: 10 }}
      />
    </VStack>
  );
}
