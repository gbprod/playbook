import React from "react";
import { Phrase as PhraseType } from "../containers/types";
import { H3 } from "@blueprintjs/core";
import Bar from "./Bar";

interface PhraseProps {
  phrase: PhraseType;
}

export const Phrase: React.FC<PhraseProps> = ({ phrase }) => (
  <>
    <H3>{phrase.name}</H3>
    <div className="phrase">
      {phrase.bars.map(function (bar, index) {
        return <Bar defaultBeats={phrase.beats} bar={bar} key={index} />;
      })}
    </div>
  </>
);
