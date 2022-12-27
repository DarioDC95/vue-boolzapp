const { createApp } = Vue

createApp({
    data() {
        return {
            // barra di ricerca
            search: '',

            // scrivo messaggio
            messageEnter: '',

            // setto il profilo attivo
            profileActive: 0,

            // array di contatti
            contacts: [
                {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                        }
                    ],
                },
                {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                        {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                        }
                    ],
                },
                {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                        {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                        },
                        {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                        },
                        {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                        }
                    ],
                },
                {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                        }
                    ],
                },
                {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                        }
                    ],
                },
                {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                        }
                    ],
                },
                {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                        }
                    ],
                },
                {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                        },
                    ],
                },
            ]    
        }
    },
    methods: {
        // funzione di ricerca profili
        filterdContacts() {
            let searchProfile = this.search.toLowerCase()
            for (let i = 0; i < this.contacts.length; i++) {
                if (this.contacts[i].name.toLowerCase().includes(searchProfile)) {
                    this.contacts[i].visible = true;
                }
                else if (!(this.contacts[i].name.toLowerCase().includes(searchProfile))) {
                    this.contacts[i].visible = false;
                }
            }
        },

        // definisco profileActive
        chosenProfile(index) {
            this.profileActive = index;
        },

        // funzione per scrivere il messaggio e risposta
        enterMessage() {
            if (this.messageEnter != '') {
                const presentDay = new Date;
                const presentDayOK = presentDay.getDate() + '/' + (presentDay.getMonth() + 1) + '/' + presentDay.getFullYear() + ' ' + ((presentDay[Symbol.toPrimitive]("string")).split(" ")[4]);
                let newMessage = {
                                     date: presentDayOK,
                                     message: this.messageEnter,
                                     status: 'Sent'
                                 };
                this.contacts[this.profileActive].messages.push(newMessage);
                this.messageEnter = '';

                setTimeout(() => {
                    let newAnswer = {
                                        date: presentDayOK,
                                        message: 'Sono un Jedi, se credi nella giustizia aiutami a sconfiggere Dark Wader.',
                                        status: 'received'
                                    }
                    this.contacts[this.profileActive].messages.push(newAnswer);
                }, 1000)
            }
        },

        // abbrevio ultimo messaggio inviato/ricevuto
        shortMessage(index) {
            let lastMessage = this.contacts[index].messages[this.contacts[index].messages.length - 1].message;
            if (lastMessage.length > 25) {
                lastMessage = lastMessage.substring(0, 26) + '...';
            }
            return lastMessage
        },

        // abbrevio il tempo in ore e minuti
        shortTime(date) {
            const dayTime = date.split(' ')[1];
            const [hours, minutes, seconds] = dayTime.split(':');
            const dayTimeOK = hours + ':' + minutes;
            return dayTimeOK
        },

        // BONUS
        // drop-down_chat dei messaggi
        showDropdownChat(index) {
            let idActive = `active-${index}`;
            let activeDropdown = document.getElementById(idActive);
            console.log(activeDropdown)
            if (activeDropdown != null) {
                activeDropdown.classList.toggle('show_drop-down');
            }
        },
        
        // cancellare il messaggio
        eraseMessage(index) {
            const presentDay = new Date;
            const presentDayOK = presentDay.getDate() + '/' + (presentDay.getMonth() + 1) + '/' + presentDay.getFullYear() + ' ' + ((presentDay[Symbol.toPrimitive]("string")).split(" ")[4]);
            let ReplaceMessage = {
                                     date: presentDayOK,
                                     message: "Hai eliminato tutti i messaggi di questo contatto",
                                     status: 'received'
                                 };
            if (this.contacts[this.profileActive].messages.length == 1) {
                this.contacts[this.profileActive].messages.splice(index, 1, ReplaceMessage)
            }
            else {
                this.contacts[this.profileActive].messages.splice(index, 1)
            }
        }
    },
}).mount('#app')