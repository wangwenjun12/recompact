import invariant from './utils/invariant';
import createHOCFromMapper from './utils/createHOCFromMapper';
import createHelper from './createHelper';

const mapPropsStream = propsStreamMapper => createHOCFromMapper((props$, obs) => {
  const nextProps$ = propsStreamMapper(props$, obs);
  invariant(typeof nextProps$.subscribe === 'function', 'Expected a props Observable.');
  return [nextProps$, obs];
});

export default createHelper(mapPropsStream, 'mapPropsStream');
