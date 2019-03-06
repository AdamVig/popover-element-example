import { LitElement, html, css } from '/web_modules/lit-element.js'
import '/web_modules/@github--details-menu-element.js'

class PopoverExample extends LitElement {
  static get styles () {
    return css`
    summary {
      list-style: none;
    }
    details-menu {
      /* Shadows from https://github.com/angular/material2/blob/d232d7c59/src/lib/core/style/_elevation.scss */
      box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2),
      0px 10px 14px 1px rgba(0, 0, 0, 0.14),
      0px 4px 18px 3px rgba(0, 0, 0, 0.12);
      padding: 5px;
      font-size: 25px;
      font-weight: bold;
      display: block;
      width: 300px;
      border-radius: 0 20px 20px 20px;
      display: flex;
      flex-direction: column;
    }
    details-menu button {
      display: block;
    }
    details-menu p {
      margin: 10px;
    }
    .close {
      padding: 0;
      width: 20px;
      height: 20px;
    }
    .log-out {
      width: 150px;
      height: 75px;
      align-self: center;
    }`
  }

  static get properties () {
    return {
      name: String
    }
  }

  logOut () {
    console.log('log out')
  }

  render () {
    return html`
    <details>
      <summary>
        <button type="button">${this.name}</button>
      </summary>
      <details-menu role="menu">
        <button type="button" role="menuitem" aria-label="close" class="close">X</button>
        <p>${this.name}</p>
        <button type="button" role="menuitem" class="log-out" @click="${this.logOut}">Log Out</button>
      </details-menu>
    </details>
    `
  }
}

customElements.define('popover-example', PopoverExample)
