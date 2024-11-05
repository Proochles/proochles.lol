import { CONFIG } from "site.config"
import React from "react"
import { AiFillCodeSandboxCircle } from "react-icons/ai"
import styled from "@emotion/styled"
import { Emoji } from "src/components/Emoji"

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null
  return (
    <>
      <StyledTitle>
        <Emoji>🌟</Emoji> Commitments
      </StyledTitle>
      <StyledWrapper>
        {CONFIG.projects.map((project, idx) => (
          <a
            key={idx}
            href={`${project.href}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiFillCodeSandboxCircle className="icon" />
            <div className="content">
              <div className="name">{project.name}</div>
              <div className="year">{project.year}</div>
              {project.description && (
                <div className="description">{project.description}</div>
              )}
            </div>
          </a>
        ))}
      </StyledWrapper>
    </>
  )
}

export default ServiceCard

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`

const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  margin-bottom: 2.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
    
  > a {
    display: flex;
    padding: 1rem;
    gap: 0.75rem;
    align-items: flex-start;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
    cursor: pointer;
    text-decoration: none;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: ${({ theme }) => theme.colors.gray5};
    }

    .icon {
      font-size: 1.75rem;
      line-height: 2.25rem;
    }

    .content {
      display: flex;
      flex-direction: column;
    }

    .name {
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: bold;
    }

    .year {
      font-size: 0.75rem;
      line-height: 1rem;
      color: ${({ theme }) => theme.colors.gray8};
    }

    .description {
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: ${({ theme }) => theme.colors.gray9};
      margin-top: 0.5rem;
    }
  }
`
