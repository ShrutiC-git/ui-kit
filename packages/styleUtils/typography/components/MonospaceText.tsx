import * as React from "react";
import Text from "./Text";
import { BasicTextProps } from "../textTypes";
import { css } from "emotion";
import { themeTextColorPrimary } from "../../../design-tokens/build/js/designTokens";

export interface MonospaceTextProps extends BasicTextProps {
  /**
   * The color of the text
   */
  color: React.CSSProperties["color"];
}

const MonospaceText = (props: MonospaceTextProps) => (
  <Text
    className={css`
      font-family: monospace;
    `}
    dataCy="monospaceText"
    {...props}
  />
);

MonospaceText.defaultProps = {
  color: themeTextColorPrimary,
  tag: "code",
  size: "m",
  weight: "medium",
  align: "inherit",
  wrap: "wrap"
};

export default MonospaceText;
