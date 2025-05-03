import { LitElement, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { tailwind } from './styles/tailwind/tailwind';

@customElement('red-text')
export class RedTextElement extends LitElement {
	protected render(): TemplateResult {
		return html`<p class="text-red-600"><slot></slot></p> `;
	}

	static styles = [tailwind];
}

declare global {
	interface HTMLElementTagNameMap {
		'red-text': RedTextElement;
	}
}
