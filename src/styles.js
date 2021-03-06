//Styled Import
import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const CollectionItemImage = styled.img`
  width: 30em;
`;

export const CollectionWrapper = styled.div`
  display: block;
  justify-content: center;
  flex: 1 1 150px;
  margin: 10px 475px;
`;

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const GlobalStyle = createGlobalStyle`
body{

    align-items: center;
    background-image: url(https://images.freeimages.com/images/large-previews/123/waves-on-the-roof-1562704.jpg);
}
`;

export const ListWrapper = styled.div`
  justify-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const NotebookWrapper = styled.div`
  margin: 20px;
  p {
    text-align: center;
  }
`;

export const Title = styled.h1`
  margin-top: 300px;
  text-align: center;
`;

export const UpdateButtonStyled = styled.p`
  color: ${(props) => props.theme.pink};
`;

export const CollectionDetailWrapper = styled.div`
  border: ;
  display: block;
  margin: 50px auto 30px;
  width: 500px;

  img {
    width: 500px;
    height: 300px;
    display: block;
    margin: auto;
  }

  p {
    vertical-align: middle;
    text-align: center;
    margin: 10px;
  }
`;

export const DetailWrapper = styled.div`
  border: 1px solid;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  h1 {
    text-align: center;
  }
  img {
    width: 300px;
    height: 330px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  p {
    vertical-align: middle;
    text-align: justify;
    margin: 10px;
    &.textalign {
      text-align: center;
    }
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 350px;
`;
