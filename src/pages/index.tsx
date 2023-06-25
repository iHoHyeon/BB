import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import styled from 'styled-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import Link from 'next/link';

import StartBtn from '@/components/common/startBtn';

export default function Home() {
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
        <Link
          href={{
            pathname: '/quiz/balance',
            query: { mode: 'single' },
          }}
        >
          <StartBtn />
        </Link>

        <Spacing size={64} />

        <Heading>친구들과 공유하기</Heading>
        <Spacing size={32} />
        <Link href={'/quiz/share/intro'}>
          <StartBtn />
        </Link>
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
