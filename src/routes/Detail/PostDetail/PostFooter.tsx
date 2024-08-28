import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import usePostQuery from "src/hooks/usePostQuery";

type Props = {};

const Footer: React.FC<Props> = () => {
  const router = useRouter();
  return (
    <StyledWrapper>
      <a onClick={() => router.push("/")}>← Back</a>
    </StyledWrapper>
  );
};

const PostDetail: React.FC<Props> = () => {
  const data = usePostQuery();

  if (!data) return null;

  const scrolling = (data.scrolling && data.scrolling?.[0]) || undefined;

  return (
    <StyledWrapper>
      {scrolling === 'enabled' ? (
        <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ↑ Top
        </a>
      ) : (
        <span>↑ Top</span>
      )}
    </StyledWrapper>
  );
};

// Update the export to match the component you want to export
export default PostDetail;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray10};
  a {
    margin-top: 0.5rem;
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
    }
  }
`;
