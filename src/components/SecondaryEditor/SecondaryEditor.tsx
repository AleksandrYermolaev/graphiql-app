import AceEditor from 'react-ace';
import { useIntl } from 'react-intl';
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
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import { selectHeaders, selectVariables, setHeaders, setVariables } from 'store/requestParamsSlice';
import { useDebouncedCallback } from 'use-debounce';

interface SecondaryEditorProps {
  type: 'headers' | 'variables';
}

export const SecondaryEditor: React.FC<SecondaryEditorProps> = ({ type }) => {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  const debouncedVariablesDispatch = useDebouncedCallback((value: string) => {
    dispatch(setVariables(value));
  }, 250);
  const debouncedHeadersDispatch = useDebouncedCallback((value: string) => {
    dispatch(setHeaders(value));
  }, 250);

  const variablesValue = useAppSelector(selectVariables);
  const headersValue = useAppSelector(selectHeaders);

  const handleChange = (value: string): void => {
    if (type === 'headers') {
      debouncedHeadersDispatch(value);
    }
    if (type === 'variables') {
      debouncedVariablesDispatch(value);
    }
  };

  return (
    <AceEditor
      placeholder={
        type === 'headers'
          ? intl.formatMessage({ id: 'headersPlaceholder' })
          : intl.formatMessage({ id: 'variablesPlaceholder' })
      }
      mode={'json'}
      value={type === 'headers' ? headersValue : variablesValue}
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
