import { Quiz } from '@/data/quiz';
import styled from '@emotion/styled';
import { Button, Typography, IconButton } from '@mui/material';
import { Home } from '@mui/icons-material';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useRouter } from 'next/router';
import color from '@/constant/color';
import { useEffect, useState } from 'react';

const getQuizAll = async () => {
  const response = await fetch('http://localhost:3000/api/quiz/all');
  const data = (await response.json()) as Quiz[];

  return data;
};

const getQuiz = async (id: number) => {
  const response = await fetch(`http://localhost:3000/api/quiz?id=${id}`);
  const data = (await response.json()) as Quiz;

  return data;
};

export async function getStaticPaths() {
  const allQuizs = await getQuizAll();

  const paths = allQuizs.map(quiz => ({
    params: { id: quiz.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const quiz = await getQuiz(Number(params.id));
  const nextQuizId = (await getQuizAll()).find(quiz => quiz.id > Number(params.id))?.id ?? null;

  return { props: { quiz, nextQuizId } };
}

interface Props {
  quiz: Quiz;
  nextQuizId: number | null;
}

const QuizPage = ({ quiz, nextQuizId }: Props) => {
  const { questionOne, questionTwo } = quiz;

  const router = useRouter();

  const [selectedQuestion, setSelectedQuestion] = useState<'questionOne' | 'questionTwo' | null>(null);

  const handleQ1Click = () => {
    if (selectedQuestion == null) {
      setTimeout(() => {
        setSelectedQuestion('questionOne');
      }, 300);
    }
  };

  const handleQ2Click = () => {
    if (selectedQuestion == null) {
      setTimeout(() => {
        setSelectedQuestion('questionTwo');
      }, 300);
    }
  };

  const handleBackClick = () => {
    router.back();
  };

  const handleNextClick = () => {
    if (nextQuizId == null) {
      return;
    }

    router.push(`/quiz/${nextQuizId}`);
  };

  useEffect(() => {
    setSelectedQuestion(null);
  }, [quiz.id]);

  return (
    <>
      <HeaderContainer justify="space-between" as="header">
        <IconButton onClick={() => router.push('/')}>
          <Home />
        </IconButton>
        <Typography variant="h5" fontSize={18} fontWeight="600">
          Q. {String(quiz.id).padStart(2, '0')}
        </Typography>
        <div style={{ width: 24 }} />
      </HeaderContainer>
      <Container direction="column">
        <QuizContainer>
          <QuizButton
            selected={selectedQuestion === 'questionOne'}
            onClick={handleQ1Click}
            variant="text"
            disabled={selectedQuestion != null}
          >
            {questionOne.question}
          </QuizButton>
          <QuizButton
            selected={selectedQuestion === 'questionTwo'}
            onClick={handleQ2Click}
            variant="text"
            disabled={selectedQuestion != null}
          >
            {questionTwo.question}
          </QuizButton>
        </QuizContainer>

        <Spacing size={64} />

        {nextQuizId == null ? (
          <Flex.Center direction="column">
            <Typography variant="subtitle1">퀴즈가 끝났습니다!</Typography>
            <Spacing size={16} />
            <Button variant="contained" onClick={() => router.push('/')}>
              홈으로 돌아가기
            </Button>
          </Flex.Center>
        ) : (
          <FooterContainer>
            <BackButton variant="outlined" onClick={handleBackClick}>
              이전
            </BackButton>
            <NextButton variant="contained" onClick={handleNextClick}>
              다음질문
            </NextButton>
          </FooterContainer>
        )}
      </Container>
    </>
  );
};

export default QuizPage;

const HeaderHeight = 64;

const HeaderContainer = styled(Flex.Center)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: ${HeaderHeight}px;

  padding: 0 24px;
`;

const Container = styled(Flex.Center)`
  min-height: 100vh;

  margin: 0 24px;
`;

const QuizContainer = styled(Flex.Center)`
  width: 100%;
  gap: 24px;
`;

const QuizButton = styled(Button)<{ selected: boolean }>`
  color: ${({ selected }) => (selected ? 'white !important' : color.primary)};
  background-color: ${({ selected }) => (selected ? color.primary : 'white')};
  transform: ${({ selected }) => (selected ? 'scale(1.1)' : 'scale(1)')};
  transition: all 0.3s ease-in-out;
  flex: 1;
  min-height: 320px;
  border-radius: 20px;

  &:hover {
    background-color: ${({ selected }) => (selected ? color.primary : '#f7f7f7')};
  }
`;

const FooterContainer = styled(Flex.Center)`
  gap: 16px;
  margin-top: 50px;
`;

const BackButton = styled(Button)`
  background-color: white;
`;

const NextButton = styled(Button)``;
