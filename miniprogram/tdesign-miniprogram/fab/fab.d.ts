import { SuperComponent } from '../common/src/index';
export default class Fab extends SuperComponent {
    properties: import("./type").TdFabProps;
    externalClasses: string[];
    data: {
        prefix: string;
        classPrefix: string;
        baseButtonProps: {
            size: string;
            shape: string;
            theme: string;
        };
    };
    methods: {
        onTplButtonTap(e: any): void;
    };
}
