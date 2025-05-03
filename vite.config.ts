import { defineConfig, Plugin } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
	plugins: [tailwindcss(), web_components_tailwind()],
});

function web_components_tailwind(): Plugin {
	let extracted_custom_properties = '';

	return {
		name: 'web_components_tailwind',
		transform(code, id) {
			if (!id.includes('tailwind-styles-root.css?inline')) {
				return;
			}
			const propertyRegex = /@property\s+[^{]+\{[^}]+\}/gs;

			const matches = code.match(propertyRegex);
			if (matches) {
				extracted_custom_properties = matches.join('\n');

				const outputPath = path.resolve(import.meta.dirname, 'src', 'tailwind-at-properties.css');
				fs.writeFileSync(outputPath, extracted_custom_properties);
				console.log(`Extracted @property rules written to ${outputPath}`);
			}

			return code.replaceAll(':root', ':is(:root, :host)');
		},
	};
}
