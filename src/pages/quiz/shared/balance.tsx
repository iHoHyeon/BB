import { useQueryParam } from '@/hooks/useQueryParam';
import { withErrorBoundary } from '@toss/error-boundary';

// 공유받은 ver 밸런스게임 페이지
const SharedQuizPage = () => {
  return (
    <main>
      <h1>SharedQuizPage</h1>
    </main>
  );
};

export default withErrorBoundary(SharedQuizPage, {
  renderFallback: () => <></>,
});
