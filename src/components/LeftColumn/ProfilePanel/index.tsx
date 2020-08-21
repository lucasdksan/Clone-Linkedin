import React from 'react';
import Panel from '../../Panel';
import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://avatars3.githubusercontent.com/u/47578616?s=460&u=795fd6da85b035741a018b46c1005b1450cf957d&v=4"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Lucas da Silva Leoncio</h1>
        <h2>Engenheiro Mecatrônico</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">88</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
