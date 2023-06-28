import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import styled from 'styled-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import Link from 'next/link';

import StartBtn from '@/components/common/startBtn';

export default function Home() {
  const handleChange = (event: {
    target: {
      id: any;
      checked: boolean;
    };
  }) => {
    const isChecked = event.target.checked;
    const name = event.target.id;

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

      <Flex.Center direction="column">
        <div className="flex flex-col gap-3">
          <Label>
            <RadioInput type="radio" id="only" name="options" onChange={handleChange} />
            <RadioText>19금 질문만</RadioText>
          </Label>
          <Label>
            <RadioInput type="radio" id="include" name="options" onChange={handleChange} />
            <RadioText>19금 질문 포함</RadioText>
          </Label>
          <Label>
            <RadioInput type="radio" id="exclude" name="options" onChange={handleChange} />
            <RadioText>19금 질문 없이</RadioText>
          </Label>
        </div>
      </Flex.Center>
    </main>
  );
}

const Heading = styled.h1`
  line-height: 120%;
  letter-spacing: 1.08px;
`;

const RadioInput = styled.input.attrs({ type: 'radio' })<{ onChange: any }>`
  appearance: none;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
  background: #f7f7f7;

  &:hover {
    cursor: pointer;
  }

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #bf64d0;
  }
`;

const RadioText = styled.h1`
  font-size: 15px;
  letter-spacing: 0.9px;
`;

const Label = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  user-select: none;
`;
