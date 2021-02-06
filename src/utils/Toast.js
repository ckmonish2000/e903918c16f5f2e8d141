import { Toast } from 'native-base';

const DEFAULT_ARGS = {
  buttonText: 'Okay',
  duration: 3000,
  position: 'bottom'
}

function success(text) {
  return Toast.show({
    text,
    type: 'success',
    ...DEFAULT_ARGS
  })
}

function warning(text) {
 return Toast.show({
   text,
   ...DEFAULT_ARGS
 })
}

function error(err) {
 return Toast.show({
   text: err,
   type: 'danger',
   ...DEFAULT_ARGS
 })
}

export default { success, warning, error };
