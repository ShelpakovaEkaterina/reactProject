import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from './text-input';

test('text-input', () => {
    const component = renderer.create(
        <TextInput input={{ name: 'test' }} type="input" label="test" meta={{}} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

