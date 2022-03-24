/// <reference no-default-lib="true"/>
/// <reference lib="esnext"/>
/// <reference lib="dom"/>

// cut and modified from https://cdn.esm.sh/v73/@types/react@17.0.42/index.d.ts

type NativeMouseEvent = MouseEvent;

// deno-lint-ignore no-namespace
export namespace React {
  /**
   * currentTarget - a reference to the element on which the event listener is registered.
   *
   * target - a reference to the element from which the event was originally dispatched.
   * This might be a child element to the element on which the event listener is registered.
   * If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682
   */
  export interface SyntheticEvent<
    T extends Element = Element,
    E extends Event = Event,
  > {
    nativeEvent: E;
    currentTarget: T & EventTarget;
    target: EventTarget;
    bubbles: boolean;
    cancelable: boolean;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    preventDefault(): void;
    isDefaultPrevented(): boolean;
    stopPropagation(): void;
    isPropagationStopped(): boolean;
    persist(): void;
    timeStamp: number;
    type: string;
  }
  export interface AbstractView {
    styleMedia: StyleMedia;
    document: Document;
  }

  export interface UIEvent<T extends Element = Element, E extends Event = Event>
    extends SyntheticEvent<T, E> {
    detail: number;
    view: AbstractView;
  }
  export interface MouseEvent<
    T extends Element = Element,
    E extends Event = NativeMouseEvent,
  > extends UIEvent<T, E> {
    altKey: boolean;
    button: number;
    buttons: number;
    clientX: number;
    clientY: number;
    ctrlKey: boolean;
    /**
     * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
     */
    getModifierState(key: string): boolean;
    metaKey: boolean;
    movementX: number;
    movementY: number;
    pageX: number;
    pageY: number;
    relatedTarget: EventTarget | null;
    screenX: number;
    screenY: number;
    shiftKey: boolean;
  }
}
