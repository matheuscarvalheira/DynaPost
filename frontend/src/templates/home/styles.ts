import { Container, Post } from "@/components/post/styles";
import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

export const Feed = styled.section`
  width: 750px;
  margin-top: 30px;
  background-color: ${({ theme }) => theme.blackRaisin};
  padding: 43px 35px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 90px;

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    background-color: transparent;
    gap: 50px;
    padding: 0;
  }

  ${Post} {
    cursor: pointer;

    &:not(:last-child) {
      &:after {
        content: '';
        height: 1px;
        width: 100%;
        display: block;
        position: relative;
        top: 45px;
        background-color: ${({ theme }) => theme.arsenic};
        cursor: auto;

        @media (max-width: 600px) {
          top: 25px;
        }
      }
    }

    ${Container} {
      @media (max-width: 600px) {
        padding: 0 40px;
      }
    }
  }
`;