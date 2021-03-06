import React from 'react';
import { mount } from 'enzyme';
import RequiredAsterisk from './../requiredAsterisk';

describe('<TextareaInputRequiredAsterisk/>', () => {
    it('should set the title prop as required in the abbr element when is required', () => {
        const component = mount(
            <RequiredAsterisk required />,
        );
        const asterisk = component.find('abbr[className="rainbow-textarea-required"]');
        expect(asterisk.prop('title')).toBe('required');
    });
});
