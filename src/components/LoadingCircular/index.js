import { SpinnerRound } from "spinners-react";

export default function LoadingCircular({ size }) {
  return (
    <SpinnerRound
      size={size || 75}
      thickness={100}
      speed={100}
      color="#FFFFFF"
    />
  );
}
