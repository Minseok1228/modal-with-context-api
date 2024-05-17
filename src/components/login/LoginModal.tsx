import { useModalContext } from '../../context/ModalContext';
import Button from '../button';
import Modal from '../modal';

function LoginModal() {
  const { close } = useModalContext();
  return (
    <Modal>
      <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
        <input type="text" />
        <input type="text" />
        <Button onClick={close}>로그인</Button>
      </form>
    </Modal>
  );
}

export default LoginModal;
