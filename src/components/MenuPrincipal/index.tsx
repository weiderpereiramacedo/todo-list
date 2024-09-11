import {
  BotaoAbertas,
  BotaoFinalizadas,
  BotaoText,
  BotaoTodas,
  Container,
} from "./styles";
import React from "react";

export function MenuPrincipal() {
  return (
    <Container>
      <BotaoTodas>
        <BotaoText>TODAS</BotaoText>
      </BotaoTodas>
      <BotaoAbertas>
        <BotaoText>ABERTAS</BotaoText>
      </BotaoAbertas>
      <BotaoFinalizadas>
        <BotaoText>FINALIZADAS</BotaoText>
      </BotaoFinalizadas>
    </Container>
  );
}
