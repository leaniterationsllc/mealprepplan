import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PhoneDemo from './index';
import enzymeconf from '../../utils/enzyme';

describe('PhoneDemo', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <PhoneDemo
        demoResolutions={{
          base64:
            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAkABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIBAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB9fOuJDqMuKJEc9LQP//EAB4QAAECBwEAAAAAAAAAAAAAAAAREgECECAiMUFC/9oACAEBAAEFAiCjaZDjtiKeiXX/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AV//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AV//xAAZEAEBAAMBAAAAAAAAAAAAAAAQMQABQZH/2gAIAQEABj8CIc8azIbP/8QAHRABAAIDAAMBAAAAAAAAAAAAAQARITFBEFFhof/aAAgBAQABPyHJ6gFxbsMsHf5H7pFDFMNs+Dd4Z1a198OlIXbLBenct2z/2gAMAwEAAgADAAAAEMfbQoAP/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxBf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxBf/8QAHhABAAMAAwEAAwAAAAAAAAAAAQARITFBUWEQkcH/2gAIAQEAAT8QoEC299y9KIrSpvnXMVtz1B/kENOuI5uBqAX45V+4o6fyXwZrjfv4BrU+kDcKW6l6FNlU9iLoiGXkIKzVW8RUWj6us//Z',
          height: 433.77777777777777,
          src: '/static/0398e16a29d93a0ebd55a5823a7002cd-599f4.jpg',
          srcSet:
            '/static/0398e16a29d93a0ebd55a5823a7002cd-599f4.jpg 1x,/static/0398e16a29d93a0ebd55a5823a7002cd-38a2e.jpg 1.5x,/static/0398e16a29d93a0ebd55a5823a7002cd-d4064.jpg 2x,/static/0398e16a29d93a0ebd55a5823a7002cd-86534.jpg 3x',
          width: 244
        }}
      />
    );
    expect(toJson(tree)).toMatchSnapshot();
  });
});
