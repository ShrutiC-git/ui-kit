import { Theme } from "../../themes/types/appTheme";
import { BreakpointConfig } from "../../shared/styles/breakpoints";
import { SpaceSizes } from "../../shared/styles/styleUtils/modifiers/modifierUtils";

type BgColor = React.CSSProperties["backgroundColor"];
type PaddingHoriz = SpaceSizes;
type PaddingVert = SpaceSizes;
type ElWidth = React.CSSProperties["width"];

export interface AppChromeTheme extends Theme {
  headerBackgroundColor?: BgColor;
  headerPaddingHor?: PaddingHoriz;
  headerPaddingVert?: PaddingVert;
  iconWidth?: ElWidth;
  itemActiveBackgroundColor?: BgColor;
  itemHoverBackgroundColor?: BgColor;
  sidebarBackgroundColor?: BgColor;
  sidebarHeaderPaddingHor?: PaddingHoriz;
  sidebarHeaderPaddingVert?: PaddingVert;
  sidebarWidth?: BreakpointConfig<ElWidth>;
  sidebarItemPaddingHor?: PaddingHoriz;
  sidebarItemPaddingVert?: PaddingVert;
}