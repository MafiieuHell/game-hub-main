import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames, { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenre";
import GameCard from "./GameCard";
import GameCardContainair from "./GameCardContainair";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
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
  );
};

export default GameGrid;
