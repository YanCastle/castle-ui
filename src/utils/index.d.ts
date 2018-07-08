/**
    * 动态加载JS
    * @param {string} url 脚本地址
    * @param {function} callback  回调函数
    */
export declare function load_js(url: string, callback: Function): void;
/**
     * 动态加载CSS
     * @param {string} url 样式地址
     */
export declare function load_css(url: string): void;
export declare function rangeValidator(v: any, range: any[], name?: string): boolean;
