import React from "react";

import Color from "color";

type SphereProps = {
  id?: string;
  x: number;
  y: number;
  color: string;
  radius: number;
};

const Sphere = ({ id, x, y, color, radius }: SphereProps): JSX.Element => {
  const diameter = radius * 2;
  const gradientOffset = diameter / 3;
  const gradientColor = Color(color).darken(0.25);
  const shadowTransform = `rotateX(75deg) translateZ(-${radius}px) translateX(${radius / 3}px)`;

  return (
    <figure
      id={id}
      style={{
        top: y - radius,
        left: x - radius,
        position: "absolute",
        display: "block",
        borderRadius: "50%",
        height: diameter,
        width: diameter,
        margin: 0,
        background: `radial-gradient(circle at ${gradientOffset}px ${gradientOffset}px, ${color}, ${gradientColor.darken(
          0.5
        )})`,
      }}
    >
      <span
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 70%)",
          WebkitTransform: shadowTransform,
          OTransform: shadowTransform,
          transform: shadowTransform,
          zIndex: -1,
        }}
      />
    </figure>
  );
};

export default Sphere;
