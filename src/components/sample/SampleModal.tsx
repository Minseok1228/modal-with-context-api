import { useModalContext } from '../../context/ModalContext';
import Button from '../button';
import Modal from '../modal';

function SampleModal() {
  const { close } = useModalContext();
  return (
    <Modal>
      <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
        <input type="text" />
        <input type="text" />
        <Button onClick={close}>샘플이다 이말이야</Button>
      </form>
    </Modal>
  );
}

export default SampleModal;
