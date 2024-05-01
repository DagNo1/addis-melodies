import { Pencil, Trash2 } from "lucide-react";
import { Box, Divider, Flex, IconButton, Image, Text } from "theme-ui";

function MusicItem(music: Music) {
  return (
    <Flex
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        fontSize: "2",
        marginBlock: "0.5rem",
        justifyContent: "center",
      }}
    >
      <Image
        src={music.image}
        width={50}
        height={50}
        sx={{
          flex: "0.2",
        }}
      />
      <Flex
        sx={{
          paddingInline: "1rem",
          display: "flex",
          flex: "1",
          flexDirection: "column",
        }}
      >
        <Text
          sx={{
            fontSize: 4,
            fontWeight: "bold",
            display: "block",
          }}
        >
          {music.title}
        </Text>
        <Text
          sx={{
            fontSize: 2,
            display: "block",
          }}
        >
          {music.artist}
        </Text>
      </Flex>
      <Text
        sx={{
          fontSize: 1,
          display: "block",
          flex: "1",
        }}
      >
        {music.duration}
      </Text>
      <Text
        sx={{
          fontSize: 1,
          display: "block",
          flex: "1",
        }}
      >
        {music.mood}
      </Text>
      <Text
        sx={{
          fontSize: 1,
          display: "block",
          flex: "1",
        }}
      >
        {music.category}
      </Text>
      <Flex
        sx={{
          fontSize: 1,
          display: "block",
          flex: "1",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <IconButton onClick={() => {}}>
          <Pencil className="deleteButton" />
        </IconButton>
        <IconButton onClick={() => {}}>
          <Trash2 />
        </IconButton>
      </Flex>
      <Divider
        sx={{
          color: "#ffff",
          backgroundColor: "#fff"
        }}
      />
    </Flex>
  );
}

export default MusicItem;
