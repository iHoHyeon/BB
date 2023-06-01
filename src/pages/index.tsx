import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import styled from '@emotion/styled';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useState } from 'react';

export default function Home() {
  const [questions, setQuestions] = useState([]);

  const handleChange = (event: { target: { checked: boolean; value: string } }) => {
    const isChecked = event.target.checked;
    const name = event.target.value;

    console.log(isChecked, name);

    // if
  };

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
          <FormControl>
            <RadioGroup name="controlled-radio-buttons-group" onChange={handleChange} color="primary">
              <FormControlLabel label="19금 질문만" value="only" control={<Radio />} />
              <FormControlLabel label="19금 질문 포함" value="include" control={<Radio />} />
              <FormControlLabel label="19금 질문 없이" value="exclude" control={<Radio />} />
            </RadioGroup>
          </FormControl>
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
