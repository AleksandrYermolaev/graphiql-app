import AceEditor from 'react-ace';
import ace from 'ace-builds/src-noconflict/ace';
ace.config.set('basePath', 'https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/');
ace.config.setModuleUrl(
  'ace/mode/javascript_worker',
  'https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/worker-javascript.js'
);
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/worker-json';
import { useState } from 'react';

export const GraphiqlPage: React.FC = () => {
  const [, setState] = useState<string>('');

  const handleChange = (newValue: string) => {
    console.log(newValue);
    setState(newValue);
  };

  return (
    <AceEditor
      placeholder="write here..."
      mode={'json'}
      theme="monokai"
      fontSize={16}
      showPrintMargin={false}
      highlightActiveLine={false}
      tabSize={2}
      onChange={handleChange}
    />
  );
};
