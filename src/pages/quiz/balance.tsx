import { useQueryParam } from '@/hooks/useQueryParam';
import { withErrorBoundary } from '@toss/error-boundary';
import { Flex, Spacing } from '@toss/emotion-utils';
import ArrowLeftSVG from '@/assets/icons/arrowLeft';
import ArrowRightSVG from '@/assets/icons/arrowRight';
import HomeSVG from '@/assets/icons/home';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { db } from '../../../firebase';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';

const QuizPage = () => {
  const quizId = useQueryParam<number>('quiz-id');
  const mode = useQueryParam<'share' | 'single'>('mode');

  const [questions, setQuestions] = useState<any[]>([]);

  const usersCollectionRef = collection(db, 'question');
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setQuestions(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const [index, setIndex] = useState(0);
  const [checked, setChecked] = useState('');

  const handleNextClick = () => {
    if (checked !== '') {
      const updateCount = async (id: string, count: string) => {
        const qusetionDoc = doc(db, 'question', id);

        const curCount = count === 'countA' ? questions[index].countA : questions[index].countB;
        const newField = count === 'countA' ? { countA: curCount + 1 } : { countB: curCount + 1 };
        await updateDoc(qusetionDoc, newField);
      };

      updateCount(questions[index].id, checked);

      if (index < questions.length - 1) {
        setChecked('');
        setIndex(index => index + 1);
      }
    }
  };

  const handlePrevClick = () => {
    if (index > 0) {
      setIndex(index => index - 1);
    }
  };

  const handleClickRadioButton = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.id);
  };

  return (
    <Flex.Center className="min-h-screen">
      <Flex.Center direction="column" className="w-[393px] min-h-screen shadow-lg p-5">
        <Header>
          <Link href={'/'} className="mr-auto">
            <HomeSVG />
          </Link>
          <h1 className="mr-auto">{`Q. ${String(index + 1).padStart(2, '0')}`}</h1>
        </Header>

        <Spacing size={120} />

        <Flex.Center className="gap-4 pb-[120px] border-b-[#d9d9d9]] border-b-[2px]">
          {questions[index] && (
            <>
              <label className="text-center">
                <RadioInput
                  type="radio"
                  id="countA"
                  value={questions[index].A}
                  name="radio"
                  onChange={handleClickRadioButton}
                  checked={checked === 'countA'}
                />
                <RadioText>{questions[index].A}</RadioText>
              </label>
              <label className="text-center">
                <RadioInput
                  type="radio"
                  id="countB"
                  value={questions[index].B}
                  name="radio"
                  onChange={handleClickRadioButton}
                  checked={checked === 'countB'}
                />
                <RadioText>{questions[index].B}</RadioText>
              </label>
            </>
          )}
        </Flex.Center>

        <Footer>
          <button className="p-4 bg-white rounded-full" onClick={handlePrevClick}>
            <ArrowLeftSVG />
          </button>
          <NextButton onClick={handleNextClick}>
            <h1 className="text-[#f7f7f7] text-[15px] tracking-[0.9px]">다음질문</h1>
            <div className="absolute right-4">
              <ArrowRightSVG />
            </div>
          </NextButton>
        </Footer>
      </Flex.Center>
    </Flex.Center>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Footer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 50px;
`;

const RadioText = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 160px;
  height: 320px;

  background: #f7f7f7;
  line-height: 100%;
  letter-spacing: 1.44px;
  color: #bf64d0;
  border-radius: 20px;

  padding: 8px;
`;

const RadioInput = styled.input.attrs({ type: 'radio' })<{ onChange: any }>`
  display: none;

  &:hover + ${RadioText} {
    cursor: pointer;
    box-shadow: 2px 6px 35px 0px rgba(178, 89, 195, 0.6);
  }

  &:checked + ${RadioText} {
    background: #bf64d0;
    color: white;
    box-shadow: 2px 6px 35px 0px rgba(178, 89, 195, 0.6);
  }
`;

const NextButton = styled.div`
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
  width: 161px;
  height: 47px;
  border-radius: 20px;
  background-color: #bf64d0;
  box-shadow: 2px 6px 35px 0px rgba(178, 89, 195, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default withErrorBoundary(QuizPage, {
  renderFallback: () => <></>,
});
