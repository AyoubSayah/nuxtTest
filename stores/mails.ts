export interface Imail {
  id: string;
  subject: string;
  body: string;
  sender: string;
  recipient: string;
  read?: boolean;
  isSelected?: boolean;
}

interface IMails {
  mails: Imail[];
  isLoading:boolean
  archivedMails: Imail[];
}

export const useMailStore = defineStore("mails", {
  state: (): IMails => {
    return { mails: [], archivedMails: [] ,isLoading:true};
  },
  getters: {
    getSelectedMail(state): Imail[] {
      return state.mails.filter((mail: Imail) => mail.isSelected);
    },
  },

  actions: {
    async getMails() {
      this.isLoading=true
      const data = await $fetch<any>(
        "https://659265b3bb129707198faf38.mockapi.io/api/v1/list/emails"
      );
      if (data) {
        this.mails = data.map((mail: Imail) => {
          return {
            ...mail,
            isSelected: false,
          };
        });
        this.isLoading=false

      }
    },
    archiveMail(id: string) {
      const archivedMail = this.mails.find((data) => data.id === id);
      if (archivedMail) {
        this.mails = this.mails.filter((data) => data.id != id);
        this.archivedMails = [{...archivedMail,isSelected:false}, ...this.archivedMails];
      }
    },
    archiveSelectedMails() {
      this.getSelectedMail.forEach((mail) => {
        this.archiveMail(mail.id);
      });
    },
    readMail(id: string) {
      for (const mail of this.mails) {
        if (mail.id === id) {
        
          mail.read = !mail.read;
          break;
        }
      }
    },
    readSelectedMails() {
      this.getSelectedMail.forEach((mail) => {
        this.readMail(mail.id);
      });
    },
    resetSelectedElement(){
      this.mails.forEach(mail=>{
        mail.isSelected=false
      })
    }
  },
});
