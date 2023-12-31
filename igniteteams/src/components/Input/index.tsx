import { TextInputProps,TextInput } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
}

export function Input({ inputRef, ...rest }: Props) {
  return (
    <Container {...rest} placeholderTextColor={useTheme().COLORS.GRAY_300} ref={inputRef} />
  );
}
