import React from 'react';
import { 
    Container,
    Wrapper,
    LinkedInIcon,
    SearchInput,
    HomeIcon,
    NotificationsIcon,
    ProfileCircle,
    CaretDownIcon,
 } from './styles';

const DesktopHeader: React.FC = () => {
  return (
      <Container>
          <Wrapper>
              <div className="left">
                  <LinkedInIcon/>
                  <SearchInput placeholder="Pesquisar"/>
              </div>
              <div className="right">
                  <nav>
                      <button className="active">
                        <HomeIcon/>
                        <span>Início</span>
                      </button>
                      <button>
                        <NotificationsIcon/>
                        <span>Notificações</span>
                      </button>
                      <button>
                        <ProfileCircle src="https://avatars3.githubusercontent.com/u/47578616?s=460&u=795fd6da85b035741a018b46c1005b1450cf957d&v=4"/>
                        <span>
                            Eu <CaretDownIcon/>
                        </span>
                      </button>
                  </nav>
              </div>
          </Wrapper>
      </Container>
  );
}

export default DesktopHeader;