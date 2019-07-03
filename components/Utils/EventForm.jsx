import React, { Component } from 'react';

class EventForm extends Component {
  render() {
    return (
      <>
        <p>Necesitamos que completes estos datos para que puedas ingresar al evento.</p>
        <form>
          <label htmlFor="name" className="flex items-center mv3">
            <span className="mr3 w-20">Nombre</span>
            <input
              type="text"
              name="name"
              id="name"
              className="b--black-20 ba bw1 flex-auto pa2"
              placeholder="Cosme"
              required
            />
          </label>
          <label htmlFor="surname" className="flex items-center mv3">
            <span className="mr3 w-20">Apellido</span>
            <input
              type="text"
              name="surname"
              id="surname"
              className="b--black-20 ba bw1 flex-auto pa2"
              placeholder="Fulanito"
              required
            />
          </label>
          <label htmlFor="document" className="flex items-center mv3">
            <span className="mr3 w-20">Documento</span>
            <input
              type="number"
              name="document"
              id="document"
              className="b--black-20 ba bw1 flex-auto pa2"
              placeholder="30000000"
              required
            />
          </label>
          <label htmlFor="email" className="flex items-center mv3">
            <span className="mr3 w-20">Email</span>
            <input
              type="email"
              name="email"
              id="email"
              className="b--black-20 ba bw1 flex-auto pa2"
              placeholder="cosme.fulanito@jquery.com"
              required
            />
          </label>
          <div className="mt4 tc">
            <button
              type="submit"
              className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 f6 grow ph3 pointer pv2 ttu"
            >
              Enviar
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default EventForm;
