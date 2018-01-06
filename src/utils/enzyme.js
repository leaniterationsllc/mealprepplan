/**
 * Copyright (c) 2017-present, Lean Iterations LLC.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
// configuring enzyme to use the adapter for React 16
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

export default Enzyme.configure({ adapter: new Adapter() });
