import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const ScrollItem = () => {
  const [positionScrolled, setPositionScrolled] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setPositionScrolled(document.documentElement.scrollTop);
      console.log("user scrolled");
    };
    //subscribe scroll event
    window.addEventListener("scroll", onScroll);

    //unsubscribe scroll event
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <h1>scroll item</h1>
      {positionScrolled > 600 && (
        <Button
          type="primary"
          onClick={onScrollTop}
          style={{
            position: "fixed",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <FaLongArrowAltUp />
        </Button>
      )}
    </>
  );
};

export default ScrollItem;
