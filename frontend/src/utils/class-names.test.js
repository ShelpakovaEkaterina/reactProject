import classNames from './class-names';

test('test class names', () => {
    expect(classNames('test', 'added')).toBe('test test_added');
});

test('test class names 2', () => {
    expect(classNames('test', 'added')).toBe('tes');
});
