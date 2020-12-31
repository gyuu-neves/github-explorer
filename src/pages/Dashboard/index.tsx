import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="test">
        <img
          src="https://avatars2.githubusercontent.com/u/19414168?s=460&u=1a8bfaa8153d781fbc8c0432b1a95ec7e7e7eba0&v=4"
          alt="Gyuu August"
        />
        <div>
          <strong>gyuu-neves/next-learn-starter</strong>
          <p>gyuu-neves/next-learn-starter</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);
export default Dashboard;
