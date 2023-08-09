import { Container } from "./styles";
import imageLogo from '../../assets/logo.png'
import { FilmSlate } from "@phosphor-icons/react";

export function ContainerFlix() {
  return (
    <Container>
      <div>
        <img src={imageLogo} alt="" />
        <h1>Não sabe o que assistir?</h1>
      </div>
      <div>
        <button>
          <FilmSlate weight="fill" size={32} color="#1E46A3 " />
          Encontre filme
        </button>
        <p>
          Clique em "Encontrar filme" que traremos informações de algum filme
          para você assistir hoje.
        </p>
      </div>
    </Container>
  );
}