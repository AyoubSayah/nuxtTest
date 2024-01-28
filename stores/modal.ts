import type { Imail } from "./mails";

interface IModal {
  isOpen: boolean;
  mail?: Imail;
}

export const useModalStore = defineStore("modal", {
  state: (): IModal => {
    return { isOpen: false };
  },
  actions: {
    openModal(mail: Imail) {
      this.isOpen = true;
      this.mail = mail;
    },
    closeModal() {
      this.isOpen = false;
      this.mail = undefined;
    },
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
});
