import { Container, TarefaTexto, TarefaFeita, SetaTarefa } from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export function Tarefa() {
  return (
    <Container>
      <TarefaFeita>
        <MaterialCommunityIcons
          name="checkbox-blank"
          size={24}
          color="#939090"
        />
      </TarefaFeita>
      <TarefaTexto>Task Title</TarefaTexto>
      <SetaTarefa>
        <MaterialIcons name="keyboard-arrow-up" size={24} color="#939090" />
      </SetaTarefa>
    </Container>
  );
}
