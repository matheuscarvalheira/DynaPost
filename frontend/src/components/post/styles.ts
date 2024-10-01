import styled from 'styled-components';

export const Post = styled.div``;

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  margin-right: 17px;

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const DatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Date = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.grayLight};
`;

export const EditButton = styled.img`
  float: right;
`

export const ContentContainer = styled.div``;

export const Title = styled.p`
  font-size: 18px;
  margin-bottom: 21px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Content = styled.p`
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;