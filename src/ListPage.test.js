import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListPage from './ListPage';

test('ListPage should be updated on change', () => {
    const testFn = jest.fn();
    const propItems = [];
    const user = { a: 1 };
    const house = { a: 1 };

    const { getByTestId } = render(
        <ListPage propItems={propItems} user={user} house={house} testFn={testFn} />
    );
    const productInput = getByTestId('product-unit-test');
    fireEvent.change(productInput, {
        target: { value: 'triggered' },
    });
    expect(testFn).toBeCalledWith('triggered');
    fireEvent.change(productInput, {
        target: { value: 'finished' },
    });
    expect(testFn).toBeCalledWith('finished');
    expect(testFn).toHaveBeenCalledTimes(2);
})  