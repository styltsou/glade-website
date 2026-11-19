import React from "react";

const items = [
  ['Will Glade rewrite my files?', 'Only the blocks you edit. Everything else is written back exactly as it was, and frontmatter edits touch only the lines you change. Glade never adds IDs, timestamps or hidden folders to your notes. Its own state, like recent folders and pins, lives in the app data directory.'],
  ['Can I keep using my other editor?', 'Yes. Glade watches the files and reloads them when something else changes them. If you have unsaved edits at that moment, you choose between your version and the one on disk.'],
  ['What about Git and sync?', 'Glade stays out of it. Use Git, Syncthing or a cloud folder as you do today, and whatever those tools change shows up in Glade.'],
  ['What can the editor do beyond text?', 'Diagrams with Mermaid, tables, task lists, tags, properties from frontmatter, backlinks between notes, a table of contents, and find and replace. Open two notes side by side in split panes, each with its own tabs.'],
  ['How do I get it?', 'Glade is open source under the MIT license and still in development. There are no prebuilt installers yet, so for now you build it from source. The repository has the setup steps and a local Linux install command.'],
];
export default function Faq() {
  return <div className="faq-list">{items.map(([question, answer]) => <details key={question}>
    <summary>{question}<span aria-hidden="true" className="faq-symbol">+</span></summary>
    <p>{answer}</p>
  </details>)}</div>;
}
