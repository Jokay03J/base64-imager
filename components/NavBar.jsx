import React from "react";
import { css } from "@emotion/react";
import { v4 as id } from "uuid";

export default function NavBar({ items, logo }) {
  return (
    <nav
      css={css`
        width: 100%;
        height: 20%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding: 10px;
        background-color: black;
      `}
    >
      <ul
        css={css`
          list-style: none;
        `}
      >
        {items.map((item) => (
          <li
            key={id()}
            css={css`
              text-align: center;
            `}
          >
            <a
              href={item.href}
              css={css`
                color: white;
                text-decoration: none;
                font-size: 30px;
              `}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
