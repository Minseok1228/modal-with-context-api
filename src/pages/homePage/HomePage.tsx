import Button from '../../components/button';
import LoginModal from '../../components/login/LoginModal';
import SampleModal from '../../components/sample/SampleModal';
import { useModalContext } from '../../context/ModalContext';

function HomePage() {
  const modal = useModalContext(); //open을 꺼내지 않는 이유 : 토스트 오픈을 함께 쓸 수 도 있으므로, 공용페이지는 modal.open사용
  const handleClickOpenModal = () => {
    modal.open(<LoginModal />);
  };
  const handleClickSample = () => {
    modal.open(<SampleModal />);
  };
  return (
    <main className="flex flex-col">
      <h1 className="text-center mt-10 text-4xl font-bold">Context with Modal</h1>
      <section className="flex justify-center mt-10">
        <Button onClick={handleClickOpenModal}>Modal Test</Button>
        <Button onClick={handleClickSample}>Sample Test</Button>
      </section>
    </main>
  );
}

export default HomePage;
