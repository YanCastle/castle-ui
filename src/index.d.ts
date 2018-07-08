/**
 * tip提示
 * @param content
 * @param follow
 * @param options
 * @link http://www.layui.com/doc/modules/layer.html
 */
export declare function tips(content: string, follow?: any, options?: any): void;
/**
 * 加载中提示
 * @param icon
 * @param options
 * @link http://www.layui.com/doc/modules/layer.html
 */
export declare function loading(icon?: string, options?: any): void;
/**
 * msg 提示
 * @param content
 * @param options
 * @param end
 * @link http://www.layui.com/doc/modules/layer.html
 */
export declare function msg(content?: string, options?: any, end?: Function): void;
/**
 * 确认对话框
 * @param content
 * @param yes
 * @param cancel
 * @param options
 * @link http://www.layui.com/doc/modules/layer.html
 */
export declare function confirm(content: string, yes: Function, cancel: Function, options?: any): void;
/**
 * 警告
 * @param content
 * @param yes
 * @param options
 * @link http://www.layui.com/doc/modules/layer.html
 */
export declare function alert(content: string, yes: Function, options?: any): void;
declare const _default: {
    install: (Vue: any, opts?: {}) => void;
    alert: typeof alert;
    confirm: typeof confirm;
    msg: typeof msg;
    tips: typeof tips;
    loading: typeof loading;
};
export default _default;
