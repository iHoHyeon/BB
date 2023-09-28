export type Question = {
  question: string;
  choiceRate: number;
};

export type Quiz = {
  id: number;
  questionOne: Question;
  questionTwo: Question;
};

export const quizData: Quiz[] = [
  {
    id: 1,
    questionOne: {
      question: 'A',
      choiceRate: 0.5,
    },
    questionTwo: {
      question: 'B',
      choiceRate: 0.5,
    },
  },
  {
    id: 2,
    questionOne: {
      question: '준기',
      choiceRate: 0.5,
    },
    questionTwo: {
      question: '지수',
      choiceRate: 0.5,
    },
  },
  {
    id: 3,
    questionOne: {
      question: '서울',
      choiceRate: 0.5,
    },
    questionTwo: {
      question: '부산',
      choiceRate: 0.5,
    },
  },
  {
    id: 4,
    questionOne: {
      question: '갤럭시',
      choiceRate: 0.5,
    },
    questionTwo: {
      question: '아이폰',
      choiceRate: 0.5,
    },
  },
  {
    id: 5,
    questionOne: {
      question: '짜장',
      choiceRate: 0.5,
    },
    questionTwo: {
      question: '짬뽕',
      choiceRate: 0.5,
    },
  },
  {
    id: 6,
    questionOne: {
      question: '질문이 긴 문제 1 질문이 긴 문제 1 질문이 긴 문제 1 질문이 긴 문제 1 질문이 긴 문제 1 질문이 긴 문제 1',
      choiceRate: 0.5,
    },
    questionTwo: {
      question: ' 질문이 긴 문제 2질문이 긴 문제 2질문이 긴 문제 2질문이 긴 문제 2질문이 긴 문제 2질문이 긴 문제 2',
      choiceRate: 0.5,
    },
  },
];
