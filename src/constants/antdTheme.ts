import { OverrideToken } from "antd/es/theme/interface";
import { AliasToken } from "antd/es/theme/interface/alias";
import { BLACK_COLORS, COLORS } from "./colors";

export const THEME_TOKEN: Partial<AliasToken> = {};
export const THEME_COMPONENT: OverrideToken = {
  Button: {
    colorPrimary: BLACK_COLORS["primaryColor300"],
    colorPrimaryHover: BLACK_COLORS["primaryColor200"],
    colorPrimaryBg: BLACK_COLORS["primaryColor300"],
    colorBorder: BLACK_COLORS["primaryColor300"],
    colorText: BLACK_COLORS["primaryColor300"],
    colorBgContainerDisabled: "#ddd",
  },
  Tabs: {
    colorBgContainer: BLACK_COLORS["primaryColor300"],
    colorPrimary: "#fff",
    colorText: BLACK_COLORS["primaryColor300"],
    colorPrimaryHover: BLACK_COLORS["primaryColor200"],
  },
  Menu: {
    colorBgBase: BLACK_COLORS["primaryColor300"],
    itemBg: BLACK_COLORS["primaryColor300"],
    itemColor: "#fff",
    itemHoverColor: "#fff",
    horizontalItemSelectedColor: "#fff",
  },
};
export const THEME = {
  token: THEME_TOKEN,
  components: THEME_COMPONENT,
};
