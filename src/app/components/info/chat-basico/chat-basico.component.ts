import {Component, OnInit} from '@angular/core';
import {MensajeBot} from '../../../models/appCore';
import {BootService} from '../../../services/boot.service';

@Component({
    selector: 'app-chat-basico',
    templateUrl: './chat-basico.component.html',
    styleUrls: ['./chat-basico.component.css']
})
export class ChatBasicoComponent implements OnInit {

    public mensajesBoot: MensajeBot[] = [];

    public mostrar: boolean = false;
    public msgCli = '';
    public msgSinResponder = '';
    public msgBot = '';

    constructor(
        private srv: BootService
    ) {
        setTimeout(() => {
            this.iniciarChat();
        }, 20000);
    }

    async ngOnInit() {
        this.mensajesBoot = await this.srv.getMensajesBoot();
    }

    public togleChat() {
        if (this.mostrar) {
            this.ocultarChat();
        } else {
            this.mostrarChat();
        }
    }

    private iniciarChat() {
        if (this.msgSinResponder.length == 0) {
            this.mostrarChat();
            this.msgSinResponder = 'HOLA';
            this.msgBot = this.getMensajeBienvenida();
            this.mensajeBot();
        }
    }

    private ocultarChat() {
        const MENSAJES = document.querySelector('#mensajes');
        const CAJAMENSAJE = document.querySelector('#caja-mensaje');
        CAJAMENSAJE.classList.remove('mostrar');
        CAJAMENSAJE.classList.add('ocultar');
        MENSAJES.classList.remove('mostrar');
        MENSAJES.classList.add('ocultar');
        this.mostrar = false;
    }

    private mostrarChat() {
        const MENSAJES = document.querySelector('#mensajes');
        const CAJAMENSAJE = document.querySelector('#caja-mensaje');
        CAJAMENSAJE.classList.remove('ocultar');
        CAJAMENSAJE.classList.add('mostrar');
        MENSAJES.classList.remove('ocultar');
        MENSAJES.classList.add('mostrar');
        this.mostrar = true;
    }

    mensajeCliente() {
        if (this.msgCli.length > 0) {
            const MENSAJES = document.querySelector('#mensajes');

            let ctn = document.createElement('div');
            let c = document.createElement('div');
            let f = document.createElement('div');
            let i = document.createElement('img');
            f.classList.add('flecha-derecha');
            i.classList.add('foto');
            i.src = 'https://avatars0.githubusercontent.com/u/42211711?s=460&v=4';
            ctn.classList.add('mensaje-cliente', 'mensaje');
            c.classList.add('contenido');

            c.appendChild(
                document.createTextNode(this.msgCli)
            );

            ctn.appendChild(c);
            ctn.appendChild(f);
            ctn.appendChild(i);

            MENSAJES.appendChild(ctn);

            this.scrollCajaMsgDown(MENSAJES);

            this.msgSinResponder += this.msgCli;
            this.msgCli = '';
            // Para que nuestro bot responda 
            setTimeout(() => {
                this.mensajeBot();
            }, 4000);
        }
    }

    eventoEnterCli(event) {
        if (event.key === 'Enter') {
            this.mensajeCliente();
            setTimeout(() => {
                this.mensajeBot();
            }, 4000);
        }
    }

    mensajeBot() {
        if (this.msgSinResponder.length > 0) {
            let msg = this.getRespuesta();
            if (!msg.includes(this.msgBot)) {
                this.msgBot = +';;' + msg;
                this.enviarMsgBot(msg);
            } else {
                this.enviarMsgBot('Si sus preguntas no fueron resultas le invitamos a que nos envie un correo a grupoinmobiliariofll@hotmail.com. Tambien puede llamarnos o escribirnos a los siguientes numeros 2804483, 098475173. De igual manera puede dejarnos sus datos y nosotros nos pondremos en contacto con usted. Un gusto antenderle. Recuerde somos la mejor inmobiliaria de la ciudad de Cuenca - Ecuador.');
            }
        }
    }

    private enviarMsgBot(msg: string) {
        const MENSAJES = document.querySelector('#mensajes');
        let ctn = document.createElement('div');
        let c = document.createElement('div');
        let f = document.createElement('div');
        let i = document.createElement('img');
        f.classList.add('flecha-izquierda');
        i.classList.add('foto');
        i.src = 'https://pbs.twimg.com/profile_images/876845658472316929/9jQcgE7P_reasonably_small.jpg';
        ctn.classList.add('mensaje-bot', 'mensaje');
        c.classList.add('contenido');

        c.appendChild(
            document.createTextNode(msg)
        );

        ctn.appendChild(i);
        ctn.appendChild(f);
        ctn.appendChild(c);

        MENSAJES.appendChild(ctn);
        this.scrollCajaMsgDown(MENSAJES);
        this.msgSinResponder = '';
    }

    private scrollCajaMsgDown(MENSAJES) {
        if (MENSAJES.scrollTop < MENSAJES.scrollHeight - MENSAJES.clientHeight) {
            MENSAJES.scrollTop += MENSAJES.clientHeight;
        }
    }

    /**
     * Funciones para responder
     */

