import { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-less';
import 'ace-builds/src-noconflict/theme-monokai';
import { getRequest } from 'services/thunkResponse';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import { PauseCircle, PlayCircle } from 'react-feather';
import { selectHeaders, selectVariables } from 'store/requestParamsSlice';
import './TextEditor.scss';

export const TextEditor = () => {
  const [payload, setPayload] = useState('');
  const dispatch = useAppDispatch();
  const variables = useAppSelector(selectVariables);
  const headers = useAppSelector(selectHeaders);
  const { isLoading } = useAppSelector((state) => state.response);

  const onClickRequest = () => {
    dispatch(getRequest({ payload, variables, headers }));
  };

  return (
    <>
      <AceEditor
        className="editor"
        mode="less"
        theme="monokai"
        name="editor_js"
        fontSize={16}
        width={'calc(100% - 50px)'}
        height="100%"
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={false}
        setOptions={{
          tabSize: 2,
          useWorker: false,
        }}
        onChange={(value: string) => setPayload(value)}
      />
      {isLoading ? (
        <PauseCircle color={'#e75b26'} size={'2em'} className="btn_editor btn-pause" />
      ) : (
        <PlayCircle
          color={'#e75b26'}
          size={'2em'}
          onClick={onClickRequest}
          className="btn_editor"
        />
      )}
    </>
  );
};
