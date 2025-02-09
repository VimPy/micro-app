function eventHandler (event: Event, element: HTMLLinkElement | HTMLScriptElement): void {
  Object.defineProperties(event, {
    currentTarget: {
      get () {
        return element
      }
    },
    srcElement: {
      get () {
        return element
      }
    },
    target: {
      get () {
        return element
      }
    },
  })
}

export function dispatchOnLoadEvent (element: HTMLLinkElement | HTMLScriptElement): void {
  const event = new CustomEvent('load')
  eventHandler(event, element)
  if (typeof element.onload === 'function') {
    element.onload(event)
  } else {
    element.dispatchEvent(event)
  }
}

export function dispatchOnErrorEvent (element: HTMLLinkElement | HTMLScriptElement): void {
  const event = new CustomEvent('error')
  eventHandler(event, element)
  if (typeof element.onerror === 'function') {
    element.onerror(event)
  } else {
    element.dispatchEvent(event)
  }
}
