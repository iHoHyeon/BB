import { useQueryParam } from '@/hooks/useQueryParam';
import { withErrorBoundary } from '@toss/error-boundary';

const QuizPage = () => {
  const quizId = useQueryParam<number>('quiz-id');
  const mode = useQueryParam<'share' | 'single'>('mode');

  return (
    <main>
      <h1>밸런스게임 {quizId}번</h1>
      <h2>{mode === 'share' ? '공유하기 ver' : '혼자하기 ver'}</h2>
    </main>
  );
};

export default withErrorBoundary(QuizPage, {
  renderFallback: () => <></>,
});
