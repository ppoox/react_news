import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
  {
    name: "all",
    text: "전체보기"
  },
  {
    name: "business",
    text: "비지니스"
  },
  {
    name: "entertainment",
    text: "엔터테인먼트"
  },
  {
    name: "health",
    text: "건강"
  },
  {
    name: "science",
    text: "과학"
  },
  {
    name: "sports",
    text: "스포츠"
  },
  {
    name: "technology",
    text: "기술"
  }
];

const CategoriesBlock = styled.div`
  padding-bottom: 3rem;
  width: 960px;
  margin: 0 auto;
  margin-top: 1rem;

  ul {
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
`;

const Category = styled(NavLink)`
  float: left;
  list-style-type: none;
  color: inherit;
  text-decoration: none;

  span {
    display: block;
    padding: 0.25rem 0.5rem;
  }

  &.active {
    color: blue;
  }

  ${props =>
    props.active &&
    `
	 color: blue;
	 font-weight:600; 
  `}
`;

const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      <ul>
        {categories.map(item => {
          return (
            <Category
              key={item.name}
              to={item.name ? "/" : `/${item.name}`}
              activeClassName="active"
              exact={item.name === "all"}
            >
              <span>{item.text}</span>
            </Category>
          );
        })}
      </ul>
    </CategoriesBlock>
  );
};

export default Categories;
