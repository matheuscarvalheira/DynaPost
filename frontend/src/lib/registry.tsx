'use client';

import React, { type ReactNode, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export const StyledComponentsRegistry = ({ children }: { children: React.ReactNode }): ReactNode => {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  // eslint-disable-next-line react/hook-use-state -- is not necessary for this config case
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>;
};
