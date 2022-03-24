export type BaseStoreListenerInit = { store: BaseStore; event: string };
export type BaseStoreListener = (init: BaseStoreListenerInit) => void;
export declare class BaseStore {
  constructor();

  public addChangeListener(listener: BaseStoreListener): void;
  public removeChangeListener(listener: BaseStoreListener): void;
  public emitChange(event: string): void;
  public get listenersCount(): number;

  private _onChangeListeners: BaseStoreListener[];
}
