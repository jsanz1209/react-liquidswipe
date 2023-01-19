import React, { ReactElement } from 'react';
import { useRef, useState, useEffect, FC } from 'react';
import Page from './Page';
import { LQSW_CONTAINER } from './Styled';

export default function LiquidSwipe({ components, onChangeIndex, style }: { components: FC[], onChangeIndex: (index: number) => void, style?: any }): ReactElement {
  const sizeOfSwipe = components.length;
  const [isActive, setActive] = useState(0);
  const [elm, setElm] = useState<ReactElement>();
  const parentElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onChangeIndex(index);
    setElm(
      <Page
        key={isActive}
        index={isActive}
        prev={components[isActive - 1] || null}
        current={components[isActive]}
        next={components[isActive + 1] || null}
        setActive={setActive}
        parentElement={parentElement} />
    );
  }, [isActive, components]);

  if (sizeOfSwipe !== 0) {
    return (
      <>
        <LQSW_CONTAINER ref={parentElement} style={style}>
          {elm}
        </LQSW_CONTAINER>
      </>
    );
  } else {
    return <></>;
  }
};
