import "./index.scss";

import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

export default () => {
  const editor = useEditor({
    extensions: [StarterKit, Highlight, Typography],
    content: `请输入内容（markdown格式）`,
  });

  return <EditorContent className="editor-content" editor={editor} />;
};
