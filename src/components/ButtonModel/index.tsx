interface ButtonProps {
    functionButton: () => void;
    buttonDescription: string;
}

export function Button({functionButton, buttonDescription}: ButtonProps) {
  return (
    <button onClick={functionButton}>
      {buttonDescription}
    </button>
  );
}
