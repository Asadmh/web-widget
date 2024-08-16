import styles from '../style/widget.scss'

const template = document.createElement('template');
template.innerHTML = `
  <style>${styles.toString()}</style>
  <div id="container" class="container">
  </div>
`;


class WidgetElement extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  initializeWidget = () => {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const container = this.shadowRoot.getElementById('container');
    
    // Getting the text color
    this.color = this.getAttribute('color');

    this.infoContentEl = this.getInfoContentEl();
    container.appendChild(this.infoContentEl);
  }

  connectedCallback() {
    // Called when the element is added to the DOM
    this.initializeWidget();
  }

  disconnectedCallback() {
    // Clean up event listeners when the widget is removed from the DOM
  }

  getInfoContentEl = () => {
    const infoEl = document.createElement('div');
    infoEl.classList.add('content');
    infoEl.style.color = this.color;
    infoEl.innerHTML = `
      <h1>Hello, I'm Custom JS Widget</h1>
      <p>You can embed me anywhere in your web page.</p>
      <p>Good Bye!</p>
    `
    return infoEl;
  }

  
}


export default WidgetElement;