import { useState, useCallback, useEffect, useRef } from 'react';
import * as Style from './Select.style';
import { SelectProps, Selected } from './Select.types';

const Select = ({ defaultOption = 0, disabled = false, onChange, options = [] }: SelectProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Selected | null>(null);

  useEffect(() => {
    if (options.length > 0) {
      const clamped = Math.min(Math.max(defaultOption, 0), options.length - 1);
      setSelected({ value: options[clamped], callOnChange: false });
    }
  }, [defaultOption, options]);

  useEffect(() => {
    if (!selected && options.length > 0) {
      const clamped = Math.min(Math.max(defaultOption, 0), options.length - 1);
      setSelected({ value: options[clamped], callOnChange: false });
    }
  }, [defaultOption, options, selected]);

  const onSelectClick = useCallback(() => {
    if (disabled) {
      return;
    }
    setIsOpen(!isOpen);
  }, [disabled, isOpen]);

  const onOptionClick = useCallback(
    (option: string) => {
      // Prevent updates when option is the current selection
      if (selected?.value === option) {
        setIsOpen(false);
        return;
      }
      setSelected({ value: option, callOnChange: true });
      setIsOpen(false);
    },
    [selected],
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
    <Style.Option key={option} onClick={() => onOptionClick(option)}>
      <Style.OptionLabel>{option}</Style.OptionLabel>
    </Style.Option>
  ));

  return (
    <Style.Wrapper data-testid="select" ref={wrapperRef}>
      <Style.Field data-testid="select-field" isOpen={isOpen} onClick={onSelectClick} disabled={disabled}>
        <Style.Label title={selected?.value}>{selected && selected ? selected.value : ''}</Style.Label>
      </Style.Field>
      <Style.Options data-testid="select-options" show={!!isOpen}>
        {optionsMap}
      </Style.Options>
    </Style.Wrapper>
  );
};

export default Select;
