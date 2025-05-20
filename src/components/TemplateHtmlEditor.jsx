import React, { useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { dracula } from "@uiw/codemirror-theme-dracula";

/**
 * Admin Template HTML Editor (final version):
 * - NO available fields section or messages.
 * - Exposes insertAtCursor(fieldName) as an imperative method via ref (to enable parent to call insert directly).
 * - All other UI is unchanged (matches admin style, stacked editor/preview, perfect scrolling).
 */
const TemplateHtmlEditor = forwardRef(function TemplateHtmlEditor(
  {
    value,
    onChange,
    className = "",
    style,
    previewMode = false,
    onTogglePreview,
  },
  ref
) {
  const editorRef = useRef();

  // Expose insertAtCursor to parent via ref
  useImperativeHandle(
    ref,
    () => ({
      insertAtCursor: (fieldName) => {
        try {
          if (!editorRef.current || typeof fieldName !== "string") return;
          
          // Get the CodeMirror instance
          const cm = editorRef.current.view;
          if (!cm) return;

          // Get the current selection
          const selection = cm.state.selection.main;
          const insert = `{{${fieldName}}}`;
          
          // Create the transaction to insert the text
          const transaction = cm.state.update({
            changes: {
              from: selection.from,
              to: selection.to,
              insert: insert
            },
            selection: { anchor: selection.from + insert.length }
          });
          
          // Apply the transaction
          cm.dispatch(transaction);
          
          // Focus the editor
          cm.focus();
          
          // Call onChange if provided
          if (onChange) {
            const newValue = cm.state.doc.toString();
            onChange(newValue);
          }
        } catch (error) {
          console.error('Error inserting field:', error);
        }
      }
    }),
    [onChange]
  );

  // --- Prevent Lenis or parent scrolling when inside CodeMirror.
  useEffect(() => {
    if (!editorRef.current?.view) return;
    const cm = editorRef.current.view;
    let scrollDOM = undefined;
    
    if (cm.contentDOM) {
      scrollDOM = cm.contentDOM;
    } else if (cm.dom && typeof cm.dom.querySelector === "function") {
      scrollDOM = cm.dom.querySelector('.cm-scroller');
    }
    if (!scrollDOM) return;

    const handleWheel = (e) => {
      const isScrollingVertically = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      if (!isScrollingVertically) return;
      const { scrollTop, scrollHeight, clientHeight } = scrollDOM;
      const atTop = scrollTop === 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
      if (!(atTop && e.deltaY < 0) && !(atBottom && e.deltaY > 0)) {
        e.stopPropagation();
        e.preventDefault();
      }
    };
    scrollDOM.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      if (scrollDOM) scrollDOM.removeEventListener("wheel", handleWheel, { passive: false });
    };
  }, [editorRef.current]);

  return (
    <div
      className={`w-full max-w-7xl mx-auto bg-transparent transition-all px-0 ${className}`}
      style={{ ...style, minWidth: 0, boxShadow: "none", border: "none" }}
    >
      {/* Top admin layout bar with gradient */}
      {/* <div className="relative w-full mb-8 border-b border-zinc-800">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent-text)] via-purple-500 to-blue-500"></div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between pt-4 pb-3 px-0">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--primary-text)]">Edit Template</h1>
            <p className="mt-1 text-sm text-[var(--secondary-text)]">
              Edit your template HTML and fields.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {onTogglePreview && (
              <button
                type="button"
                className="px-4 py-1.5 rounded bg-[var(--accent-text)] shadow text-sm font-semibold text-black hover:opacity-90"
                onClick={onTogglePreview}
              >
                {previewMode ? "Switch to editor" : "Switch to preview"}
              </button>
            )}
          </div>
        </div>
      </div> */}

      {/* Editor and Live Preview vertical stack */}
      <div className="flex flex-col w-full px-0 pb-0 gap-6" onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}>
        {!previewMode && (
          <div className="bg-[var(--background)] rounded-xl p-0 shadow-lg border border-zinc-800/60 w-full">
            <CodeMirror
              value={value}
              height="340px"
              theme={dracula}
              extensions={[html()]}
              ref={editorRef}
              onChange={onChange}
              style={{
                fontFamily: "Fira Mono, JetBrains Mono, monospace",
                fontSize: 15,
                background: "#14111e",
                width: "100%",
                borderRadius: "12px",
                border: "1px solid #23232a",
                minWidth: 0,
              }}
              className="w-full"
            />
          </div>
        )}

        {previewMode && (
          <div className="relative rounded-lg overflow-hidden border border-zinc-700 bg-white w-full max-w-3xl mx-auto">
            <div className="bg-zinc-100 border-b border-zinc-300 px-4 py-2 flex items-center">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto text-xs text-zinc-500 font-medium">Template Preview</div>
            </div>
            <div
              className="p-6 overflow-auto max-h-[60vh] bg-white text-black"
              style={{ fontFamily: "system-ui, sans-serif" }}
              dangerouslySetInnerHTML={{ __html: value || '<div style="padding: 40px; text-align: center; color: #666; font-family: system-ui, sans-serif;"><h3 style="margin-bottom: 10px; font-size: 18px;">No HTML content defined</h3></div>' }}
            />
          </div>
        )}
      </div>
    </div>
  );
});

export default TemplateHtmlEditor;