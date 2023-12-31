import { TextInput } from "react-native";
import { useTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;
  
  min-height: 56px;
  max-height: 56px;
  
  color: ${() => useTheme().COLORS.WHITE};
  background-color: ${() => useTheme().COLORS.GRAY_700};
  
  font-family: ${() => useTheme().FONT_FAMILY.REGULAR};
  font-size: ${() => useTheme().FONT_SIZE.MD}px;
  
  border-radius: 6px;
  padding: 16px;
`;
