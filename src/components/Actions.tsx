import React from "react";
import {
  Popover,
  Position,
  Button,
  ButtonGroup,
  Callout,
} from "@blueprintjs/core";
import { SongSettings } from "./Song";

interface ActionsProps {
  settings: SongSettings;
  onUpdate: (settings: SongSettings) => void;
}

export const Actions: React.FC<ActionsProps> = ({ settings, onUpdate }) => {
  const menu = (
    <Callout title="Configuration">
      <ButtonGroup>
        <Button
          icon="minus"
          minimal
          small
          onClick={() =>
            onUpdate({
              ...settings,
              lyricsFontSize: settings.lyricsFontSize - 1,
            })
          }
        />
        <Button
          icon="plus"
          minimal
          small
          onClick={() =>
            onUpdate({
              ...settings,
              lyricsFontSize: settings.lyricsFontSize + 1,
            })
          }
        />
      </ButtonGroup>
      Taille paroles
    </Callout>
  );

  return (
    <Popover content={menu} position={Position.LEFT_TOP}>
      <Button minimal icon="cog" />
    </Popover>
  );
};
