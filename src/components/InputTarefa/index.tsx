import { Feather } from "@expo/vector-icons";
import { InputContainer, Input, InputButton } from "./styles";

export function InputTarefa() {
  return (
    <InputContainer>
      <Input>Tarefa</Input>
      <InputButton>
        <Feather name="plus-square" size={24} color="white" />
      </InputButton>
    </InputContainer>
  );
}
