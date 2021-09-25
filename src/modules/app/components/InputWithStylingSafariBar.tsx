import React, { useState, useRef, useCallback, useEffect, ReactElement } from 'react';
import { Flex } from 'modules/Flex';
import { Text } from '../../../components';

export const InputWithStylingSafariBar = (): ReactElement => {
  const inputRef = useRef(null);

  const safariBar = document.querySelector<HTMLElement>('meta[name="theme-color"]');

  const [message, setMessage] = useState<string>('');
  const [color, setColor] = useState<string>('');

  const isEmptyBtnHandle = useCallback(() => {
    if (inputRef.current.value) {
      setColor('#00FF00');
      setMessage('Success!!!');
    } else {
      setMessage('No empty fields');
      setColor('#FA0000');
    }
  }, []);

  const setDefaultBarColor = useCallback(() => {
    safariBar.setAttribute('content', '#12D6EB');

    setColor('');
  }, []);

  useEffect(() => {
    if (color) {
      safariBar.setAttribute('content', color);
    }
  }, [color]);

  return (
    <Flex flexDirection={'column'}>
      <input id={'custom-input'} ref={inputRef} style={{ background: color }} />
      <Text>{message}</Text>
      <Flex>
        <button onClick={isEmptyBtnHandle}>Submit</button>
        <button onClick={setDefaultBarColor}>Clear bar color</button>
      </Flex>
    </Flex>
  );
};
