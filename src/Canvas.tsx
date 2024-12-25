import { FC, CanvasHTMLAttributes } from "react";

type CanvasProps = CanvasHTMLAttributes<HTMLCanvasElement>;

export const Canvas: FC<CanvasProps> = (props): JSX.Element => (
  <canvas {...props} />
);
