import React from "react";

const items = [
  ['Will Glade rewrite my files?', 'Only the blocks you edit. Everything else is written back exactly as it was, and frontmatter edits touch only the lines you change. Glade never adds IDs, timestamps or hidden folders to your notes. Its own state, like recent folders and pins, lives in the app data directory.'],
  ['Can I keep using my other editor?', 'Yes. Glade watches the files and reloads them when something else changes them. If you have unsaved edits at that moment, you choose between your version and the one on disk.'],
  ['What about Git and sync?', 'Glade stays out of it. Use Git, Syncthing or a cloud folder as you do today, and whatever those tools change shows up in Glade.'],
  ['What can the editor do beyond text?', 'Diagrams with Mermaid, tables, task lists, tags, properties from frontmatter, backlinks between notes, a table of contents, and find and replace. Open two notes side by side in split panes, each with its own tabs.'],
  ['How do I get it?', 'Download the Windows installer or the Linux AppImage from the Download button. On Linux you can also run the one-line install command shown there. Glade updates itself when a new release is out. The Windows installer is not code-signed, so Windows asks you to confirm: choose More info, then Run anyway. You can also build it from source from the repository.'],
];
export default function Faq() {
  return <div className="faq-list">{items.map(([question, answer]) => <details key={question}>
    <summary>{question}<svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></summary>
    <div className="faq-answer"><p>{answer}</p></div>
  </details>)}</div>;
}
