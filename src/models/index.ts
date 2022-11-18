export interface IModalProps {
  active: boolean;
  setActive: (data: boolean) => void;
  setIsCompleted: (data: boolean) => void;
  children: React.ReactNode;
}
