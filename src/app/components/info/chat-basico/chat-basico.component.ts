import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-basico',
  templateUrl: './chat-basico.component.html',
  styleUrls: ['./chat-basico.component.css']
})
export class ChatBasicoComponent implements OnInit {

  private mostrar: boolean = false;
  private msgCli = '';
  private msgSinResponder = '';
  private msgBot = '';

  constructor() { 
    setTimeout(() => {
      this.iniciarChat();
    }, 20000);
  }

  ngOnInit() {
  }

  private togleChat() {
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
    }
  }

  eventoEnterCli(event) {
    if (event.key === "Enter") {
      this.mensajeCliente();
      setTimeout(() => {
        this.mensajeBot();
      }, 4000);
    }
  }

  mensajeBot() {
    if (this.msgSinResponder.length > 0) {
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
        document.createTextNode(this.getRespuesta())
      );
      
      ctn.appendChild(i);
      ctn.appendChild(f);
      ctn.appendChild(c);

      MENSAJES.appendChild(ctn);
      this.scrollCajaMsgDown(MENSAJES);
      this.msgSinResponder = '';
    }
  }

  private scrollCajaMsgDown(MENSAJES) {
    if (MENSAJES.scrollTop  < MENSAJES.scrollHeight - MENSAJES.clientHeight) {
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
      msg = 'Buenas noches. ' + this.getMensajeRandom(this.PROMOCIONES);
    } else if (fecha.getHours() >= 12)  {
      msg = 'Buenos tardes. ' + this.getMensajeRandom(this.PROMOCIONES);
    } else {
      msg = 'Buenos días. ' + this.getMensajeRandom(this.PROMOCIONES);
    }

    return msg;
  }

  private getMensajeRandom(array: string[]): string {
    let i = Math.floor(Math.random() * array.length ); 
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
    'Puede escribirnos a nuestro Whatsapp para cualquier consulta o si necesita mas información.'
  ];

  private RANDOM = [
    'Puede dejarnos su información de contacto para nosotros comunicarnos con usted.',
    'Cualquier consulta o duda puede dejarlas aquí.',
    'Si necesita vender o comprar nosotros somos su mejor opcion.'
  ];

  private PREGUNTAS = [
    'Contamos con hermosas casas y terrenos, todas las puede encontrar en la seccion buscar.',
    'Contamos con mas de ' + this.getRandomNumber() + ' casas. ',
    'Si tenemos arriendos, para mas información sobre ellos nos puede llamar a los siguientes numeros telf 2804483 cel 098475173 o dejarnos sus datos y nosotros nos podremos en contacto con usted.'
  ];

  private getRandomNumber() {
    return Math.floor(Math.random() * 150) + 60;
  }

}
