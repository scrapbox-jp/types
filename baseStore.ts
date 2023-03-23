export type BaseStoreListenerInit<Event, Derived extends BaseStore<Event>> = {
  store: Derived;
  event: Event;
};
export type BaseStoreListener<Event, Derived extends BaseStore<Event>> = (
  init: BaseStoreListenerInit<Event, Derived>,
) => void;
export declare class BaseStore<Event = string> {
  constructor();

  public addChangeListener(listener: BaseStoreListener<Event, this>): void;
  public removeChangeListener(listener: BaseStoreListener<Event, this>): void;
  public emitChange(event: string): void;
  public get listenersCount(): number;

  private _onChangeListeners: BaseStoreListener<Event, this>[];
}
