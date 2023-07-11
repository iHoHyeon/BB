// import { useQueryParam } from '@/hooks/useQueryParam';
// import { assert } from '@toss/assert';

// 공유받은 ver 진입 페이지
const ShareQuizIntroPage = () => {
  // const userId = useQueryParam<number>('user-id');

  // console.log(userId);

  // assert(userId !== undefined, 'userId is required');

  return <main>{/* <h1>{convertUserIdToUserName(userId)}님의 밸런스게임</h1> */}</main>;
};

export default ShareQuizIntroPage;

const convertUserIdToUserName = (userId: number) => '송지수';
