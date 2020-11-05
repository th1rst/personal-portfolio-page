import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
} from "react-spring";
import styled from "styled-components";
import { BookList } from "../assets/data/BookList";

const Container = styled(animated.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 25px;
  padding: 25px;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
`;

const Item = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 5px;
  will-change: transform, opacity;
`;

const data = BookList.map((book) => {
  return {
    name: book.shortName,
    height: 400,
    coverURL: `${book.coverURL}`,
  };
});

export default function SpringContainer() {
  const [open, set] = useState(false);
  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "1%", background: "black" },
    to: { size: open ? "100%" : "1%", background: open ? "white" : "black" },
  });

  const transRef = useRef();
  const transitions = useTransition(open ? data : [], (item) => item.name, {
    ref: transRef,
    unique: true,
    trail: 600 / data.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <>
      <p
        className="text-white font-semibold uppercase underline cursor-pointer"
        onClick={() => set((open) => !open)}
      >
        Books
      </p>
      <div className="h-auto border-2 border-pink-500">
        <Container
          className="border-2 border-red-500"
          style={{ ...rest, width: size, height: size, cursor: "default" }}
        >
          {transitions.map(({ item, key, props }) => (
            <Item key={key} style={{ ...props }}>
              <Link to={`/previewer/${item.name}`}>
                <img src={item.coverURL} alt={item.name} />
              </Link>
            </Item>
          ))}
        </Container>
      </div>
    </>
  );
}
