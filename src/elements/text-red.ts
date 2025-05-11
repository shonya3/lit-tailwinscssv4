import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { tailwind } from '../tailwind/tailwind';

@customElement('text-red')
export class TextRedElement extends LitElement {
	static styles = [tailwind];

	protected render() {
		return html`<p class="text-red-600"><slot></slot></p>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'text-red': TextRedElement;
	}
}
