import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  h2{
    margin-top: 30px;
    margin-bottom: 15px;
    text-align: center;
  }

  @media(min-width: 900px){
    height: 100%;
    h2{
      margin-top: 0px;
      margin-bottom: 0px;
      text-align: left;
    }
  }

  .header-text{
    background: black;
    padding: 7.5px 0;
    h1{
      color: #fff;
      font-size: 1.5em;
      text-align: center;
      text-rendering: optimizeLegibility;
    }

  }
  .content-wrapper{
    padding: 25px;
  }

  .content{
    display: grid; grid-template-columns: 5fr 3fr;
    height: 90%;
    align-content: center;
    max-width: 1260px;
    margin: 0 auto;

    &--left{
      display: grid; grid-template-rows: 1fr 1fr;
      height: 100%;
      h2{
        color: #000;
        text-shadow: 2px 2px 1px rgba(0,0,0,.5);
      }
      p{
        line-height: 30px;
        font-family: 'Lato', sans-serif;
        padding: 5px 0;
      }

      .about-me{
        padding: 10px;
        .email{
          display: flex;
          align-items: center;
          outline: none;
          color: grey;
          
          svg{
            fill: grey;
            margin-right: 25px;
            width: 30px; height: auto;
            transition: all ease 0.35s;
          }
          transition: all ease 0.35s;
          &:hover{
            color: black;
            transition: all ease 0.35s;
            svg{
              transition: all ease 0.35s;
              fill: black;
            }
          }
        }
      }
      .about-portfolio{
        padding: 10px;
        align-self: end;
      }
    }

    @keyframes animatedskater{
      0%{
        transform: rotateX(0);
      }
      100%{
        transform: rotateX(20deg);
      }
    }
    @keyframes animatedboard{
      0%{
        transform: rotateX(0) rotateZ(0);
      }
      100%{
        transform: rotateX(10deg) rotateZ(5deg);
      }
    }

    &--right{
      div{
        height: 100%; width: auto;
      }
      svg{
        padding: 15px;
        width: 100%; height: 100%;

        .skater-dude{
          transform-origin: center top;
          animation: animatedskater 2s alternate infinite;
        }
        .skater-board{
          transform-origin: center center;
          animation: animatedboard 2s alternate infinite;
        }

      }

    }




    @media(max-width: 900px){
      display: flex; flex-direction: column;

      &--left{
        order: 2;
        p{
          // font-size: 0.75em;
        }
        .about-me{
          align-self: start;
        }
        .about-portfolio{
          align-self: start;
        }
      }

      &--right{
        order: 1;
        div{
          max-width: 325px;
          margin: 0 auto;
        }
        svg{
        }
      }
    }
  }
`;