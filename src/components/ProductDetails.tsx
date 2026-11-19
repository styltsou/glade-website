import React from 'react';
import { Card } from './stageshow/kit/parts/Card';
import { Kbd } from './stageshow/kit/parts/Kbd';

function FileIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8Z"/><path d="M14 3v5h5M9 12h6M9 16h4"/></svg>;
}

// Still compositions adapted from Stageshow's static-card gold. Product controls
// use Glade's compact proportions; only the view switch is interactive.
export default function ProductDetails() {
  return <div className="detail-grid">
    <article className="ss-stage detail-card reading-card">
      <div className="detail-copy"><h3>Rich text or<br />raw Markdown.</h3><p>A clean page when you want to read. <br />Plain Markdown when you want to get closer.</p></div>
      <div className="reading-stage">
        <Card className="document-scene" flush>
          <div className="document-bar"><span><FileIcon /><span>Field notes.md</span></span><fieldset className="view-control"><legend className="sr-only">Preview document view</legend><label><input type="radio" name="document-view" value="rich" defaultChecked aria-controls="rich-preview" /><span>Rich</span></label><label><input type="radio" name="document-view" value="raw" aria-controls="raw-preview" /><span>Raw</span></label></fieldset></div>
          <div className="document-page">
            <pre id="raw-preview" className="raw-document">{'# Field notes\n\nA good place to begin.\n\nKeep the useful things close, and\nleave a little room for the rest.\n\n- [x] Follow an interesting idea\n- [ ] See where it leads'}</pre><div id="rich-preview" className="rich-document"><h4>Field notes</h4><p className="document-lead">A good place to begin.</p><p>Keep the useful things close, and<br className="scene-break" /> leave a little room for the rest.</p><div className="document-task"><span className="task-check" aria-hidden="true">✓</span><span>Follow an interesting idea</span></div><div className="document-task"><span className="task-check empty" aria-hidden="true"></span><span>See where it leads</span></div></div>
          </div>
        </Card>
      </div>
    </article>

    <article className="ss-stage detail-card files-card">
      <div className="detail-copy"><h3>Open your files<br />in place.</h3><p>No imports, no special vault. <br />Just the files and folders you call yours.</p></div>
      <div className="files-stage" role="img" aria-label="A notes folder containing README.md, Ideas.md, and Field notes.md, opened with glade ~/notes">
        <Card className="folder-scene" flush><div className="folder-path"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10H3Z" /></svg><span>notes</span></div><div className="folder-files">{['README.md', 'Ideas.md', 'Field notes.md'].map((name, i) => <div className={i === 2 ? 'selected-file' : ''} key={name}><FileIcon /><span>{name}</span></div>)}<div className="folder-placeholder" aria-hidden="true"><FileIcon /><i /></div></div></Card>
        <Card className="terminal-scene" lift pad="small"><span>Open from anywhere</span><code><span aria-hidden="true">$ </span>glade ~/notes<span className="terminal-caret" aria-hidden="true"></span></code></Card>
      </div>
    </article>

    <article className="ss-stage detail-card diff-card">
      <div className="diff-scene" role="img" aria-label="A small Markdown diff: one task changed from incomplete to complete; surrounding lines stay the same."><div className="diff-label"><FileIcon />today.md<span>1 small change</span></div><div className="diff-lines"><code><span>1</span> # A little progress</code><code className="diff-removed"><span>−</span> - [ ] Finish the first draft</code><code className="diff-added"><span>+</span> - [x] Finish the first draft</code><code><span>3</span> Leave room for tomorrow.</code></div></div>
      <div className="detail-copy"><h3>Small edits. Small diffs.</h3><p>Untouched Markdown stays untouched. <br />No IDs or timestamps slipped into your files.</p></div>
    </article>

    <article className="ss-stage detail-card keyboard-card">
      <div className="detail-copy"><h3>Files and actions.</h3><p>Find a note or run an action from the command palette, without leaving the keyboard.</p></div>
      <div className="command-stage" role="img" aria-label="Glade's command palette showing search results for field, with Field notes.md selected."><Card className="command-scene" flush lift><div className="command-query"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/></svg><span>field</span><Kbd keys={['esc']} /></div><div className="command-results"><span className="command-label">Files</span><div className="command-match"><FileIcon /><span>Field notes.md<small>notes / writing</small></span><span className="enter-key" aria-hidden="true">↵</span></div><div className="command-other"><FileIcon /><span>Field guide.md</span></div></div><div className="command-foot"><span>Jump to a file</span><Kbd keys={['Ctrl', 'K']} /></div></Card></div>
    </article>
  </div>;
}
