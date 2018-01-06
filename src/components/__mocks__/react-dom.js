/**
 * Copyright (c) 2017-present, Lean Iterations LLC.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';

const reactDom = jest.genMockFromModule('react-dom');

function mockCreatePortal(element, target) {
  return (
    <div>
      <div id="content">{element}</div>
      <div id="target" data-target-tag-name={target.tagName} />
    </div>
  );
}

reactDom.createPortal = mockCreatePortal;

module.exports = reactDom;
