import styled from 'styled-components';

const StartBtn = () => {
  return (
    <div>
      <StartButton>시작하기</StartButton>
    </div>
  );
};

export default StartBtn;

const StartButton = styled.button`
  color: #f7f7f7;
  background-color: #bf64d0;
  font-size: 15px;

  width: 160px;
  height: 47px;

  box-shadow: 2px 6px 35px rgba(178, 89, 195, 0.6);
  border-radius: 20px;

  padding: 12px 32px;
`;
