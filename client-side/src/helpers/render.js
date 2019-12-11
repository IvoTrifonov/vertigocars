import React from 'react';

export default function render(Cmp, otherProps) {
  return function (props) {
    return <Cmp {...props} {...otherProps} />
  };
}