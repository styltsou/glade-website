import React from 'react';
import { Card } from './stageshow/kit/parts/Card';
import { Kbd } from './stageshow/kit/parts/Kbd';

function FileIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8Z"/><path d="M14 3v5h5M9 12h6M9 16h4"/></svg>;
}

// Still compositions adapted from Stageshow's static-card gold. Product controls
// use Glade's compact proportions; only the view switch and theme swatches are interactive.
export function Features() {
  return <div className="detail-grid">
    <article className="ss-stage detail-card diagram-card">
      <div className="detail-copy"><h3>Diagrams,<br />as you write.</h3><p>Mermaid diagrams render right in the note, next to the Markdown behind them.</p></div>
      <div className="diagram-stage" role="img" aria-label="A Mermaid flowchart, shown as source on the left and rendered on the right.">
        <Card className="diagram-scene" flush>
          <div className="diagram-source"><span className="diagram-tag">Markdown</span><pre>{'```mermaid\nflowchart LR\n  Idea --> Draft --> Ship\n```'}</pre></div>
          <div className="diagram-render"><span className="diagram-tag">Rendered</span>
            <svg viewBox="0 0 250 46" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth="1.2"><rect x="1" y="8" width="62" height="30" rx="7" /><rect x="94" y="8" width="62" height="30" rx="7" /><rect x="187" y="8" width="62" height="30" rx="7" /><path d="M63 23h31M156 23h31" /><path d="m89 19 5 4-5 4M182 19l5 4-5 4" strokeLinecap="round" strokeLinejoin="round" /></g><g fill="currentColor" fontSize="13" textAnchor="middle"><text x="32" y="27">Idea</text><text x="125" y="27">Draft</text><text x="218" y="27">Ship</text></g></svg>
          </div>
        </Card>
      </div>
    </article>

    <article className="ss-stage detail-card themes-card">
      <div className="detail-copy"><h3>Ten themes,<br />light and dark.</h3><p>Pick one that suits the room. Every theme comes in both modes.</p></div>
      <div className="themes-stage" role="group" aria-label="Theme preview">
        <Card className="theme-scene" flush>
          <fieldset className="theme-swatches"><legend className="sr-only">Preview theme</legend><label title="Linear"><input type="radio" name="theme-demo" value="linear" defaultChecked /><span className="swatch swatch-linear"><span className="sr-only">Linear</span></span></label><label title="Claude"><input type="radio" name="theme-demo" value="claude" /><span className="swatch swatch-claude"><span className="sr-only">Claude</span></span></label><label title="Vesper"><input type="radio" name="theme-demo" value="vesper" /><span className="swatch swatch-vesper"><span className="sr-only">Vesper</span></span></label><label title="Vercel"><input type="radio" name="theme-demo" value="vercel" /><span className="swatch swatch-vercel"><span className="sr-only">Vercel</span></span></label><label title="Catppuccin"><input type="radio" name="theme-demo" value="catppuccin" /><span className="swatch swatch-catppuccin"><span className="sr-only">Catppuccin</span></span></label></fieldset>
          <div className="theme-window"><div className="theme-side"><i /><i className="on" /><i /></div><div className="theme-doc"><b>Field notes</b><p>Keep the useful things close.</p><span className="theme-link">@Ideas</span><i className="theme-line" /><i className="theme-line short" /><span className="theme-button">Save</span></div></div>
        </Card>
      </div>
    </article>

    <article className="ss-stage detail-card links-card">
      <div className="detail-copy"><h3>Link notes<br />together.</h3><p>Type @ to link any note. Each note lists what links back to it.</p></div>
      <div className="links-stage" role="img" aria-label="Typing @field in a note opens a list of matching notes, and below it a Linked from panel lists two notes.">
        <Card className="links-scene" flush lift>
          <div className="links-line">Continue in <span className="at-query">@field</span><span className="terminal-caret" aria-hidden="true"></span></div>
          <div className="links-menu"><div className="command-match"><FileIcon /><span>Field notes<small>notes / writing</small></span></div><div className="command-other"><FileIcon /><span>Field guide</span></div></div>
          <div className="links-back"><span>Linked from 2</span><span>Ideas</span><span>README</span></div>
        </Card>
      </div>
    </article>

    <article className="ss-stage detail-card keyboard-card">
      <div className="detail-copy"><h3>Keyboard first.</h3><p>Jump to a note, split a pane, switch themes or run any action from one palette.</p></div>
      <div className="command-stage" role="img" aria-label="Glade's command palette showing search results for field, with Field notes.md selected."><Card className="command-scene" flush lift><div className="command-query"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/></svg><span>field</span><Kbd keys={['esc']} /></div><div className="command-results"><span className="command-label">Files</span><div className="command-match"><FileIcon /><span>Field notes.md<small>notes / writing</small></span><span className="enter-key" aria-hidden="true">↵</span></div><div className="command-other"><FileIcon /><span>Field guide.md</span></div></div><div className="command-foot"><span>Jump to a file</span><Kbd keys={['Ctrl', 'K']} /></div></Card></div>
    </article>
  </div>;
}

