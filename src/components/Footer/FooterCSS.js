import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;

  .footer-wrapper{
    max-width: 1280px;
    margin: 0 auto;
    padding: 50px 0;
    display: grid; 
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-around;
    align-items: center;

    @media(max-width: 768px){
      flex-direction: column;
      text-align: center;
    }


  }

  .footer{
    a{
      color: #000;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      &:hover{
        text-decoration: underline;
      }
    }
    svg{
      width: 35px; height: auto;
    }

    &-logo{
      text-align: center;
    }
    
    &-social{
      width: 100%;
      display: flex; flex-direction: row;
      justify-content: space-around;
      a{
        margin: 5px 0;
      }
    }
  }
`;