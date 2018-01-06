/**
 * Copyright (c) 2017-present, Lean Iterations LLC.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable */
import React from 'react';
import feather from 'feather-icons';

export default (name, measureArray, styles) => {
  const featherString = feather.toSvg(name, {
    class: styles,
    width: measureArray[0],
    height: measureArray[1]
  });
  return <div dangerouslySetInnerHTML={{ __html: featherString }} />;
};
