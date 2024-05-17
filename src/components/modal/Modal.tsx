import { PropsWithChildren } from 'react';
import { useModalContext } from '../../context/ModalContext';

function Modal({ children }: PropsWithChildren) {
  const { close } = useModalContext();
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex bg-black/50 backdrop-blur-sm" onClick={close}>
      <section className="bg-white m-auto py-5 px-10 rounded-md" onClick={(e) => e.stopPropagation()}>
        {children}
      </section>
    </div>
  );
}

export default Modal;
