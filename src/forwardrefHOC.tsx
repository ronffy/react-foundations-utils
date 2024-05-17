import React, { ForwardedRef, forwardRef } from 'react'

interface Theref<T> {
  /**用theref来代替原本的ref  */
  theref?: ForwardedRef<T>
}

const forwardrefHOC = function <T, D>(
  originalComponent: (props: T, ref: ForwardedRef<D>) => JSX.Element
) {
  const ForwardRefComponent = forwardRef(originalComponent)
  ForwardRefComponent.displayName =
    originalComponent.name || 'ForwardRefComponent'

  return function RenderComponent(props: T & Theref<D>) {
    return <ForwardRefComponent {...(props as any)} ref={props.theref} />
  }
}

export default forwardrefHOC