    private getRespuesta(): string {
        let res = '';
        if (this.msgSinResponder.length > 0) {
            if (
                this.msgSinResponder.includes('?')
                || this.msgSinResponder.includes('info')
            ) {
                res = this.getMensajeRandom(this.PREGUNTAS);
            } else if (
                this.msgSinResponder.includes('promo')
                || this.msgSinResponder.includes('ofer')
            ) {
                res = this.getMensajeRandom(this.PROMOCIONES);
            } else {
                res = this.getMensajeRandom(this.RANDOM);
            }
        } else {
            res = this.getMensajeRandom(this.PROMOCIONES);
        }
        return res;
    }

    private getMensajeBienvenida(): string {
        let msg;
        let fecha = new Date();
        console.log('Hora: ' + fecha.getHours());
        if (fecha.getHours() >= 18) {
            msg = 'Buenas noches. ' + this.getMensajeRandom(this.BIENVENIDA);
        } else if (fecha.getHours() >= 12) {
            msg = 'Buenos tardes. ' + this.getMensajeRandom(this.BIENVENIDA);
        } else {
            msg = 'Buenos días. ' + this.getMensajeRandom(this.BIENVENIDA);
        }

        return msg;
    }

    private getMensajeRandom(array: string[]): string {
        let i = Math.floor(Math.random() * array.length);
        return array[i];
    }


    /**
     * Respuestas del señor bot
     */
    private PROMOCIONES = [
        'Le invitamos que nos siga en nuestras redes sociales, en facebook nos encuentra como Flora Grupo FLL.',
        'En esta pagina puede encontrar casas a los mejores precios.',
        'Ofertamos un gran numero de propiedades.',
        'Si necesita mas información puede escribirnos a nuestro correo: grupoinmobiliariofll@hotmail.com',
        'Si necesita hablar con un asesor de ventas puede comunicarse a los siguientes números: telf 2804483 cel 098475173',
        'Puede escribirnos a nuestro Whatsapp para cualquier consulta o si necesita mas información.',
        'Tenemos promociones interesantes ^-^ Sólo déjanos tus datos aquí',
        'Por favor déjanos tus datos aqui y te contactaremos :) ',
        'Genial !!.. Por favor ingresa tus datos a continuación y en breve te llamaremos',
        'Responderemos tus dudas ^-^ Solo déjanos tus datos y en breve te llamaremos',
        'Genial !!.. Ahora solo déjanos tus datos y en seguida te llamaremos',
        'Un gusto en ayudarte ;) por favor ingresa tus datos y en breve te llamaremos :)',
        'Te ayudaremos ^-^ Por favor déjanos tus datos y en seguida te llamaremos',
        'Un gusto en ayudarte :) Déjanos tus datos y número de contacto y en breve te llamaremos..',
        'Conozca tambien nuestras promociones y asesoramientos. Déjanos tus datos y te contactaremos',
    ];

    private RANDOM = [
        'Puede dejarnos su información de contacto para nosotros comunicarnos con usted.',
        'Cualquier consulta o duda puede dejarlas aquí.',
        'Si necesita vender o comprar nosotros somos su mejor opcion.',
        'Hemos recibido tu mensaje, uno de nuestros agentes te contactará lo mas pronto :)',
        'Que chévere!! ^-^ Hemos recibido tu mensaje en breve uno de nuestros agentes se pondrá en contacto contigo.',
        'Mensaje captado ^-^ Uno de nuestros agentes te llamará en breve. Gracias por preferirnos :)',
        'Gracias !!..  Hemos recibido tu mensaje, en seguida uno de nuestros agentes de contactará :) ',
        'Tu mensaje a sido enviado, nuestro equipo te contactará en breve :)',
        'El equipo de FLL recibió tu mensaje ^-^ Uno de nuestros agentes se contactará contigo.',
        'Grupo Inmobiliario FLL recibió tu mensaje :) Ahora un agente se pondrá en contacto contigo.',
        'Hey, muy bien!! ^-^ Hemos recibido tu mensaje. En breve un agente inmobiliario te contactará.',
        'Un gusto en atenderte. El equipo de FLL recibió tu mensaje, ahora un agente te contactará lo mas pronto.'
    ];

    private PREGUNTAS = [
        'Contamos con hermosas casas y terrenos, todas las puede encontrar en la seccion buscar.',
        'Contamos con mas de ' + this.getRandomNumber() + ' casas. ',
        'Si tenemos arriendos, para mas información sobre ellos nos puede llamar a los siguientes numeros telf 2804483 cel 098475173 o dejarnos sus datos y nosotros nos podremos en contacto con usted.'
    ];

    private BIENVENIDA = [
        'Hola. Bienvenid@ :) ¿En qué te podemos ayudar?',
        'Hey, hola. Un gusto en atenderte :) ¿Te interesa alguna propiedad?',
        'Hola. Si te interesa alguna propiedad, aqui te ayudamos a conseguirla :)',
        'Hola, sabemos que necesitas un descanso y una de nuestras Quintas es ideal para ti :) Dinos que deseas saber',
        'Hey, hola. Gracias por visitarnos :) Puedes preguntar lo que desees aquí..',
        'Hola ^-^ Mucho gusto. ¿En que te podemos ayudar?',
        'Hey, hola.. llegas a tiempo, tenemos asesoramiento gratis!! Pregunta aquí..',
        'Bienvenid@! ^-^ Gracias por visitarnos, Escribe tus dudas aqui..',
        'Hola ^-^ Te gustaria conocer nuestras hermosas Quintas :)  Déjanos tus dudas aquí..'
    ];

    private getRandomNumber() {
        return Math.floor(Math.random() * 150) + 60;
    }

}
