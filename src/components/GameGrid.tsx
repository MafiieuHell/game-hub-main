import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenre";
import GameCard from "./GameCard";
import GameCardContainair from "./GameCardContainair";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainair key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainair>
          ))}
        {data.map((game) => (
          <GameCardContainair key={game.id}>
            <GameCard game={game} />
          </GameCardContainair>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
