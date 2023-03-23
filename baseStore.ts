export type BaseStoreListenerInit<Derived extends BaseStore> = {
  store: Derived;
  event: string;
};
export type BaseStoreListener<Derived extends BaseStore> = (
  init: BaseStoreListenerInit<Derived>,
) => void;
export declare class BaseStore {
  constructor();

  public addChangeListener(listener: BaseStoreListener<this>): void;
  public removeChangeListener(listener: BaseStoreListener<this>): void;
  public emitChange(event: string): void;
  public get listenersCount(): number;

  private _onChangeListeners: BaseStoreListener<this>[];
}
