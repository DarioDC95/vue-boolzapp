const { createApp } = Vue

createApp({
    data() {
        return {
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
                visible: false,
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
                visible: false,
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
                visible: false,
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
                visible: false,
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
                visible: false,
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
                visible: false,
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
                visible: false,
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
                        }
                    ],
                }
            ]    
        }
    },
    methods: {
        chosenProfile(index) {
            for (let i = 0; i < this.contacts.length; i++) {
                if (i === index) {
                    this.contacts[i].visible = true;
                }
                else {
                    this.contacts[i].visible = false;
                }
            }
        },
        activeProfile() {
            for (let i = 0; i < this.contacts.length; i++) {
                if (this.contacts[i].visible) {
                    return `<div class="profile-img">
                                <img src="./img/avatar${this.contacts[i].avatar}.jpg" alt="${this.contacts[i].name}">
                            </div>
                            <div class="ms-4">
                                <div class="fs-5">${this.contacts[i].name}</div>
                                <div class="notify-warning font-size-xs color-lightgrey">Ultimo accesso oggi alle 12:00</div>
                            </div>`
                }
            }
        },
        insertMessageInChat() {
            let messageReceivedSent = "";
            let messageSent = "";
            for (let i = 0; i < this.contacts.length; i++) {
                if (this.contacts[i].visible == true) {
                    const contactsMessages = this.contacts[i].messages;
                    for (let j = 0; j < contactsMessages.length; j++) {
                        if (contactsMessages[j].status === 'received') {
                            messageReceivedSent += `<div class="message-text bg-white d-flex flex-column align-self-start">
                                                        <div class= "px-3 pt-2 pb-1">${contactsMessages[j].message}</div>
                                                        <div class="px-1 pb-1 align-self-end font-size-xs">${contactsMessages[j].date.split(' ')[1]}</div>
                                                    </div>`
                        }
                        else if (contactsMessages[j].status === 'sent') {
                            messageReceivedSent += `<div class="message-text back-ground_lightgreen d-flex flex-column align-self-end">
                                                        <div class= "px-3 pt-2 pb-1">${contactsMessages[j].message}</div>
                                                        <div class="px-1 pb-1 align-self-end font-size-xs">${contactsMessages[j].date.split(' ')[1]}</div>
                                                    </div>`
                        }
                    }
                }
            }
            console.log(messageReceivedSent);
            return messageReceivedSent;
        }
    },
}).mount('#app')