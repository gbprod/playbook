import {
  AnchorButton,
  Button,
  ButtonGroup,
  Callout,
  Popover,
  Position,
  Switch,
} from "@blueprintjs/core";
import React from "react";
import { SongSettings } from "./Song";

interface ActionsProps {
  settings: SongSettings;
  onUpdate: (settings: SongSettings) => void;
}

export const Actions: React.FC<ActionsProps> = ({ settings, onUpdate }) => {
  const visibilityMenu = (
    <Callout>
      <Switch
        checked={settings.gridVisible}
        label="Grid"
        onChange={() =>
          onUpdate({
            ...settings,
            gridVisible: !settings.gridVisible,
          })
        }
      />
      <Switch
        checked={settings.lyricsVisible}
        label="Paroles"
        onChange={() =>
          onUpdate({
            ...settings,
            lyricsVisible: !settings.lyricsVisible,
          })
        }
      />
      <Switch
        checked={settings.notesVisible}
        label="Notes"
        onChange={() =>
          onUpdate({
            ...settings,
            notesVisible: !settings.notesVisible,
          })
        }
      />
      <Switch
        checked={settings.chordsVisible}
        label="Accords"
        onChange={() =>
          onUpdate({
            ...settings,
            chordsVisible: !settings.chordsVisible,
          })
        }
      />
      <Switch
        checked={settings.referencesVisible}
        label="Références"
        onChange={() =>
          onUpdate({
            ...settings,
            referencesVisible: !settings.referencesVisible,
          })
        }
      />
    </Callout>
  );

  return (
    <div>
      <ButtonGroup>
        <Button
          icon="minus"
          onClick={() =>
            onUpdate({
              ...settings,
              lyricsFontSize: settings.lyricsFontSize - 1,
            })
          }
        />
        <Button active={false} icon="font" />
        <Button
          icon="plus"
          onClick={() =>
            onUpdate({
              ...settings,
              lyricsFontSize: settings.lyricsFontSize + 1,
            })
          }
        />
        <Button
          active={settings.smallGrid}
          icon={settings.smallGrid ? "maximize" : "minimize"}
          onClick={() =>
            onUpdate({
              ...settings,
              smallGrid: !settings.smallGrid,
            })
          }
        />
        <Popover content={visibilityMenu} position={Position.BOTTOM}>
          <AnchorButton rightIcon="caret-down" icon="eye-open"></AnchorButton>
        </Popover>
      </ButtonGroup>
    </div>
  );
};
