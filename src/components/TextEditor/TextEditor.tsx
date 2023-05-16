import { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/ext-language_tools';
import { getRequest } from 'services/thunkResponse';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';

export const TextEditor = () => {
  const [request, setRequest] = useState('');
  const { data, error } = useAppSelector((state) => state.response);
  const dispatch = useAppDispatch();

  const onClickRequest = () => {
    dispatch(getRequest(request));
  };

  return (
    <div className="wr">
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
        onChange={(value: string) => setRequest(value)}
      />
      <button onClick={onClickRequest}>Отправить</button>
      <div>{data && JSON.stringify(data)}</div>
      <div>{error && 'Уточните запрос'}</div>
    </div>
  );
};
