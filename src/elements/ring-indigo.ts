import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { tailwind } from '../tailwind/tailwind';

@customElement('ring-indigo')
export class RingIndigoElement extends LitElement {
	static styles = [tailwind];

	protected render() {
		return html`<div class="ring ring-indigo-500">
			<slot></slot>
		</div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'ring-indigo': RingIndigoElement;
	}
}
