import { LoadingContainer } from "./styles";

interface LoadingProps {
  loading: boolean;
}

export function Loading({ loading }: LoadingProps) {
  if (!loading) {
    return null;
  }

  return (
    <LoadingContainer>
      <span></span>
    </LoadingContainer>
  );
}