export interface IModalProps {
  active: boolean;
  setActive: (data: (data: boolean) => boolean) => void;
  setIsCompleted: (data: boolean) => void;
  children: React.ReactNode;
}
