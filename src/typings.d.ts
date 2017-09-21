/* SystemJS module definition */
declare var module: NodeModule;
declare var require: any;

interface NodeModule {
  id: string;
}

interface IExtendedComponentOptions extends ng.IComponentOptions {
  styles?: string;
}
