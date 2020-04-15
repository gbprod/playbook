import React from "react";
import { Phrase as PhraseType } from "../containers/types";
import { H5 } from "@blueprintjs/core";
import Bar from "./Bar";

interface PhraseProps {
  phrase: PhraseType;
}

export const Phrase: React.FC<PhraseProps> = ({ phrase }) => (
  <>
    <H5>{phrase.name}</H5>
    <div className="phrase">
      {phrase.bars.map(function (bar, index) {
        return <Bar defaultBeats={phrase.beats} bar={bar} key={index} />;
      })}
    </div>
  </>
);
