import { useState, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './Select.style';
import { SelectProps, Selected } from './Select.types';
import { inputsActions } from '@src/store/modules/inputs';
import { InputsTypes } from '@src/store/modules/inputs/inputs.types';
import { AppState } from '@src/store/store.types';
import { addEllipsis, translate } from '@src/utils';

const Select = ({
  disabled = false,
  onChange,
  options = [],
  type,
}: SelectProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const inputs = useSelector((state: AppState) => state.inputs);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Selected | null>(null);

  useEffect(() => {
    if (options.length > 0) {
      setSelected({ value: String(inputs[type as InputsTypes]), callOnChange: false });
    }
  }, [options, inputs, type]);

  useEffect(() => {
    if (!selected && options.length > 0) {
      setSelected({ value: String(inputs[type as InputsTypes]), callOnChange: false });
    }
  }, [options, selected, inputs, type]);

  const onSelectClick = useCallback(() => {
    if (disabled) {
      return;
    }
    setIsOpen(!isOpen);
  }, [disabled, isOpen]);

  const onOptionClick = useCallback(
    (option: string) => {
      if (selected?.value === option) {
        setIsOpen(false);
        return;
      }
      setSelected({ value: option, callOnChange: true });
      dispatch(inputsActions.addFilter(option, type));
      setIsOpen(false);
    },
    [selected, dispatch, type],
  );

  useEffect(() => {
    if (selected && onChange && selected.callOnChange) {
      onChange(selected.value);
    }
  }, [onChange, selected]);

  const onMouseDown = useCallback(
    (event: any) => {
      if (isOpen && wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    },
    [isOpen],
  );

  useEffect(() => {
    window.addEventListener('mousedown', onMouseDown);
    return () => {
      window.removeEventListener('mousedown', onMouseDown);
    };
  }, [onMouseDown]);

  const optionsMap = options.map((option) => (
    <S.Option key={option} onClick={() => onOptionClick(option)}>
      <S.OptionLabel>{option}</S.OptionLabel>
    </S.Option>
  ));

  return (
    <S.Wrapper data-testid="select" ref={wrapperRef} label={translate(type)} show={!!isOpen}>
      <S.Field data-testid="select-field" onClick={onSelectClick}>
        <S.Label>{selected && addEllipsis(selected.value)}</S.Label>
      </S.Field>
      <S.Options data-testid="select-options" show={!!isOpen}>
        {optionsMap}
      </S.Options>
    </S.Wrapper>
  );
};

export default Select;
