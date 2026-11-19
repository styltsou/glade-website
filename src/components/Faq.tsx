import React from "react";

const items = [
  ['What is Glade?', 'Glade is a desktop viewer and editor for existing Markdown files. Open a single file, a notes folder, or the docs in a codebase, and work on them in place.'],
  ['Do I need to import my notes?', 'No. Open the folder you already use. Glade keeps recent folders, pins, and window state in its own app data directory. It does not add hidden folders, IDs, or timestamps to your notes.'],
  ['Can I use it alongside another editor?', 'Yes. Your files stay ordinary Markdown. Glade watches for external changes and reloads them. If you have unsaved edits, you choose whether to keep yours or load the version on disk.'],
  ['Does Glade handle Git or sync?', 'Glade does not manage commits or sync. Use Git, Syncthing, or a cloud folder as you normally would. Changes made by those tools show up in Glade.'],
  ['Does the rich editor change my formatting?', 'Glade preserves the original text of untouched Markdown blocks. Edited blocks are serialized back to Markdown, and frontmatter edits change only the lines you touch.'],
  ['How can I try it?', 'Glade is under active development and available from source under the MIT license. There are no prebuilt installers yet. The repository includes development setup and a local Linux install command.'],
];
export default function Faq() {
  return <div className="faq-list">{items.map(([question, answer]) => <details key={question}>
    <summary>{question}<span aria-hidden="true" className="faq-symbol">+</span></summary>
    <p>{answer}</p>
  </details>)}</div>;
}
