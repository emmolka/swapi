import React from "react";
import { ScoreText, ScoreWrapper, ScoreNumbers } from "./style";
interface ScoreProps {
  winnerInfo: string;
  score1: number;
  score2: number;
}

const Score = ({
  score1,
  score2,
  winnerInfo
}: ScoreProps): React.ReactElement => (
  <>
    <ScoreText>{winnerInfo}</ScoreText>
    <ScoreWrapper>
      <ScoreNumbers>
        {score1}:{score2}
      </ScoreNumbers>
    </ScoreWrapper>
  </>
);

export default Score;
