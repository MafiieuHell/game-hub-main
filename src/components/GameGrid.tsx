import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainair from "./GameCardContainair";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainair>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainair>
          ))}
        {games.map((game) => (
          <GameCardContainair>
            <GameCard key={game.id} game={game} />
          </GameCardContainair>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
