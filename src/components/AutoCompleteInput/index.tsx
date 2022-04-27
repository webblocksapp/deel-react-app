import React, {
  FormEventHandler,
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  KeyboardEventHandler,
  FocusEventHandler,
  useEffect,
  useRef,
} from 'react';
import { CommonObject, ResultItem } from '@interfaces';
import { Label, TextField, TextFieldProps } from '@components';
import { AutoCompleteResult } from '../AutoCompleteResult';

export const AutoCompleteInputContext = createContext<{
  results: ResultItem[];
  match: string;
  loading: boolean;
  setMatch: Dispatch<SetStateAction<string>>;
  setShow: Dispatch<SetStateAction<boolean>>;
}>({} as any);

export const useAutoCompleteInputContext = () => useContext(AutoCompleteInputContext);

export interface AutoCompleteInputProps extends TextFieldProps {
  service: (filters?: CommonObject) => Promise<unknown[]>;
  map: ResultItem;
  filterKey: string;
  debounce?: number;
}

export const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
  debounce,
  filterKey,
  label,
  map,
  service,
  ...props
}) => {
  const [_, setTimer] = useState<NodeJS.Timeout>();
  const [show, setShow] = useState<boolean>(false);
  const [results, setResults] = useState<ResultItem[]>([]);
  const [match, setMatch] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isOver, setIsOver] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const mapResult = (record) => {
    return { primaryText: record[map['primaryText']], secondaryText: record?.[map?.['secondaryText']] };
  };

  const onInput: FormEventHandler<HTMLInputElement> = async (event) => {
    setLoading(true);
    const value = event.currentTarget.value;
    const filter = { [`${filterKey}_like`]: value };
    setMatch(value);
    setTimer((prevTimer) => {
      clearTimeout(prevTimer);
      return setTimeout(async () => {
        const data = await service(filter);
        setShow(true);
        setLoading(false);
        setResults(data.map(mapResult));
      }, debounce);
    });
    props.onInput && props.onInput(event);
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    event.key === 'Escape' && setShow(false);
    props.onKeyDown && props.onKeyDown(event);
  };

  const onFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    results.length && setShow(true);
    props.onFocus && props.onFocus(event);
  };

  const onClickAway = () => {
    !isOver && setShow(false);
  };

  const cleanUp = () => {
    document.removeEventListener('click', onClickAway);
  };

  useEffect(() => {
    ref.current.addEventListener('mouseenter', () => {
      setIsOver(true);
    });
    ref.current.addEventListener('mouseleave', () => {
      setIsOver(false);
    });
  }, []);

  useEffect(() => {
    document.addEventListener('click', onClickAway);
    return () => cleanUp();
  }, [isOver]);

  return (
    <AutoCompleteInputContext.Provider value={{ results, match, setMatch, setShow, loading }}>
      <Label>{label}</Label>
      <div ref={ref}>
        <TextField {...props} onInput={onInput} onKeyDown={onKeyDown} onFocus={onFocus} value={match} />
        <div style={{ position: 'relative' }}>{show && <AutoCompleteResult />}</div>
      </div>
    </AutoCompleteInputContext.Provider>
  );
};
AutoCompleteInput.defaultProps = {
  debounce: 300,
};