export function HowItWorks() {
  return <ol className="how-steps">
    <li>
      <div className="how-text"><span className="how-num">01</span><h3>Point it at<br />a folder.</h3><p>Open a directory from the app, or run <code>glade ~/notes</code> in a terminal. Glade reads it where it lives. Nothing is imported or moved.</p></div>
      <div className="ss-stage how-visual how-folder">
      <div className="files-stage" role="img" aria-label="A notes folder containing README.md, Ideas.md, and Field notes.md, opened with glade ~/notes">
        <Card className="folder-scene" flush><div className="folder-path"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10H3Z" /></svg><span>notes</span></div><div className="folder-files">{['README.md', 'Ideas.md', 'Field notes.md'].map((name, i) => <div className={i === 2 ? 'selected-file' : ''} key={name}><FileIcon /><span>{name}</span></div>)}<div className="folder-placeholder" aria-hidden="true"><FileIcon /><i /></div></div></Card>
        <Card className="terminal-scene" lift pad="small"><span>Open from anywhere</span><code><span aria-hidden="true">$ </span>glade ~/notes<span className="terminal-caret" aria-hidden="true"></span></code></Card>
      </div>
      </div>
    </li>
    <li>
      <div className="how-text"><span className="how-num">02</span><h3>Write rich,<br />or read the source.</h3><p>Work on a clean page, and flip any note to raw Markdown to see exactly what is on disk. It is one file in both views.</p></div>
      <div className="ss-stage how-visual how-reading">
      <div className="reading-stage">
        <Card className="document-scene" flush>
          <div className="document-bar"><span><FileIcon /><span>Field notes.md</span></span><fieldset className="view-control"><legend className="sr-only">Preview document view</legend><label><input type="radio" name="document-view" value="rich" defaultChecked aria-controls="rich-preview" /><span>Rich</span></label><label><input type="radio" name="document-view" value="raw" aria-controls="raw-preview" /><span>Raw</span></label></fieldset></div>
          <div className="document-page">
            <pre id="raw-preview" className="raw-document">{'# Field notes\n\nA good place to begin.\n\nKeep the useful things close, and\nleave a little room for the rest.\n\n- [x] Follow an interesting idea\n- [ ] See where it leads'}</pre><div id="rich-preview" className="rich-document"><h4>Field notes</h4><p className="document-lead">A good place to begin.</p><p>Keep the useful things close, and<br className="scene-break" /> leave a little room for the rest.</p><div className="document-task"><span className="task-check" aria-hidden="true">✓</span><span>Follow an interesting idea</span></div><div className="document-task"><span className="task-check empty" aria-hidden="true"></span><span>See where it leads</span></div></div>
          </div>
        </Card>
      </div>
      </div>
    </li>
    <li>
      <div className="how-text"><span className="how-num">03</span><h3>Glade stays<br />on top.</h3><p>Your files stay plain Markdown underneath. Only the blocks you edit are rewritten, so Git, sync tools and other editors keep working.</p></div>
      <div className="ss-stage how-visual how-layers" role="img" aria-label="Two stacked layers: Glade's editor floating above a folder of plain Markdown files.">
        <div className="layers">
          <div className="layers-stack">
            <div className="layer layer-files"><span className="layer-title">Your files</span><div className="layer-chips">{['README.md', 'Ideas.md', 'Field notes.md', 'today.md', 'Reading list.md', 'Plan.md'].map((n) => <span key={n}>{n}</span>)}</div></div>
            <div className="layer layer-glade"><span className="layer-title">Glade</span><div className="layer-doc"><b /><i /><i /><i className="short" /></div></div>
          </div>
        </div>
      </div>
    </li>
  </ol>;
}
