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
import './SecondaryEditor.scss';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { setHeaders } from 'store/requestParamsSlice';

interface SecondaryEditorProps {
  type: 'headers' | 'variables';
}

export const SecondaryEditor: React.FC<SecondaryEditorProps> = ({ type }) => {
  const dispatch = useAppDispatch();
  const handleChange = (value: string): void => {
    if (type === 'headers') {
      dispatch(setHeaders(value));
    }
  };

  return (
    <AceEditor
      placeholder={`write ${type} here...`}
      mode={'json'}
      theme="monokai"
      fontSize={16}
      height="100%"
      width="100%"
      showPrintMargin={false}
      highlightActiveLine={false}
      tabSize={2}
      onChange={handleChange}
    />
  );
};
