import styled from "styled-components/native";
import { Text } from "react-native";

export const Container = styled.TouchableOpacity`
  margin-top: 30px;
  width: 90%;
  height: 45.8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #e5e1e1;
  border-radius: 5px;
  overflow: hidden;
`;

export const TarefaTexto = styled.Text`
  color: #2f3243;
  font-size: 16px;
  font-weight: 500;
  margin-right: 159px;
`;

export const TarefaFeita = styled.TouchableOpacity`
  width: 22.9px;
  height: 22.9px;
  margin-left: 14.75px;
  justify-content: center;
  align-items: center;
`;

export const SetaTarefa = styled.TouchableOpacity`
  width: 22.9px;
  height: 22.9px;
  margin-right: 7.85px;
  justify-content: center;
  align-items: center;
`;
