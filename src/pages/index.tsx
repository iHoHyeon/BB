import { Button, Checkbox } from '@mui/material';

export default function Home() {
  return (
    <main>
      <h2>혼자하기</h2>
      <Button>시작하기</Button>

      <h2>친구들과 공유하기</h2>
      <Button>시작하기</Button>

      <Checkbox defaultChecked color="secondary" />
    </main>
  );
}
