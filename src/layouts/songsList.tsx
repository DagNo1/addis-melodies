import { Flex, Text } from "theme-ui";
import MusicItem from "../components/item/musicItem";

function SongsList() {
  const musicList: Music[] = [
    {
      image:
        "https://cdn.pixabay.com/photo/2024/02/07/15/04/man-8559258_640.png",
      title: "Song Title 1",
      duration: "3:45",
      mood: "Happy",
      artist: "Marron 5",
      category: "Pop",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2024/02/07/15/04/man-8559258_640.png",
      title: "Song Title 2",
      duration: "4:20",
      mood: "Relaxed",
      artist: "Marron 5",
      category: "Jazz",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2024/02/07/15/04/man-8559258_640.png",
      title: "Song Title 3",
      duration: "5:10",
      mood: "Energetic",
      artist: "Marron 5",
      category: "Rock",
    },
    // Add more music objects as needed
  ];
  const columns = ["", "Title", "Duration", "Mood", "Category"];
  return (
    <Flex
      sx={{
        flexDirection: "column",
        marginInline: "4rem",
        marginBlock: "4rem",
      }}
    >
      <Text
        sx={{
          fontSize: 5,
          fontWeight: "bold",
          display: "block",
          textAlign: "center"
        }}
      >
        Songs
      </Text>
      {musicList.map((m, index) => (
        <MusicItem
          key={index}
          image={m.image}
          title={m.title}
          artist={m.artist}
          duration={m.duration}
          mood={m.mood}
          category={m.category}
        />
      ))}
    </Flex>
  );
}

export default SongsList;
