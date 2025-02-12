import { LitElement, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { wind } from './styles/wind';

@customElement('red-text')
export class RedTextElement extends LitElement {
	protected render(): TemplateResult {
		return html`<p class="text-red-600"><slot></slot></p> `;
	}

	static styles = [wind];
}

declare global {
	interface HTMLElementTagNameMap {
		'red-text': RedTextElement;
	}
}
