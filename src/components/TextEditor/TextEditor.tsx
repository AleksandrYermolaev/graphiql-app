import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/ext-language_tools';

export const TextEditor = () => {
  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      name="editor_js"
      fontSize="16"
      width="50%"
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        tabSize: 2,
        useWorker: false,
      }}
    />
  );
};
