import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-basico',
  templateUrl: './chat-basico.component.html',
  styleUrls: ['./chat-basico.component.css']
})
export class ChatBasicoComponent implements OnInit {

  private mostrar: boolean = false;
  /*private HEADCHAT = document.querySelector('#chat-header');
  private MENSAJES = document.querySelector('#mensajes');
  private CAJAMENSAJE = document.querySelector('#caja-mensaje');
  private TXTMENSAJE = document.querySelector('#txt-mensaje');*/

  constructor() { }

  ngOnInit() {
    const HEADCHAT = document.querySelector('#chat-header');
    const MENSAJES = document.querySelector('#mensajes');
    const CAJAMENSAJE = document.querySelector('#caja-mensaje');
    const TXTMENSAJE = document.querySelector('#txt-mensaje');

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


    TXTMENSAJE.addEventListener('keyup', function(e) {
      let key = e.keyCode || e.witch;
      if (key == 13) {
        agregarMensaje();
      }
    });
  
    function agregarMensaje() {
      let valor = TXTMENSAJE.value;
      if (valor.length > 0) {
          getMsgCliente(valor)
          TXTMENSAJE.value = '';
          if (MENSAJES.scrollTop  < MENSAJES.scrollHeight - MENSAJES.clientHeight) {
            MENSAJES.scrollTop += MENSAJES.clientHeight;
          }
      }
    }

    function getMsgCliente(msg){
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
        document.createTextNode(msg)
      );
  
      ctn.appendChild(c);
      ctn.appendChild(f);
      ctn.appendChild(i);
  
      MENSAJES.appendChild(ctn);
    }

  }

  

}
