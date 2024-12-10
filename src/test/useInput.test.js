import { renderHook, act } from '@testing-library/react';
import useInput from '../hooks/useInput';

describe('useInput Hook', () => {
  test('updates value correctly', () => {
    const { result } = renderHook(() => useInput(''));
    act(() => result.current.setValue('test'));
    expect(result.current.value).toBe('test');
  });
});
