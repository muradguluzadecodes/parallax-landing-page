export const ArrowUp = ({ color = "#40FF75" }: { color?: string }) => (
  <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
    <path
      d="M7 1L13 7M7 1L1 7M7 1V15"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowDown = () => (
  <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
    <path
      d="M7 15L0.999999 9M7 15L13 9M7 15L7 1"
      stroke="#FF1B44"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
