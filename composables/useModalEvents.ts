import { useModalStore } from "~/stores/modal";

type KeyFunctions = {
  [key: string]: (id: string) => void;
};
export const useModalEvent = () => {
  const modalStore = useModalStore();

  const { readMail, archiveMail } = useMailStore();

  const keys: KeyFunctions = {
    r: readMail,
    a: archiveMail,
    Escape: modalStore.closeModal,
    Esc: modalStore.closeModal,
  };
  onMounted(() => {
    document.addEventListener("keydown", handleEvent);
  });
  onUnmounted(() => {
    document.removeEventListener("keydown", handleEvent);
  });
  const handleEvent = (event: KeyboardEvent) => {
    if (Object.keys(keys).includes(event.key)) {
      if (modalStore.mail?.id) {
        keys[event.key](modalStore.mail?.id);
      }
    }
  };
};
