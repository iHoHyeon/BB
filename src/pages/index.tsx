import { Button, Checkbox, FormControlLabel } from '@mui/material';
import styled from '@emotion/styled';
import { Flex, Spacing } from '@toss/emotion-utils';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Spacing size={120} />

      <Flex.Center direction="column">
        <Heading>혼자하기</Heading>
        <Spacing size={32} />
        <ShadowButton color="primary" variant="contained">
          시작하기
        </ShadowButton>

        <Spacing size={64} />

        <Heading>친구들과 공유하기</Heading>
        <Spacing size={32} />
        <ShadowButton color="primary" variant="contained">
          시작하기
        </ShadowButton>
      </Flex.Center>

      <Spacing size={64} />

      <Flex.Center>
        <Flex direction="column">
          <FormControlLabel label="19금 질문만" control={<Checkbox color="primary" />} />
          <FormControlLabel label="19금 질문 포함" control={<Checkbox color="primary" />} />
          <FormControlLabel label="19금 질문 없이" control={<Checkbox color="primary" />} />
        </Flex>
      </Flex.Center>
    </main>
  );
}

const Heading = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

const ShadowButton = styled(Button)`
  color: #f7f7f7;
  font-weight: bold;
  font-size: 15px;

  box-shadow: 2px 6px 35px rgba(178, 89, 195, 0.6);
  border-radius: 20px;

  padding: 12px 32px;
`;
