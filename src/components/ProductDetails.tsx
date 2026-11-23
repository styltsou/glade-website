import React from 'react';
import AppCapture from './AppCapture';

// The compositions frame captures of Glade itself; no controls are re-created here.
export function Features() {
  return <div className="detail-grid faithful-features">
    <article className="ss-stage detail-card diagram-card">
      <div className="detail-copy"><h3>Diagrams,<br />as you write.</h3><p>Mermaid diagrams render in your notes. Open the full view to keep the code beside the diagram.</p></div>
      <div className="capture-stage diagram-capture"><AppCapture name="diagram-full" compact alt="Glade's Mermaid full view, with the real source editor, rendered diagram, and zoom controls." /></div>
    </article>
    <article className="ss-stage detail-card themes-card">
      <div className="detail-copy"><h3>Ten themes,<br />light and dark.</h3><p>Pick a theme from the palette. Moving through the list previews it in the app.</p></div>
      <div className="capture-stage theme-capture"><AppCapture name="themes" alt="Glade's theme picker with its theme swatches, current selection, and keyboard hints." /></div>
    </article>
    <article className="ss-stage detail-card links-card">
      <div className="detail-copy"><h3>Link notes<br />together.</h3><p>Type @ to link a note. See where a note is referenced in its Linked from section.</p></div>
      <div className="capture-stage backlink-capture"><AppCapture name="backlinks" compact alt="A note in Glade with a normal Markdown link and the app's Linked from section showing referencing notes and their filenames." /></div>
    </article>
    <article className="ss-stage detail-card keyboard-card">
      <div className="detail-copy"><h3>Keyboard first.</h3><p>Jump to a note, split a pane, or run an action from the same palette.</p></div>
      <div className="capture-stage palette-capture"><AppCapture name="palette" compact alt="Glade's Actions palette, with grouped commands, real icons, and their keyboard shortcuts." /></div>
    </article>
  </div>;
}

const walkthrough = [
  {
    title: 'Open a folder.',
    description: 'Choose a folder of Markdown files from the app, or open one from your terminal.',
    capture: 'folder',
    alt: 'A folder of Markdown notes open in Glade.',
    command: 'glade ~/notes',
  },
  {
    title: 'Write on the page.',
    description: 'Pick a note and start writing. Format text, add links, and check off tasks in the editor.',
    capture: 'editor-rich',
    alt: 'Field notes.md in Glade’s rich text editor, with paragraphs and a task list.',
  },
  {
    title: 'See the Markdown.',
    description: 'Switch to source to see the same file as Markdown. Only the blocks you edit are rewritten; the rest stays as it was.',
    capture: 'editor-raw',
    alt: 'The same Field notes.md file shown as Markdown source in Glade.',
  },
];

export function HowItWorks() {
  return <>
    <div className="how-story" data-how-story>
    <div className="how-sticky">
      <h2 id="how-title" className="how-heading">How it works.</h2>
      {walkthrough.map((step, index) => <article className="how-scene" key={step.capture} data-how-scene data-active={index === 0 ? '' : undefined}>
        <div className="how-copy">
          <h3>{step.title}</h3>
          <p>{step.description}</p>
          {step.command && <code>{step.command}</code>}
        </div>
        <figure className="how-shot">
          <AppCapture name={step.capture} compact compactAt={900} alt={step.alt} />
        </figure>
      </article>)}
    </div>
    </div>
  </>;
}
