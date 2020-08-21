import React from 'react';
import { 
  Container,
  ProfileCircle,
  SearchInput,
  MessageIcon,
} from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://avatars3.githubusercontent.com/u/47578616?s=460&u=795fd6da85b035741a018b46c1005b1450cf957d&v=4" />
      <SearchInput placeholder="Pesquisar"/>
      <MessageIcon/>
    </Container>
  );
}

export default MobileHeader;