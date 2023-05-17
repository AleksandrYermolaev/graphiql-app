import { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/ext-language_tools';
import { getRequest } from 'services/thunkResponse';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { PlayCircle } from 'react-feather';
import './TextEditor.scss';

export const TextEditor = () => {
  const [request, setRequest] = useState('');
  const dispatch = useAppDispatch();

  const onClickRequest = () => {
    dispatch(getRequest(request));
  };

  return (
    <>
      <AceEditor
        className="editor"
        mode="javascript"
        theme="monokai"
        name="editor_js"
        fontSize="16"
        width="100%"
        border-radius="24px"
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={false}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          tabSize: 2,
          useWorker: false,
        }}
        onChange={(value: string) => setRequest(value)}
      />
      <PlayCircle color={'#e75b26'} size={'2em'} onClick={onClickRequest} className="btn_editor" />
    </>
  );
};
