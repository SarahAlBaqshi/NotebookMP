//Styled Import
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";


export const CollectionItemImage = styled.img`
  width: 30em;
`;

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
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
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;
    &.perfume-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;

export const Title = styled.h1`
margin-top: 300px;
  text-align: center;
  `;
