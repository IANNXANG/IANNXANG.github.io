# Repository Guidelines

## Publication Figure Workflow

Use the following workflow whenever a publication thumbnail is added or refreshed.

### 1. Source priority

1. Prefer the paper's arXiv LaTeX source package. Download the source, inspect the `figure`/`figure*` declarations and referenced assets, and extract the original figure file.
2. Prefer vector assets from the source package (`.pdf`, `.svg`, or `.eps`) over raster images.
3. If the arXiv source does not contain a usable figure, use the paper's official project page or code repository.
4. Crop a figure from the rendered paper PDF only as a last resort.
5. Do not use screenshots from the arXiv abstract page, browser PDF viewer, or project page when an original asset is available.

### 2. Figure selection

- Prefer a clean teaser, introductory overview, method diagram, or framework figure that communicates the paper's main idea.
- Do not include the paper caption, page header/footer, surrounding body text, or unrelated neighboring figures.
- Preserve meaningful panel labels, legends, arrows, and annotations. Do not alter scientific content.
- When the introductory and method figures are both useful, stack them vertically with the intro figure on top and the method figure below. Crop excess whitespace and target a balanced, near-square composition. This is the preferred treatment for SpatialCLI and HiR.
- For a multi-panel figure stored as separate source files, reconstruct the intended panel order before export.

### 3. Rendering and export

- Render vector files directly at high resolution; do not rasterize a screenshot and upscale it.
- Preserve the original aspect ratio. Never stretch or distort a figure.
- Use a white background unless transparency is required by the original figure.
- Crop only empty margins. Do not clip labels, legends, or diagram elements.
- Export the website thumbnail as WebP, normally 1200 px wide with high visual quality. Do not upscale a genuinely low-resolution source beyond what remains sharp.
- Use consistent spacing when composing multiple figures, without adding decorative captions or borders that are not part of the paper.

### 4. Repository integration

- Save the final asset as `assets/publications/<paper-slug>.webp`.
- Reference the local asset from the corresponding entry in `publications.js`; do not hotlink a remote image.
- Keep filenames lowercase and stable.
- Remove downloaded archives, extracted LaTeX trees, rendered intermediates, and other temporary files after the final asset is produced.

### 5. Verification

- Visually inspect every exported thumbnail for sharpness, correct panel order, complete labels, clean cropping, and absence of captions or page text.
- Confirm that every publication image loads locally and that no asset path is broken.
- Confirm the publication card remains left-image/right-text under the site's single shared layout logic.
- Run syntax and diff checks before committing. Do not push unless the user explicitly requests it.
