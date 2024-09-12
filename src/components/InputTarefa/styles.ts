import styled from "styled-components/native";

export const InputContainer = styled.View`
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

export const Input = styled.TextInput`
  flex: 1;
  padding-left: 16px;
  font-weight: 500;
  font-size: 16px;
  border-radius: 4px;
  color: #2f3243;
`;

export const InputButton = styled.TouchableOpacity`
  background-color: #7a7777;
  width: 15%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
