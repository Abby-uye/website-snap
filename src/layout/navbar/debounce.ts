export function debounce(func: () => void, wait: number, immediate?: boolean) {
  var timeout: any;

  return function () {
    // @ts-ignore
    var context: any = this as any,
      args: any = arguments;

    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
