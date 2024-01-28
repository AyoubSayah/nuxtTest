type KeyFunctions = {
  [key: string]: () => void;
};
export const useKeyEvent = () => {
  const { archiveSelectedMails, readSelectedMails } = useMailStore();

  const keys: KeyFunctions = {
    r: readSelectedMails,
    a: archiveSelectedMails,
  };
  onMounted(() => {
    document.addEventListener("keydown", handleEvent);
  });
  onUnmounted(() => {
    document.removeEventListener("keydown", handleEvent);
  });
  const handleEvent = (event: KeyboardEvent) => {
    if(Object.keys(keys).includes(event.key)){

    keys[event.key]();
    }
  };
};
