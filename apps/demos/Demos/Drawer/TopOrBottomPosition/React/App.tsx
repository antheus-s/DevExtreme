import React, { useCallback, useMemo, useState } from 'react';
import Drawer, { DrawerTypes } from 'devextreme-react/drawer';
import RadioGroup from 'devextreme-react/radio-group';
import Toolbar from 'devextreme-react/toolbar';
import HTMLReactParser from 'html-react-parser';
import { text } from './data.ts';
import NavigationList from './NavigationList.tsx';

const RadioGroupOpenedOptions = ['push', 'shrink', 'overlap'];
const RadioGroupPositionOptions = ['top', 'bottom'];
const RadioGroupRevealOptions = ['slide', 'expand'];

const App = () => {
  const [opened, setOpened] = useState(false);
  const [openedStateMode, setOpenedStateMode] = useState<DrawerTypes.OpenedStateMode>('shrink');
  const [revealMode, setRevealMode] = useState<DrawerTypes.RevealMode>('expand');
  const [position, setPosition] = useState<DrawerTypes.PanelLocation>('top');

  const toolbarItems = useMemo(() => [{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      stylingMode: 'text',
      onClick: () => setOpened(!opened),
    },
  }], [opened, setOpened]);

  const onOpenedStateModeChanged = useCallback(({ value }) => {
    setOpenedStateMode(value);
  }, [setOpenedStateMode]);

  const onRevealModeChanged = useCallback(({ value }) => {
    setRevealMode(value);
  }, [setRevealMode]);

  const onPositionChanged = useCallback(({ value }) => {
    setPosition(value);
  }, [setPosition]);

  const onOutsideClick = useCallback(() => {
    setOpened(false);
    return false;
  }, [setOpened]);

  return (
    <div className="flex-container">
      <Toolbar items={toolbarItems} id="toolbar" />
      <Drawer
        opened={opened}
        closeOnOutsideClick={onOutsideClick}
        openedStateMode={openedStateMode}
        position={position}
        component={NavigationList}
        revealMode={revealMode}
        height={400}
        maxSize={200}
      >
        <div id="content">
          {HTMLReactParser(text)}
        </div>
      </Drawer>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <label>Opened state mode</label>
          <RadioGroup
            items={RadioGroupOpenedOptions}
            layout="horizontal"
            value={openedStateMode}
            onValueChanged={onOpenedStateModeChanged}
          />
        </div>
        {' '}
        <div className="option">
          <label>Position</label>
          <RadioGroup
            items={RadioGroupPositionOptions}
            layout="horizontal"
            value={position}
            onValueChanged={onPositionChanged}
          />
        </div>
        {' '}
        {openedStateMode !== 'push' && (
          <div className="option">
            <label>Reveal mode</label>
            <RadioGroup
              items={RadioGroupRevealOptions}
              layout="horizontal"
              value={revealMode}
              onValueChanged={onRevealModeChanged}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
