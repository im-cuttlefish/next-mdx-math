import React, { FC, useMemo } from "react";
import { renderToString } from "katex";
import styled from "styled-components";

interface Props {
  display?: boolean;
  children: string;
}

export const Math: FC<Props> = ({ display = false, children }) => {
  const html = useMemo(
    () => renderToString(children, { displayMode: display }),
    [children]
  );

  return <Transparent dangerouslySetInnerHTML={{ __html: html }} />;
};

const Transparent = styled.div`
  display: inline;

  @supports (display: contents) {
    display: contents;
  }
`;
