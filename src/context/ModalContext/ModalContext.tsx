import React, {
  PropsWithChildren,
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
/**
 * 모달이 적용되는 방법
 * open에 component를 받는다
 * 받은 component를 state에 넣는다
 * state에 component가 있으면 모달을 띄운다.
 */

//1.만든다
// interface / 기본값
interface ModalContextValue {
  open: (modalElement: ReactElement) => void;
  close: () => void;
}
//기본값
const initialModalContext = {
  open: () => {},
  close: () => {},
};
//모달 생성
const ModalContext = createContext<ModalContextValue>(initialModalContext);

//2.사용한다
export const useModalContext = () => useContext(ModalContext);
//3.범위를 지정한다
export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modal, setModal] = useState<ReactElement | null>(null);
  const open: ModalContextValue['open'] = useCallback((modalElement: ReactElement) => {
    //최적화를 위한 메모이제이션
    setModal(modalElement);
  }, []);
  const close: ModalContextValue['close'] = useCallback(() => {
    setModal(null);
  }, []);
  const value = useMemo(() => ({ open, close }), []); //객체를 return해서 ()=>{}가 아닌 ()=>({객체})
  return (
    <ModalContext.Provider value={value}>
      {children}
      {modal}
    </ModalContext.Provider>
  );
};
