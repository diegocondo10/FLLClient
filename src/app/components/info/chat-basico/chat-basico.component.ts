import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-basico',
  templateUrl: './chat-basico.component.html',
  styleUrls: ['./chat-basico.component.css']
})
export class ChatBasicoComponent implements OnInit {

  private mostrar: boolean = false;
  private msgCli = '';

  constructor() { }

  ngOnInit() {
    const HEADCHAT = document.querySelector('#chat-header');
    const MENSAJES = document.querySelector('#mensajes');
    const CAJAMENSAJE = document.querySelector('#caja-mensaje');

    HEADCHAT.addEventListener('click', function() {
      if (this.mostrar) {
        CAJAMENSAJE.classList.remove('mostrar');
        CAJAMENSAJE.classList.add('ocultar');
        MENSAJES.classList.remove('mostrar');
        MENSAJES.classList.add('ocultar');
        this.mostrar = false;
      } else {
        CAJAMENSAJE.classList.remove('ocultar');
        CAJAMENSAJE.classList.add('mostrar');
        MENSAJES.classList.remove('ocultar');
        MENSAJES.classList.add('mostrar');
        this.mostrar = true;
      }
    });
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
  
      if (MENSAJES.scrollTop  < MENSAJES.scrollHeight - MENSAJES.clientHeight) {
        MENSAJES.scrollTop += MENSAJES.clientHeight;
      }
      this.msgCli = '';
    }
  }

  eventoEnterCli(event) {
    if (event.key === "Enter") {
      this.mensajeCliente();
    }
  }
  

}
